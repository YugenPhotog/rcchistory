#!/usr/bin/env python3
"""HIST 270 deck linter: checks Reveal decks against HOUSE_STANDARD.md.
Usage: lint_hist270.py [--root REVEAL_DECKS_DIR] [--report out.md] [deck.html ...]
With no deck args, lints every in-scope deck (chapters 01,02,03,04,05,08,12; skips archive/, _tools/, *_pre-*).
Exit code 1 if any ERROR found."""
import re, os, sys, json, glob, html, argparse, collections
SCOPE = ['01','02','03','04','05','08','12']
MIN_WORDS = 60
BANNED = r"turn to (your|a) neighbou?r|your neighbou?r|(with|your|a) partner\b|partner up|pair up|pair-share|think-pair|small groups?|in[- ]class|tonight|next time|last time|this week|tomorrow|circulate( the room|[;.]| and (check|listen|help|look))|take a (quick )?vote|show of hands|raise your hand|poll the class|on the board|handout|ask (the |one )?students?|have students|students should|remind students|instructor|teaching cautions?|for instructor preparation|\bassessed\b|break into"
ID_RE = re.compile(r'^[A-Z]{1,3}$')
def txt(s): return re.sub(r'\s+', ' ', html.unescape(re.sub(r'<[^>]+>', ' ', s))).strip()
def leaf_sections(body):
    return [(m.group(1), m.group(0)) for m in re.finditer(r'<section\b([^>]*)>(?:(?!<section\b).)*?</section>', body, re.S)]
def attr(a, n):
    m = re.search(r'\b' + n + r'\s*=\s*"([^"]*)"', a); return m.group(1) if m else None
