import urllib.request, base64

images = {
    # Slide 9 — Thurgood Marshall
    "marshall": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Thurgood_marshall.jpg/600px-Thurgood_marshall.jpg",
    # Slide 16 — Little Rock
    "little_rock": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Little_Rock_desegregation_1957.jpg/800px-Little_Rock_desegregation_1957.jpg",
    # Slide 20 — Rosa Parks
    "rosa_parks": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Rosa_Parks_Booking_Photo_1955.jpg/600px-Rosa_Parks_Booking_Photo_1955.jpg",
    # Slide 21 — MLK NYWTS (boycott slide)
    "mlk_nywts": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Martin_Luther_King_Jr_NYWTS.jpg/600px-Martin_Luther_King_Jr_NYWTS.jpg",
    # Slide 27 — MLK March on Washington
    "mlk_march": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Martin_Luther_King%2C_Jr..jpg/800px-Martin_Luther_King%2C_Jr..jpg",
}

with open("Ch28_Lec3_CivilRights_Deck.html", "r", encoding="utf-8") as f:
    html = f.read()

headers = {"User-Agent": "Mozilla/5.0", "Referer": "https://en.wikipedia.org/"}

for key, url in images.items():
    try:
        req = urllib.request.Request(url, headers=headers)
        data = urllib.request.urlopen(req).read()
        b64 = base64.b64encode(data).decode()
        data_uri = f"data:image/jpeg;base64,{b64}"
        html = html.replace(url, data_uri)
        print(f"Embedded: {key}")
    except Exception as e:
        print(f"FAILED: {key} — {e}")

with open("Ch28_Lec3_CivilRights_Deck.html", "w", encoding="utf-8") as f:
    f.write(html)
print("Done — file updated.")
input("Press Enter to close...")
