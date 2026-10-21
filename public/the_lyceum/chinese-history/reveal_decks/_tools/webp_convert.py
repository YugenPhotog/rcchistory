#!/usr/bin/env python3
"""Convert every image a HIST 270 Reveal deck uses into local WebP files.

Usage: webp_convert.py DECK.html [--out-dir DIR] [--slug SLUG (default chNN-lecN)] [--quality 80] [--dry-run-report FILE]

- Images can be base64 data URIs, hotlinked http(s) URLs, or local files.
- Every image is written as WebP to  <out-dir>/images/<slug>/  (cwebp -q 80). Animated GIFs use gif2webp. SVGs are copied as they are.
- Writes a NEW deck  <out-dir>/<name>_revised_FA26.html  with the paths rewritten.
- Never overwrites anything: it refuses if the new deck or any target image already exists.
  The original deck is only read, never changed.
--out-dir defaults to the deck's own folder (chapter-NN/). Use /tmp/... for a dry run.
"""
import re, os, sys, base64, hashlib, shutil, subprocess, tempfile, argparse, urllib.request, html as H
SUFFIX = re.compile(r'_(revFA26C?|revSU26|revised_FA26A?|FA26|revised_FA26)$')
REF = re.compile(r'''((?:src|data-src|data-background-image|data-background|poster)\s*=\s*")([^"]+)(")|(url\(\s*['"]?)([^)'"]+)(['"]?\s*\))''')
IMG = re.compile(r'\.(png|jpe?g|gif|webp|svg|bmp|tiff?|avif)(\?|#|$)', re.I)
def need(tool):
    if not shutil.which(tool): sys.exit(f'{tool} not found: install with  sudo apt-get install -y webp')
def fetch(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (HIST270 webp_convert; educational use)'})
    with urllib.request.urlopen(req, timeout=60) as r: return r.read()
def main():
    ap = argparse.ArgumentParser(); ap.add_argument('deck'); ap.add_argument('--out-dir'); ap.add_argument('--slug')
    ap.add_argument('--quality', type=int, default=80); ap.add_argument('--dry-run-report')
    a = ap.parse_args(); need('cwebp')
    src = os.path.abspath(a.deck); srcdir = os.path.dirname(src)
    stem = os.path.splitext(os.path.basename(src))[0]; base = SUFFIX.sub('', stem)
    out = os.path.abspath(a.out_dir or srcdir); m = re.search(r'ch(\d+)_(lec\d+|mini)', base, re.I)
    slug = a.slug or (f'ch{m.group(1)}-{m.group(2).lower()}' if m else base)
    newdeck = os.path.join(out, base + '_revised_FA26.html')
    if os.path.abspath(newdeck) == src: sys.exit('refusing: the new deck name equals the source deck')
    if os.path.exists(newdeck): sys.exit(f'refusing to overwrite existing {newdeck}')
    imgdir = os.path.join(out, 'images', slug); rel = f'images/{slug}'
    t = open(src, encoding='utf-8').read()
    done, rows, tmp = {}, [], tempfile.mkdtemp()
    planned = set(); n = [0]
    def convert(ref):
        if ref in done: return done[ref]
        r = H.unescape(ref)
        try:
            if r.startswith('data:image'):
                kind, data = 'base64', base64.b64decode(r.split(',', 1)[1])
                ext = re.match(r'data:image/([a-z+]+)', r).group(1).replace('jpeg', 'jpg').replace('svg+xml', 'svg')
                name = f'embedded_{hashlib.sha1(data).hexdigest()[:8]}'
            elif r.startswith(('http://', 'https://', '//')):
                kind, data = 'hotlink', fetch('https:' + r if r.startswith('//') else r)
                name = os.path.splitext(os.path.basename(r.split('?')[0]))[0] or 'remote'
                ext = (IMG.search(r.split('?')[0]) or IMG.search(r)).group(1).lower() if IMG.search(r) else 'jpg'
            else:
                p = os.path.normpath(os.path.join(srcdir, r.split('?')[0].split('#')[0]))
                if not os.path.exists(p): rows.append(('MISSING', r, 0, 0, '')); done[ref] = ref; return ref
                kind, data = 'local', open(p, 'rb').read()
                name, ext = os.path.splitext(os.path.basename(p)); ext = ext[1:].lower()
        except Exception as e:
            rows.append(('FAILED', r[:80], 0, 0, str(e)[:60])); done[ref] = ref; return ref
        n[0] += 1
        name = re.sub(r'[^A-Za-z0-9_-]+', '_', name)[:60].strip('_') or f'img{n[0]}'
        oext = 'svg' if ext == 'svg' else 'webp'
        fn = f'{name}.{oext}'
        while fn in planned: fn = f'{name}_{n[0]}.{oext}'
        planned.add(fn); dest = os.path.join(imgdir, fn)
        if os.path.exists(dest): sys.exit(f'refusing to overwrite existing image {dest}')
        os.makedirs(imgdir, exist_ok=True)
        inp = os.path.join(tmp, f'in{n[0]}.{ext}'); open(inp, 'wb').write(data)
        if oext == 'svg': shutil.copy(inp, dest)
        elif ext == 'webp': shutil.copy(inp, dest)
        elif ext == 'gif' and shutil.which('gif2webp'): subprocess.run(['gif2webp', '-q', str(a.quality), '-quiet', inp, '-o', dest], check=True)
        else: subprocess.run(['cwebp', '-q', str(a.quality), '-quiet', '-metadata', 'icc', inp, '-o', dest], check=True)
        rows.append((kind, r[:70] if kind != 'base64' else f'data:image/{ext} ({len(r)//1024} KB in HTML)', len(data), os.path.getsize(dest), f'{rel}/{fn}'))
        done[ref] = f'{rel}/{fn}'; return done[ref]
    def sub(m):
        if m.group(2) is not None:
            v = m.group(2)
            if not (v.startswith('data:image') or IMG.search(v)): return m.group(0)
            return m.group(1) + convert(v) + m.group(3)
        v = m.group(5)
        if not (v.startswith('data:image') or IMG.search(v)): return m.group(0)
        return m.group(4) + convert(v) + m.group(6)
    new = REF.sub(sub, t)
    os.makedirs(out, exist_ok=True); open(newdeck, 'w', encoding='utf-8').write(new)
    shutil.rmtree(tmp, ignore_errors=True)
    tin = sum(r[2] for r in rows); tout = sum(r[3] for r in rows)
    lines = [f'# webp_convert: {os.path.basename(src)}', f'new deck: {newdeck}', f'images: {imgdir}', '',
             f'HTML size: {len(t.encode())/1024:.0f} KB → {len(new.encode())/1024:.0f} KB',
             f'image bytes: {tin/1024:.0f} KB → {tout/1024:.0f} KB ({(1-tout/tin)*100 if tin else 0:.0f}% smaller), {len([r for r in rows if r[0] in ("base64","hotlink","local")])} images', '',
             '| kind | source | in KB | out KB | new path |', '|---|---|---|---|---|']
    lines += [f'| {k} | {s} | {i/1024:.0f} | {o/1024:.0f} | {p} |' for k, s, i, o, p in rows]
    rep = '\n'.join(lines); print(rep)
    if a.dry_run_report: open(a.dry_run_report, 'w').write(rep)
if __name__ == '__main__': main()