def lint(path):
    E, W = [], []
    t = open(path, encoding='utf-8', errors='ignore').read()
    body = t.split('class="slides"', 1)[-1]
    secs = leaf_sections(body)
    # --- notes
    nonotes, thin, banned_hits = [], [], collections.Counter()
    ids, ytn = [], []
    for i, (a, s) in enumerate(secs, 1):
        sid = attr(a, 'data-slide-id') or f'#{i}'
        ids.append(attr(a, 'data-slide-id'))
        m = re.search(r'<aside class="notes"[^>]*>(.*?)</aside>', s, re.S)
        if not m: nonotes.append(sid)
        elif len(txt(m.group(1)).split()) < MIN_WORDS: thin.append(sid)
        for h in re.findall(BANNED, txt(s), re.I): banned_hits[(h if isinstance(h, str) else h[0]).lower() or 'match'] += 1
    if nonotes: E.append(f'{len(nonotes)} slide(s) without notes: {",".join(nonotes[:12])}{"…" if len(nonotes)>12 else ""}')
    if thin: E.append(f'{len(thin)} slide(s) with notes < {MIN_WORDS} words: {",".join(thin[:12])}{"…" if len(thin)>12 else ""}')
    bh = collections.Counter()
    for a, s in secs:
        for m in re.finditer(BANNED, txt(s), re.I): bh[m.group(0).lower()] += 1
    if bh: E.append('classroom/instructor phrases: ' + ', '.join(f'{k}×{v}' for k, v in bh.most_common()))
    # --- ids
    missing = sum(1 for x in ids if not x)
    present = [x for x in ids if x]
    if missing: E.append(f'{missing}/{len(ids)} slide(s) missing data-slide-id')
    bad = [x for x in present if not ID_RE.match(x)]
    if bad: E.append(f'non-letter data-slide-id: {bad[:8]}')
    dup = [k for k, v in collections.Counter(present).items() if v > 1]
    if dup: E.append(f'duplicate data-slide-id: {dup}')
    if present and 'slideIdLabel' not in t: E.append('slide-ID label CSS/JS (#slideIdLabel) missing')
    led = os.path.join(os.path.dirname(path), 'ids.json')
    if present:
        if not os.path.exists(led): E.append('ids.json ledger missing')
        else:
            L = json.load(open(led)).get(os.path.basename(path), None)
            if L is None: E.append('deck not listed in ids.json')
            else:
                reused = set(present) & set(L.get('retired', []))
                unknown = set(present) - set(L.get('assigned', []))
                if reused: E.append(f'retired IDs reused: {sorted(reused)}')
                if unknown: E.append(f'IDs not recorded in ids.json assigned: {sorted(unknown)}')
    # --- images
    refs = re.findall(r'(?:src|data-src|data-background-image|data-background)\s*=\s*"([^"]+)"', t) + re.findall(r'url\(\s*[\'"]?([^)\'"]+)', t)
    imgs = [r for r in refs if re.search(r'\.(png|jpe?g|gif|webp|svg|avif|bmp|tiff?)(\?|#|$)', r, re.I) or r.startswith('data:image')]
    b64 = sum(1 for r in imgs if r.startswith('data:image')) + len(re.findall(r'data:image/', t)) * 0
    b64 = len(re.findall(r'data:image/', t))
    hot = [r for r in imgs if r.startswith(('http://', 'https://', '//'))]
    local = [r for r in imgs if not r.startswith(('http', '//', 'data:'))]
    nonwebp = [r for r in local if not re.search(r'\.webp(\?|#|$)', r, re.I)]
    gone = [r for r in local if not os.path.exists(os.path.normpath(os.path.join(os.path.dirname(path), html.unescape(r.split('?')[0].split('#')[0]))))]
    if b64: E.append(f'{b64} base64-embedded image(s)')
    if hot: E.append(f'{len(hot)} hotlinked image(s): {hot[:3]}')
    if nonwebp: E.append(f'{len(nonwebp)} non-WebP local image(s)')
    if gone: E.append(f'{len(gone)} missing local image file(s): {gone[:3]}')
    vids = re.findall(r'<iframe[^>]+src="(https?://[^"]+)"', t)
    if vids: W.append(f'{len(vids)} embedded video(s): confirm notes give a text summary')
    # --- structure
    if not re.search(r"slideNumber\s*:\s*['\"]c/t['\"]", t): E.append("slideNumber:'c/t' not set")
    if not re.search(r'pierian', t, re.I): E.append('no Pierian Spring section')
    first = secs[0][0] + secs[0][1] if secs else ''
    if not re.search(r'title-hero|title-slide', first): E.append('first slide is not a title slide (class title-hero/title-slide)')
    if not re.search(r'Crimson\+Pro', t) or not re.search(r'Lora', t): E.append('house fonts (Crimson Pro + Lora) not loaded')
    if not re.search(r'reveal\.js/4\.5\.0', t): W.append('Reveal not pinned to cdnjs 4.5.0')
    if not re.search(r'_revised_FA26\.html$', path): W.append('filename does not end _revised_FA26.html (expected for legacy decks)')
    # --- Your Turn ordering: a Your Turn slide for RQ n must follow >=1 teaching slide for n
    # teaching slide = data-rq containing n, or a kicker like "Qn story" / "Qn ·"
    taught = set(); yt = []
    for i, (a, s) in enumerate(secs, 1):
        v = txt(re.sub(r'<aside.*?</aside>', '', s, flags=re.S))
        is_yt = bool(re.match(r'\W*your turn', v, re.I))
        rqs = set(re.findall(r'Review Question (\d+)', v)) if is_yt else set()
        if is_yt:
            for n in rqs:
                yt.append(n)
                if n not in taught: E.append(f'Your Turn RQ{n} (slide {attr(a,"data-slide-id") or i}) appears before RQ{n} is taught')
        else:
            dr = attr(a, 'data-rq')
            if dr: taught |= set(re.findall(r'\d+', dr))
            taught |= set(re.findall(r'\bQ(\d+)\s+(?:story|·)', v))
    if not yt: E.append('no "Your Turn" reading-guide activity slides')
    return dict(deck=path, slides=len(secs), errors=E, warnings=W, your_turn=sorted(set(yt), key=int))
def main():
    ap = argparse.ArgumentParser(); ap.add_argument('decks', nargs='*')
    ap.add_argument('--root', default='public/the_lyceum/chinese-history/reveal_decks'); ap.add_argument('--report')
    a = ap.parse_args()
    decks = a.decks or sorted(f for ch in SCOPE for f in glob.glob(f'{a.root}/chapter-{ch}/*.html') if '_pre-' not in f)
    res = [lint(d) for d in decks]
    out = ['# HIST 270 lint report', '', f'{len(res)} decks · {sum(not r["errors"] for r in res)} clean · {sum(len(r["errors"]) for r in res)} errors · {sum(len(r["warnings"]) for r in res)} warnings', '']
    for r in res:
        out.append(f'## {os.path.relpath(r["deck"], a.root) if r["deck"].startswith(a.root) else r["deck"]} ({r["slides"]} slides) {"✅" if not r["errors"] else "❌"}')
        out += [f'- ERROR: {e}' for e in r['errors']] + [f'- warn: {w}' for w in r['warnings']] + ['']
    rep = '\n'.join(out); print(rep)
    if a.report: open(a.report, 'w').write(rep)
    sys.exit(1 if any(r['errors'] for r in res) else 0)
if __name__ == '__main__': main()
