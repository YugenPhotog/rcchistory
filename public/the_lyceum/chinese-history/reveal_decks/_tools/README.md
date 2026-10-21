# HIST 270 deck tools
- `HOUSE_STANDARD.md`: the online study-buddy standard every new `_revised_FA26` deck must meet.
- `lint_hist270.py`: run from the repo root: `python3 public/the_lyceum/chinese-history/reveal_decks/_tools/lint_hist270.py [deck.html …] [--report out.md]`. With no decks listed, it checks every in-scope deck.
- `webp_convert.py`: `python3 …/_tools/webp_convert.py chapter-NN/<deck>.html [--out-dir DIR]`. It writes `<name>_revised_FA26.html` and `images/chNN-lecN/*.webp`, and never overwrites anything. It needs `cwebp` (`apt-get install webp`).
