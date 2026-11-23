# Stallion Outlook — website concept

A premium, responsive **seven-page** website concept for **Stallion Outlook**, a bespoke fashion house in Accra, Ghana. Built as a presentation piece to show the client before commissioning the full site.

## Open it

Double-click `index.html`, or serve the folder locally:

```bash
npx serve .
```

No build step and no dependencies are needed to view or host the site. Every page is a plain static `.html` file sharing `styles.css` and `script.js`.

## The pages

| File | Page | What is on it |
| --- | --- | --- |
| `index.html` | Home | Full-bleed hero, house introduction, collection preview, process teaser, feed preview and contact strip |
| `about.html` | The House | Brand story, three promises, image band, values and a community feed |
| `collections.html` | Collections | Six detailed categories — kaftans, suits, shirts, shorts, trousers and occasion wear — each with imagery, description and feature list |
| `craft.html` | Our Craft | Six-step tailoring process, fabric & finish gallery, and a six-question FAQ |
| `gallery.html` | Gallery | All 23 social photos in a filterable grid with lightbox and source links |
| `appointment.html` | Book an Appointment | Full enquiry form, next steps, preparation checklist and FAQ |
| `contact.html` | Contact | WhatsApp, phone, email, Instagram, Facebook, location card, opening pattern and social feed |

Every top-nav item links to its own page, with the current page highlighted. The header, footer, floating WhatsApp button and lightbox are consistent across all seven.

## Photography

All 23 images are real photographs taken from Stallion Outlook's public Instagram (`@stallionoutlook`) and Facebook page. They are saved locally in `assets/images/` so the site does not depend on expiring social CDN links.

- `post-*` — full-resolution feed photos (up to 1440×1440)
- `reel-*` — 360×640 reel stills
- `cat-*` — 150×150 highlight covers (kaftans, shirts, shorts, suits, pants)

The fetch scripts are kept for reference:

- `download-social-images.ps1` — Facebook feed images
- `download-more-social.ps1` — Instagram reel stills and highlight covers

**Get the client's written permission before publishing.** Social posts remain their intellectual property.

## Before launch — confirm these

1. **Image-to-category match.** Photos were assigned to collections from the posts available publicly. Confirm with the client that each one sits under the right category, and swap filenames in `build-pages.js` if not.
2. **Business copy.** The brand story and process steps are written as a concept. Confirm the opening hours and exact address with the client. Their Instagram describes them as *"Premium Kaftan Tailors"* — this positioning is reflected in the copy.
3. **Social links.** The Facebook link now points to `https://www.facebook.com/stallionoutlook/`. Confirm this is the correct page.
4. **Brand site.** `stallionoutlook.com` is currently a parked domain, so it is not linked from the concept.
5. **Top nav count.** Seven items is deliberate but tight on smaller laptops; if the client wants fewer, merge The House into Home and Our Craft into Collections.

## Maintenance

`build-pages.js` is a small Node script that holds the shared header/footer and each page's content, then writes all seven HTML files. It keeps the navigation and branding consistent.

```bash
node build-pages.js
```

You do **not** need to run this to use the site — edit the generated `.html` files directly if you prefer. If you change the shared header, footer or nav, edit the generator and re-run it.

## Business details used

| Detail | Value |
| --- | --- |
| Phone / WhatsApp | +233 24 827 1255 |
| Email | stallionoutlook@gmail.com |
| Instagram | @stallionoutlook |
| Facebook | Stallion Outlook |
| Location | Accra, Ghana |

The WhatsApp number lives in `WHATSAPP_NUMBER` at the top of `script.js`, plus the static `wa.me` links generated into every page.

## Git and GitHub

The project is connected to `https://github.com/Aggrey444/stallion-outlook`.

```bash
git status          # check what changed
git add -A          # stage all changes
git commit -m "..." # committing automatically pushes to origin/main
```

The `origin` remote and upstream tracking (`main` → `origin/main`) are configured. A `.git/hooks/post-commit` hook pushes every new commit to GitHub automatically. If the push fails while offline or signed out, run `git push` manually once sign-in is restored.

## Notes

- This is a static front-end concept. The enquiry form does not store data; it opens WhatsApp with the details prefilled. A real booking system can be added later.
- The gallery filters work with the lightbox — arrow keys and next/previous only move through the visible category.
- Image panels have gradient fallbacks, so layouts still look intentional if a photo fails to load.
- Designed to respect `prefers-reduced-motion`.
- Footer still says "Concept design for presentation purposes" — remove for launch.
