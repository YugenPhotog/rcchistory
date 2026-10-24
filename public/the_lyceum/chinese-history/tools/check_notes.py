#!/usr/bin/env python3
"""HIST 270 Study Buddy notes checker (see HIST270_deck_house_style_FA26.md, section 7).

Usage: python3 check_notes.py deck.html [deck2.html ...] [--verbose]
Exits 1 if any deck fails the approval gate:
  0 empty notes, 0 stage directions, >=90% slides with an Ebrey page cite,
  every content slide has both "Why this matters:" and "Check yourself:".
"""
import re, sys, statistics
from html.parser import HTMLParser

STAGE = [r"⏱", r"\bslow down\b", r"\b\d+\s*(?:-|–)?\s*min(?:ute)?s?\b", r"\b\d{1,2}:\d{2}\b",
         r"\[(?:pause|skip|click|key)[^\]]*\]", r"\bpause (?:here )?for\b", r"\bif (?:you are |you're )?(?:behind|short on time)\b"]
STAGE_RE = re.compile("|".join(STAGE), re.I)
LETTER_RE = re.compile(r"\bslides? (?!(?:go|to|in|is|at|on|of|as|do|so|up|an|be|by|if|it|me|my|no|or|we|us|he)\b)[a-z]{1,2}\b")
CITE_RE = re.compile(r"\(\s*(?:Ebrey,?\s*)?pp?\.\s*\d+|\bEbrey,?\s*(?:Ch\.\s*\d+,\s*)?pp?\.\s*\d+", re.I)
NON_CONTENT_IDS = {"title", "pierian-spring", "roadmap", "closing"}

class Deck(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.slides, self.stack, self.in_notes = [], [], 0
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "section":
            s = {"id": a.get("id") or f"#{len(self.slides)+1}", "cls": a.get("class") or "", "notes": None, "text": ""}
            if self.stack: self.stack[-1]["parent"] = True
            self.stack.append(s); self.slides.append(s)
        elif tag == "aside" and "notes" in (a.get("class") or "").split() and self.stack:
            self.in_notes += 1
            if self.stack[-1]["notes"] is None: self.stack[-1]["notes"] = ""
    def handle_endtag(self, tag):
        if tag == "aside" and self.in_notes: self.in_notes -= 1
        elif tag == "section" and self.stack: self.stack.pop()
    def handle_data(self, d):
        if self.in_notes and self.stack: self.stack[-1]["notes"] += d

def check(path, verbose):
    p = Deck(); p.feed(open(path, encoding="utf-8").read())
    slides = [s for s in p.slides if not s.get("parent")]  # skip vertical-stack wrappers
    problems, words = [], []
    empty = stage = letters = cited = 0
    missing = []
    for s in slides:
        n = (s["notes"] or "").strip(); w = len(n.split()); words.append(w)
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
        if CITE_RE.search(n): cited += 1
        if content:
            lack = [t for t in ("Why this matters:", "Check yourself:") if t not in n]
            if lack: missing.append(s["id"]); problems.append(f"  MISSING    {s['id']}: {', '.join(lack)}")
    total = len(slides) or 1
    cover = 100 * cited / total
    ok = empty == 0 and stage == 0 and cover >= 90 and not missing
    print(f"== {path}")
    print(f"  slides {len(slides)} | words min {min(words or [0])} median {statistics.median(words or [0]):.0f} max {max(words or [0])} total {sum(words)}")
    print(f"  empty {empty} | stage directions {stage} | letter refs {letters} | page-cite coverage {cited}/{len(slides)} = {cover:.0f}% | content slides missing tags {len(missing)}")
    if verbose: print("\n".join(problems))
    else:
        print("\n".join(problems[:25]) + (f"\n  … {len(problems)-25} more (use --verbose)" if len(problems) > 25 else ""))
    print(f"  GATE: {'PASS' if ok else 'FAIL'}")
    return ok

if __name__ == "__main__":
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    if not args: print(__doc__); sys.exit(2)
    results = [check(a, "--verbose" in sys.argv) for a in args]
    sys.exit(0 if all(results) else 1)
