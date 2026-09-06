# Media slots

Every image and video slot on the site is optional. When a slot is empty it
renders as a composed cinematic still instead of a broken image, so the layout
never falls apart while assets are still being shot.

To fill a slot, drop the file into this folder (or `public/video/`) and point
the matching field in `src/content/site.ts` at it.

| Slot | Field in `src/content/site.ts` | Suggested asset |
| --- | --- | --- |
| Hero still | `hero.media.image` | `/images/hero.jpg` — 2400×1600, landscape, subject off-centre left or right so the headline has room |
| Hero loop | `hero.media.video` | `/video/hero.mp4` — muted, 6–12s, H.264, under ~4 MB. Add a matching poster in `hero.media.image` |
| About portrait | `about.portrait.src` | `/images/portrait.jpg` — 1600×2000, 4:5 portrait |
| Content posters | `contentPieces[].poster` | `/images/content/<slug>.jpg` — 1920×1080, 16:9 |

## Video cards

Adding a `videoId` to an entry in `contentPieces` makes that card playable in
place. Nothing from YouTube loads until the visitor clicks — the card shows the
thumbnail first and only then mounts the privacy-enhanced player.

Without a `videoId` the card links out to the channel instead.

## Art direction notes

- Shoot dark. The whole site sits on near-black, so images with deep shadows
  and a single light source sit inside the layout instead of fighting it.
- Avoid charts, currency symbols and stock imagery — the visual language here is
  documentary portraiture and location work, not trading clichés.
- Images are graded slightly (contrast up, saturation down) in CSS, so hand off
  files that are neutral rather than pre-stylised.
