#!/usr/bin/env python3
"""Cross-course Study Buddy notes checker (see ../deck_house_style_base.md).
Generalized from chinese-history/tools/check_notes.py; default --course HIST270
reproduces the original's output and gate exactly (when the RQ checks find nothing).

Usage: python3 check_notes.py deck.html [deck2.html ...] [--course HIST270|HIST102|HIST101|PHIL210]
                              [--rq | --no-rq] [--verbose]
Exits 1 if any deck fails the approval gate:
  0 empty notes, 0 stage directions, >=90% slides with a textbook page cite,
  every content slide has both "Why this matters:" and "Check yourself:",
  and (where the course has review questions) every reading-guide checkpoint
  slide quotes its question, names it in the notes, and shows no answer.
"""
import re, sys, statistics
from html.parser import HTMLParser

# Course layers. cite = regex for a textbook page cite in the notes.
GENERIC_CITE = r"\(\s*(?:[A-Z][A-Za-z'’-]+,?\s*)?pp?\.\s*\d+"
COURSES = {
    "HIST270": {"name": "HIST 270", "rq": True,
                "cite": r"\(\s*(?:Ebrey,?\s*)?pp?\.\s*\d+|\bEbrey,?\s*(?:Ch\.\s*\d+,\s*)?pp?\.\s*\d+"},
    "HIST102": {"name": "HIST 102", "rq": True,  "cite": GENERIC_CITE},
    "HIST101": {"name": "HIST 101", "rq": False, "cite": GENERIC_CITE},  # no review questions yet
    "PHIL210": {"name": "PHIL 210", "rq": True,  "cite": GENERIC_CITE},
}
COVERAGE_MIN = 90

STAGE = [r"⏱", r"\bslow down\b", r"\b\d+\s*(?:-|–)?\s*min(?:ute)?s?\b", r"\b\d{1,2}:\d{2}\b",
         r"\[(?:pause|skip|click|key)[^\]]*\]", r"\bpause (?:here )?for\b", r"\bif (?:you are |you're )?(?:behind|short on time)\b"]
STAGE_RE = re.compile("|".join(STAGE), re.I)
LETTER_RE = re.compile(r"\bslides? (?!(?:go|to|in|is|at|on|of|as|do|so|up|an|be|by|if|it|me|my|no|or|we|us|he)\b)[a-z]{1,2}\b")
NON_CONTENT_IDS = {"title", "pierian-spring", "roadmap", "closing"}
# Reading-guide checkpoint slides: id rg-qN / ps-rg-qN / your-turn-qN, or class rg-checkpoint / assessment-slide (PHIL 210).
RG_ID_RE = re.compile(r"^(?:ps-)?(?:rg|your-turn)-q(\d+)", re.I)
RG_CLASSES = {"rg-checkpoint", "assessment-slide"}
RQ_TEXT_CLASSES = {"rq-text", "assessment-prompt"}
RG_NOTE_RE = re.compile(r"Reading Guide,?\s*(?:Review\s*)?Q(?:uestion)?\s*#?\s*\d+", re.I)
ANSWER_RE = re.compile(r"\b(?:model|suggested|sample|possible|example) answers?\b(?!\s*(?:is|are)?\s*(?:not|never))", re.I)
NEGATED_RE = re.compile(r"\b(?:never|not|no|don't|do not)\b[^.]{0,40}$", re.I)

