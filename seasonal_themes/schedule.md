# Seasonal homepage schedule

These pages are ready to copy over `public/index.html` on the dates below. They live in this folder so they are not served while they wait. The site publish directory is `public/` (austin-academics.com). A folder at the repo root is not part of the live site.

Images already live under `public/images/<theme_slug>/`, with paths written as if the page were `public/index.html`.

Do not commit or push until Steven has reviewed the files.

The live Thanksgiving homepage (`public/index.html`) now uses the same slim lower title banner as the later seasonal pages, so the harvest artwork stays visible.

## Schedule

| Dates | Theme | File to copy over `public/index.html` |
| --- | --- | --- |
| November 15 to November 29 | Thanksgiving (live) | `public/index.html` (already in place) |
| November 30 to December 12 | Frost on the Stacks | `seasonal_themes/index_frost_on_the_stacks.html` |
| December 13 to December 19 | A Silent Night, 1914 | `seasonal_themes/index_silent_night_1914.html` |
| December 20 to December 24 | Follow the Star | `seasonal_themes/index_follow_the_star.html` |
| December 25 to December 29 | The Manger at Greccio | `seasonal_themes/index_manger_at_greccio.html` |
| December 30 to January 15 | Plum Blossom New Year | `seasonal_themes/index_plum_blossom.html` |
| January 16 | Standard homepage | `public/index_standard.html` |

The Manger at Greccio page is a full-viewport nativity painting with a brief identification card and a button that goes to `index_standard.html` (the regular course homepage). It does not include the usual course catalog.

## How to switch

1. Copy the scheduled file over `public/index.html`. Leave `public/index_standard.html` untouched.
2. On January 16, copy `public/index_standard.html` over `public/index.html`.
3. Review in a browser, then commit and push so Netlify can redeploy.

Plum Blossom New Year is framed as a winter and New Year theme that looks ahead to Lunar New Year on February 6, 2027 (Year of the Fire Goat).
