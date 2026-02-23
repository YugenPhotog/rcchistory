#!/usr/bin/env python3
"""
Download images for HIST270 Sui Reunification lecture deck.
Run this script once to cache all images locally in the images/ folder.
After running, images will load offline without needing Wikimedia.

Usage:
    python download_sui_images.py
"""

import os
import hashlib
import urllib.request
import urllib.error
import time

IMAGES_DIR = os.path.join(os.path.dirname(__file__), "images")
os.makedirs(IMAGES_DIR, exist_ok=True)

# Direct URL downloads (SVG thumbs, verified URLs)
DIRECT_URLS = [
    (
        "Grand_Canal_Sui_Tang.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/"
        "China-Grand_canal%2C_Sui_and_Tang.svg/700px-China-Grand_canal%2C_Sui_and_Tang.svg.png"
    ),
    (
        "EmperorWenofSui.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/3/35/Emperor_Wen_of_sui.jpeg"
    ),
    (
        "Dunhuang_mural_Sui.jpg",
        # Mogao Cave 285, Western Wei/Sui period — well-documented Sui-era Dunhuang mural
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/"
        "Dunhuang-Mogao_Cave_285_mural.jpg/700px-Dunhuang-Mogao_Cave_285_mural.jpg"
    ),
]

# Wikimedia Commons filenames (MD5-hashed path method)
WIKI_FILES = [
    ("Sui_Yangdi_Tang.jpg",             "Sui_Yangdi_Tang.jpg"),
    ("Sui_conquest_of_Chen.png",        "Sui_conquest_of_Chen.png"),
    ("Map_of_the_Sui_Dynasty.png",      "Map_of_the_Sui_Dynasty.png"),
    ("612_Sui-Goguryeo_war.png",        "612_Sui-Goguryeo_war.png"),
    ("598_Goguryeo-Sui_war.png",        "598_Goguryeo-Sui_war.png"),
    ("Goguryeo_map.png",                "Goguryeo_map.png"),
    ("Sui_Dynasty_Uprisings.png",       "Sui_Dynasty_Uprisings.png"),
    ("Emperor_Taizong_in_Dunhuang.jpg", "Emperor_Taizong_in_Dunhuang.jpg"),
]


def wikimedia_url(filename):
    md5 = hashlib.md5(filename.encode()).hexdigest()
    return (
        f"https://upload.wikimedia.org/wikipedia/commons/"
        f"{md5[0]}/{md5[:2]}/{filename}"
    )


def download(url, dest_path, label):
    if os.path.exists(dest_path):
        print(f"  ✓ already exists: {label}")
        return True
    try:
        req = urllib.request.Request(
            url,
            headers={"User-Agent": "Mozilla/5.0 (academic research; HIST 270 lecture)"}
        )
        with urllib.request.urlopen(req, timeout=30) as resp, \
             open(dest_path, "wb") as f:
            f.write(resp.read())
        size_kb = os.path.getsize(dest_path) // 1024
        print(f"  ✓ downloaded {label} ({size_kb} KB)")
        return True
    except urllib.error.HTTPError as e:
        print(f"  ✗ HTTP {e.code}: {label}")
    except Exception as e:
        print(f"  ✗ failed: {label} — {e}")
    return False


print("Downloading HIST 270 Sui lecture images to:", IMAGES_DIR)
print()

# Direct URL downloads
for local, url in DIRECT_URLS:
    download(url, os.path.join(IMAGES_DIR, local), local)
    time.sleep(3)

# Wikimedia hash-path downloads
for local, wiki in WIKI_FILES:
    url = wikimedia_url(wiki)
    download(url, os.path.join(IMAGES_DIR, local), local)
    time.sleep(3)

print()
print("Done. Open the deck in a browser — images will now load from the local images/ folder.")