class Deck(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.slides, self.stack, self.in_notes, self.in_rq = [], [], 0, 0
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        cls = (a.get("class") or "").split()
        if tag == "section":
            s = {"id": a.get("id") or f"#{len(self.slides)+1}", "cls": a.get("class") or "", "notes": None,
                 "text": "", "rq": ""}
            if self.stack: self.stack[-1]["parent"] = True
            self.stack.append(s); self.slides.append(s)
        elif tag == "aside" and "notes" in cls and self.stack:
            self.in_notes += 1
            if self.stack[-1]["notes"] is None: self.stack[-1]["notes"] = ""
        elif self.in_rq and self.stack and tag not in ("br", "img", "hr", "input", "meta", "link", "wbr"):
            self.in_rq += 1
        elif RQ_TEXT_CLASSES & set(cls) and self.stack:
            self.in_rq = 1
    def handle_endtag(self, tag):
        if tag == "aside" and self.in_notes: self.in_notes -= 1
        elif tag == "section" and self.stack: self.stack.pop()
        elif self.in_rq: self.in_rq -= 1
    def handle_data(self, d):
        if not self.stack: return
        if self.in_notes: self.stack[-1]["notes"] += d
        else:
            self.stack[-1]["text"] += d
            if self.in_rq: self.stack[-1]["rq"] += d

def answer_hits(text):
    hits = []
    for m in ANSWER_RE.finditer(text):
        if not NEGATED_RE.search(text[max(0, m.start()-60):m.start()]): hits.append(m.group(0))
    return hits

def check(path, verbose, course, rq_on):
    cite_re = re.compile(course["cite"], re.I)
    p = Deck(); p.feed(open(path, encoding="utf-8").read())
    slides = [s for s in p.slides if not s.get("parent")]  # skip vertical-stack wrappers
    problems, words = [], []
    empty = stage = letters = cited = 0
    missing, rq_bad, rg_count = [], [], 0
    for s in slides:
        n = (s["notes"] or "").strip(); w = len(n.split()); words.append(w)
        is_rg = bool(RG_ID_RE.match(s["id"])) or bool(RG_CLASSES & set(s["cls"].split()))
        if rq_on and is_rg:
            rg_count += 1
            if not s["rq"].strip():
                rq_bad.append(s["id"]); problems.append(f"  RQ-TEXT    {s['id']}: no .rq-text/.assessment-prompt (quote the question verbatim)")
            if n and not RG_NOTE_RE.search(n):
                rq_bad.append(s["id"]); problems.append(f"  RQ-NOTE    {s['id']}: notes do not name 'Reading Guide Q#'")
            for h in answer_hits(s["text"] + " " + n):
                rq_bad.append(s["id"]); problems.append(f"  RQ-ANSWER  {s['id']}: '{h}' (never give the answer)")
        content = s["id"] not in NON_CONTENT_IDS and "visual-hero" not in s["cls"]
        if not n: empty += 1; problems.append(f"  EMPTY      {s['id']}"); continue
        lo, hi = (120, 250) if content else (60, 100)
        if w > 300: problems.append(f"  OVER-300   {s['id']} ({w} words): split or trim")
        elif w < lo: problems.append(f"  THIN       {s['id']} ({w} < {lo})")
        elif w > hi: problems.append(f"  LONG       {s['id']} ({w} > {hi})")
        for m in STAGE_RE.finditer(n):
            stage += 1; problems.append(f"  STAGE      {s['id']}: '{m.group(0)}'")
        for m in LETTER_RE.finditer(n):
            letters += 1; problems.append(f"  LETTER-REF {s['id']}: '{m.group(0)}'")
        if cite_re.search(n): cited += 1
        if content:
            lack = [t for t in ("Why this matters:", "Check yourself:") if t not in n]
            if lack: missing.append(s["id"]); problems.append(f"  MISSING    {s['id']}: {', '.join(lack)}")
    total = len(slides) or 1
    cover = 100 * cited / total
    ok = empty == 0 and stage == 0 and cover >= COVERAGE_MIN and not missing and not rq_bad
    print(f"== {path}")
    print(f"  slides {len(slides)} | words min {min(words or [0])} median {statistics.median(words or [0]):.0f} max {max(words or [0])} total {sum(words)}")
    print(f"  empty {empty} | stage directions {stage} | letter refs {letters} | page-cite coverage {cited}/{len(slides)} = {cover:.0f}% | content slides missing tags {len(missing)}")
    if rq_bad: print(f"  reading-guide checkpoints {rg_count} | RQ problems {len(rq_bad)}")
    if verbose: print("\n".join(problems))
    else:
        print("\n".join(problems[:25]) + (f"\n  … {len(problems)-25} more (use --verbose)" if len(problems) > 25 else ""))
    print(f"  GATE: {'PASS' if ok else 'FAIL'}")
    return ok

def main(argv):
    code, rq, args, i = "HIST270", None, [], 0
    while i < len(argv):
        a = argv[i]
        if a == "--course": code = argv[i+1].upper().replace(" ", ""); i += 2; continue
        if a.startswith("--course="): code = a.split("=", 1)[1].upper().replace(" ", "")
        elif a == "--rq": rq = True
        elif a == "--no-rq": rq = False
        elif not a.startswith("--"): args.append(a)
        i += 1
    if code not in COURSES: print(f"unknown course {code}; choose from {', '.join(COURSES)}"); return 2
    if not args: print(__doc__); return 2
    course = COURSES[code]; rq_on = course["rq"] if rq is None else rq
    results = [check(a, "--verbose" in argv, course, rq_on) for a in args]
    return 0 if all(results) else 1

if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
