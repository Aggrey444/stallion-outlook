/* =========================================================
   Stallion Outlook — page generator
   Run: node build-pages.js
   Produces the seven static HTML pages from one shared shell.
   The generated .html files are plain static pages; this script
   is only a maintenance aid and is not needed to view the site.
   ========================================================= */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;

const NAV = [
  ['index.html', 'Home', 'home'],
  ['about.html', 'The House', 'about'],
  ['collections.html', 'Collections', 'collections'],
  ['craft.html', 'Our Craft', 'craft'],
  ['gallery.html', 'Gallery', 'gallery'],
  ['appointment.html', 'Appointment', 'appointment'],
  ['contact.html', 'Contact', 'contact']
];

const IG = 'https://www.instagram.com/stallionoutlook/';
const FB = 'https://www.facebook.com/stallionoutlook/';
const WA = 'https://wa.me/233248271255?text=Hello%20Stallion%20Outlook%2C%20I%27d%20like%20to%20make%20an%20enquiry.';

function navHtml(active) {
  return NAV.map(function (item) {
    const current = item[2] === active;
    return '      <a href="' + item[0] + '"' + (current ? ' class="is-active" aria-current="page"' : '') + '>' + item[1] + '</a>';
  }).join('\n');
}

function shell(o) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#12100e">
  <meta name="description" content="${o.description}">
  <title>${o.title} — Stallion Outlook, Accra</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <!-- ============ HEADER ============ -->
  <header class="site-header" id="top">
    <a class="brand" href="index.html" aria-label="Stallion Outlook — home">
      <span class="brand-mark">SO</span>
      <span class="brand-text"><strong>Stallion</strong><span>Outlook</span></span>
    </a>

    <nav class="nav" id="primary-nav" aria-label="Primary navigation">
${navHtml(o.page)}
    </nav>

    <div class="header-actions">
      <a class="btn btn-gold btn-sm" href="appointment.html">Book a fitting</a>
      <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="primary-nav">
        <span></span><span></span>
      </button>
    </div>
  </header>
  <div class="nav-scrim" id="nav-scrim" aria-hidden="true"></div>

  <main id="main">
${o.body}
  </main>

  <!-- ============ FOOTER ============ -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a class="brand" href="index.html" aria-label="Back to home">
            <span class="brand-mark">SO</span>
            <span class="brand-text"><strong>Stallion</strong><span>Outlook</span></span>
          </a>
          <p>A bespoke fashion house in Accra, Ghana. Premium kaftans, sharp suits and occasion wear — cut to measure, made with intention, worn with confidence.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <div class="footer-links">
            <a href="about.html">The House</a><a href="collections.html">Collections</a><a href="craft.html">Our Craft</a><a href="gallery.html">Gallery</a><a href="appointment.html">Book a fitting</a><a href="contact.html">Contact</a>
          </div>
        </div>
        <div>
          <h4>Connect</h4>
          <div class="footer-links">
            <a href="${WA}" target="_blank" rel="noopener">WhatsApp</a>
            <a href="${IG}" target="_blank" rel="noopener">Instagram</a>
            <a href="${FB}" target="_blank" rel="noopener">Facebook</a>
            <a href="mailto:stallionoutlook@gmail.com">Email</a>
            <a href="tel:+233248271255">Call</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© <span id="year">2026</span> Stallion Outlook. All rights reserved.</span>
        <span>Concept design for presentation purposes</span>
      </div>
    </div>
  </footer>

  <!-- ============ FLOATING WHATSAPP ============ -->
  <a class="wa-float" href="${WA}" target="_blank" rel="noopener" aria-label="Enquire on WhatsApp">
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"></path></svg>
    <span>Enquire on WhatsApp</span>
  </a>

  <!-- ============ LIGHTBOX ============ -->
  <div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" aria-hidden="true">
    <button class="lb-close" type="button" aria-label="Close image viewer">×</button>
    <button class="lb-prev" type="button" aria-label="Previous image">‹</button>
    <img id="lb-image" src="" alt="">
    <button class="lb-next" type="button" aria-label="Next image">›</button>
    <p class="lb-caption" id="lb-caption"></p>
    <a class="lb-source" id="lb-source" href="${IG}" target="_blank" rel="noopener">View on Instagram ↗</a>
  </div>

  <script src="script.js"></script>
</body>
</html>
`;
}

/* ---------- Reusable blocks ---------- */
function pageHero(eyebrow, title, italic, lede, image, label) {
  var file = image.indexOf('.') === -1 ? image + '.jpg' : image;
  return `    <section class="page-hero" style="--photo: url('assets/images/${file}')">
      <div class="page-hero-inner container">
        <p class="eyebrow eyebrow-light">${eyebrow}</p>
        <h1>${title} <em>${italic}</em></h1>
        <p class="page-lede">${lede}</p>
        <p class="page-hero-tag">${label}</p>
      </div>
    </section>`;
}

function ctaBand(eyebrow, title, italic, text, button, href) {
  return `    <section class="cta-band">
      <div class="container cta-inner">
        <div>
          <p class="eyebrow eyebrow-light">${eyebrow}</p>
          <h2 class="display">${title} <em>${italic}</em></h2>
          <p>${text}</p>
        </div>
        <a class="btn btn-gold" href="${href}">${button} <span aria-hidden="true">↗</span></a>
      </div>
    </section>`;
}

function qa(items) {
  return '<div class="accordion">' + items.map(function (x) {
    return '      <details class="acc-item"><summary>' + x[0] + '<span aria-hidden="true">+</span></summary><p>' + x[1] + '</p></details>';
  }).join('\n') + '</div>';
}

/* =========================================================
   HOME
   ========================================================= */
const home = `    <!-- HERO -->
    <section class="hero" id="home">
      <div class="hero-media" style="--photo: url('assets/images/post-2025-easter.jpg')" aria-hidden="true"></div>
      <div class="hero-content container">
        <p class="eyebrow eyebrow-light">Accra, Ghana &nbsp;·&nbsp; Premium Kaftan Tailors</p>
        <h1>Dressed to<br><em>command</em><br>the room.</h1>
        <p class="hero-lede">Kaftans, suits and occasion wear cut with intention. Made for the person who would rather be remembered than merely seen.</p>
        <div class="hero-actions">
          <a class="btn btn-gold" href="collections.html">Explore collections <span aria-hidden="true">↗</span></a>
          <a class="btn btn-outline-light" href="appointment.html">Book a fitting</a>
        </div>
      </div>
      <div class="hero-foot container">
        <span class="scroll-cue"><span class="line" aria-hidden="true"></span> Scroll to discover</span>
        <span>Est. in Accra &nbsp;—&nbsp; Made for you</span>
      </div>
    </section>

    <div class="ticker" aria-hidden="true">
      <div class="ticker-track">
        <span>Premium Kaftans</span><span>Bespoke Suits</span><span>Shirts</span><span>Shorts &amp; Pants</span><span>Wedding Attire</span><span>Custom Fitting</span>
        <span>Premium Kaftans</span><span>Bespoke Suits</span><span>Shirts</span><span>Shorts &amp; Pants</span><span>Wedding Attire</span><span>Custom Fitting</span>
      </div>
    </div>

    <!-- INTRO -->
    <section class="section home-intro">
      <div class="container home-intro-grid">
        <div class="mosaic reveal">
          <div class="mosaic-main photo"><img src="assets/images/post-2025-april.jpg" alt="A Stallion Outlook outfit shared on Instagram" loading="lazy"></div>
          <div class="mosaic-side photo"><img src="assets/images/reel-2025-apr.jpg" alt="Stallion Outlook reel still" loading="lazy"></div>
          <div class="mosaic-badge"><strong>13.2K</strong><span>following the journey<br>on Instagram</span></div>
        </div>
        <div class="home-intro-copy reveal delay-1">
          <p class="eyebrow">Welcome to the House</p>
          <h2 class="display">Style that speaks<br><em>before you do.</em></h2>
          <p class="lede">Stallion Outlook is an Accra-based fashion house known for premium kaftans, well-cut suits and occasion wear that feels as good as it looks.</p>
          <p>Everything begins with a conversation about you — your shape, your taste, the occasion and the impression you want to leave. From there, cloth is chosen, patterns are cut and every detail is finished by hand.</p>
          <div class="mini-stats">
            <div><strong>01</strong><span>One client<br>at a time</span></div>
            <div><strong>05</strong><span>Core categories,<br>endless variations</span></div>
            <div><strong>100%</strong><span>Made to<br>measure</span></div>
          </div>
          <a class="text-link" href="about.html">Meet the house <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>

    <!-- COLLECTION PREVIEW -->
    <section class="section collections">
      <div class="container">
        <div class="section-head center reveal">
          <p class="eyebrow eyebrow-center">What We Make</p>
          <h2 class="display">Made to measure.<br><em>Made to matter.</em></h2>
          <p>Kaftans, suits, shirts, shorts, pants and the special pieces in between. Every design is a starting point — the final call is always yours.</p>
        </div>
        <div class="collection-grid">
          <article class="collection-card reveal">
            <div class="photo"><img src="assets/images/post-2024-b.jpg" alt="Stallion Outlook traditional wear" loading="lazy"></div>
            <span class="card-no">01</span><h3>Luxury Kaftans</h3>
            <p>Flowing, richly finished kaftans for celebrations, Sundays and everyday grace.</p>
            <a class="card-link" href="collections.html">See the collection <span aria-hidden="true">↗</span></a>
          </article>
          <article class="collection-card reveal delay-1">
            <div class="photo"><img src="assets/images/post-2024-a.jpg" alt="Stallion Outlook tailoring" loading="lazy"></div>
            <span class="card-no">02</span><h3>Signature Suits</h3>
            <p>Sharp two and three-piece suits cut for presence — and for Ghana's climate.</p>
            <a class="card-link" href="collections.html">See the collection <span aria-hidden="true">↗</span></a>
          </article>
          <article class="collection-card reveal delay-2">
            <div class="photo"><img src="assets/images/post-2024-d.jpg" alt="Stallion Outlook occasion wear" loading="lazy"></div>
            <span class="card-no">03</span><h3>Occasion Wear</h3>
            <p>Weddings, milestones and grand entrances — for the couple and the whole party.</p>
            <a class="card-link" href="collections.html">See the collection <span aria-hidden="true">↗</span></a>
          </article>
        </div>
        <div class="center-action reveal"><a class="btn btn-outline-dark" href="collections.html">View all six collections <span aria-hidden="true">↗</span></a></div>
      </div>
    </section>

    <!-- CRAFT TEASER -->
    <section class="section process">
      <div class="container process-grid">
        <div class="process-intro reveal">
          <p class="eyebrow">Our Craft</p>
          <h2 class="display">Four steps<br>to a <em>perfect fit.</em></h2>
          <p class="lede">No guesswork. No off-the-rack compromises. Here is how a Stallion Outlook piece comes to life.</p>
          <a class="btn btn-gold" href="craft.html">See the full process <span aria-hidden="true">↗</span></a>
        </div>
        <div class="steps">
          <div class="step reveal"><span class="step-no">01</span><div><h3>Consultation</h3><p>We talk about the occasion, your style and what you want the outfit to say — in person or over WhatsApp.</p></div></div>
          <div class="step reveal"><span class="step-no">02</span><div><h3>Fabric &amp; Design</h3><p>Choose from the fabric library, then shape the details: embroidery, lining, buttons and finish.</p></div></div>
          <div class="step reveal"><span class="step-no">03</span><div><h3>Measure &amp; Fitting</h3><p>Precise measurements, then a fitting so adjustments are made before the final piece is finished.</p></div></div>
          <div class="step reveal"><span class="step-no">04</span><div><h3>Delivery</h3><p>Pressed, packed and handed over — with care instructions and help with future alterations.</p></div></div>
        </div>
      </div>
    </section>

    <!-- GALLERY PREVIEW -->
    <section class="section gallery">
      <div class="container">
        <div class="section-head reveal">
          <p class="eyebrow">From the Feed</p>
          <h2 class="display">A closer <em>look.</em></h2>
          <p>Real work from Stallion Outlook's own feeds — the cuts, colours and details the house is known for.</p>
        </div>
        <div class="preview-grid">
          <figure class="gallery-item reveal" data-caption="From the feed · April 2025" data-source="https://www.instagram.com/p/DIqemhDIdup/"><div class="photo"><img src="assets/images/post-2025-easter.jpg" alt="Stallion Outlook post from April 2025" loading="lazy"></div><figcaption class="gallery-caption">From the feed · April 2025</figcaption></figure>
          <figure class="gallery-item reveal" data-caption="Stallion Outlook style" data-source="${IG}"><div class="photo"><img src="assets/images/post-style-a.jpg" alt="Stallion Outlook design shared on social media" loading="lazy"></div><figcaption class="gallery-caption">Stallion Outlook style</figcaption></figure>
          <figure class="gallery-item reveal delay-1" data-caption="From the feed · February 2024" data-source="https://www.instagram.com/p/C3GsmH2oDth/"><div class="photo"><img src="assets/images/post-2024-b.jpg" alt="Stallion Outlook post from February 2024" loading="lazy"></div><figcaption class="gallery-caption">From the feed · February 2024</figcaption></figure>
          <figure class="gallery-item reveal delay-1" data-caption="Dressing maketh a man" data-source="https://www.instagram.com/p/DIojA_dI6fW/"><div class="photo"><img src="assets/images/post-2025-april.jpg" alt="Stallion Outlook post from April 2025" loading="lazy"></div><figcaption class="gallery-caption">Dressing maketh a man</figcaption></figure>
          <figure class="gallery-item reveal delay-2" data-caption="The details" data-source="${IG}"><div class="photo"><img src="assets/images/post-style-b.jpg" alt="Detail of a Stallion Outlook garment" loading="lazy"></div><figcaption class="gallery-caption">The details</figcaption></figure>
          <figure class="gallery-item reveal delay-2" data-caption="Everyday elegance" data-source="${IG}"><div class="photo"><img src="assets/images/post-style-c.jpg" alt="Stallion Outlook everyday wear" loading="lazy"></div><figcaption class="gallery-caption">Everyday elegance</figcaption></figure>
        </div>
        <div class="center-action reveal"><a class="btn btn-outline-dark" href="gallery.html">Browse the full gallery <span aria-hidden="true">↗</span></a></div>
      </div>
    </section>

${ctaBand('Book an Appointment', 'Let\u2019s make something', 'worth remembering.', 'Tell us what you have in mind and we will get back to you on WhatsApp to arrange a fitting or a chat about your design.', 'Start your order', 'appointment.html')}

    <!-- CONNECT STRIP -->
    <section class="connect-strip">
      <div class="container connect-inner">
        <div><p class="eyebrow">Find Us</p><h2>Accra, Ghana.</h2><p>Exact location shared when you book.</p></div>
        <div class="connect-links">
          <a href="${WA}" target="_blank" rel="noopener">WhatsApp ↗</a>
          <a href="${IG}" target="_blank" rel="noopener">Instagram ↗</a>
          <a href="mailto:stallionoutlook@gmail.com">Email ↗</a>
          <a href="contact.html">All contact details ↗</a>
        </div>
      </div>
    </section>`;

/* =========================================================
   ABOUT
   ========================================================= */
const about = `${pageHero('The House', 'A sharper silhouette', 'begins here.', 'Stallion Outlook is an Accra-based fashion house built on one belief: clothing should fit your life, not the other way around.', 'post-2025-april.jpg', 'Est. in Accra · Made for you')}

    <section class="section story-section">
      <div class="container split">
        <div class="split-copy reveal">
          <p class="eyebrow">Our Story</p>
          <h2 class="display">A conversation,<br><em>then a garment.</em></h2>
          <p class="lede">We started with a simple observation: too many people buy clothes that almost fit, almost suit them, almost say what they want to say.</p>
          <p>Stallion Outlook exists to close that gap. We are a small, focused house where the person cutting your cloth is the person listening to your story. There is no rack of fixed sizes and no compromise on the details that matter to you.</p>
          <p>Our Instagram community has grown to over 13,000 people who follow the work, share their own kaftan photos and tell us what they want to see next. That conversation shapes the house as much as any sketchbook.</p>
          <a class="text-link" href="collections.html">See what we make <span aria-hidden="true">→</span></a>
        </div>
        <div class="split-media reveal delay-1">
          <div class="photo"><img src="assets/images/post-2024-a.jpg" alt="Stallion Outlook tailoring shared on social media" loading="lazy"></div>
          <span class="media-tag">From the studio floor</span>
        </div>
      </div>
    </section>

    <section class="section promise-section">
      <div class="container">
        <div class="section-head center reveal">
          <p class="eyebrow eyebrow-center">What We Stand For</p>
          <h2 class="display">Three promises,<br><em>every single time.</em></h2>
        </div>
        <div class="promise-grid">
          <article class="promise-card reveal"><span>01</span><h3>Measured on you</h3><p>Every pattern starts with your measurements, not a size chart. It is the reason a Stallion Outlook piece sits the way it does.</p></article>
          <article class="promise-card reveal delay-1"><span>02</span><h3>Cloth with character</h3><p>We choose textures and weights that move well in Accra's heat and still look composed at the end of a long day.</p></article>
          <article class="promise-card reveal delay-2"><span>03</span><h3>Made in Accra</h3><p>Local hands, personal service and a direct line to the people making your garment. No middlemen, no mystery.</p></article>
        </div>
      </div>
    </section>

    <section class="image-band" style="--photo: url('assets/images/post-2025-easter.jpg')">
      <div class="container image-band-inner">
        <p class="eyebrow eyebrow-light">Tag us in your kaftan photos</p>
        <blockquote>"The best part of what we make is seeing it worn — out in the world, on real people, making real memories."</blockquote>
        <a class="text-link" href="${IG}" target="_blank" rel="noopener">Follow @stallionoutlook <span aria-hidden="true">↗</span></a>
      </div>
    </section>

    <section class="section values-section">
      <div class="container split reverse">
        <div class="split-media reveal">
          <div class="photo"><img src="assets/images/post-style-b.jpg" alt="Close detail of a Stallion Outlook garment" loading="lazy"></div>
          <span class="media-tag">The details matter</span>
        </div>
        <div class="split-copy reveal delay-1">
          <p class="eyebrow">The House Today</p>
          <h2 class="display">Rooted in Accra,<br><em>worn everywhere.</em></h2>
          <p>Our work is shaped by the city we live in — its colour, its pace and the way people here dress for both occasion and everyday life.</p>
          <p>The house is known first for premium kaftans, then for a growing reputation in shirts, shorts, suits and trousers. The common thread is the same: clean lines, considered cloth and a finish that invites a second look.</p>
          <div class="feature-list compact">
            <div class="feature-row"><span>01</span><div><strong>Premium kaftans</strong><p>Our signature, for men and women.</p></div></div>
            <div class="feature-row"><span>02</span><div><strong>Everyday tailoring</strong><p>Shirts, shorts and trousers made to measure.</p></div></div>
            <div class="feature-row"><span>03</span><div><strong>Occasion pieces</strong><p>Suits, agbadas and wedding attire.</p></div></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section feed-section">
      <div class="container">
        <div class="section-head reveal">
          <p class="eyebrow">The Community</p>
          <h2 class="display">Made for the<br><em>feed, and real life.</em></h2>
          <p>A selection of moments shared by the house and its community. Tap through to the source on Instagram.</p>
        </div>
        <div class="feed-grid">
          <a href="${IG}" target="_blank" rel="noopener" class="feed-cell photo reveal"><img src="assets/images/reel-2025-apr.jpg" alt="Stallion Outlook reel still from April 2025" loading="lazy"></a>
          <a href="${IG}" target="_blank" rel="noopener" class="feed-cell photo reveal delay-1"><img src="assets/images/reel-2024-nov.jpg" alt="Stallion Outlook reel still from November 2024" loading="lazy"></a>
          <a href="${IG}" target="_blank" rel="noopener" class="feed-cell photo reveal delay-2"><img src="assets/images/reel-2024-mar.jpg" alt="Stallion Outlook reel still from March 2024" loading="lazy"></a>
          <a href="${IG}" target="_blank" rel="noopener" class="feed-cell photo reveal"><img src="assets/images/reel-2024-feb.jpg" alt="Stallion Outlook reel still from February 2024" loading="lazy"></a>
          <a href="${IG}" target="_blank" rel="noopener" class="feed-cell photo reveal delay-1"><img src="assets/images/reel-2023-nov-a.jpg" alt="Stallion Outlook reel still" loading="lazy"></a>
          <a href="${IG}" target="_blank" rel="noopener" class="feed-cell photo reveal delay-2"><img src="assets/images/reel-2023-nov-b.jpg" alt="Stallion Outlook reel still" loading="lazy"></a>
        </div>
      </div>
    </section>

${ctaBand('Work With Us', 'Your story,', 'well dressed.', 'Bring us an occasion, an idea or just a fabric you love. We will take it from there.', 'Book a fitting', 'appointment.html')}`;

/* =========================================================
   COLLECTIONS
   ========================================================= */
function collection(no, name, sub, image, thumb, desc, points, source) {
  return `    <article class="collection-detail" id="${name.toLowerCase().replace(/[^a-z]+/g, '-')}">
      <div class="container collection-detail-grid">
        <div class="collection-visual reveal">
          <div class="photo"><img src="assets/images/${image}" alt="${name} by Stallion Outlook" loading="lazy"></div>
          <div class="collection-thumb photo"><img src="assets/images/${thumb}" alt="Detail of ${name}" loading="lazy"></div>
          <span class="card-no">${no}</span>
        </div>
        <div class="collection-text reveal delay-1">
          <p class="eyebrow">The Collection</p>
          <h2 class="display">${name.split(' ')[0]} <em>${name.split(' ').slice(1).join(' ')}</em></h2>
          <p class="collection-sub">${sub}</p>
          <p>${desc}</p>
          <ul class="check-list">${points.map(function (p) { return '<li>' + p + '</li>'; }).join('')}</ul>
          <div class="collection-actions">
            <a class="btn btn-gold" href="appointment.html">Enquire about this <span aria-hidden="true">↗</span></a>
            <a class="text-link" href="${source}" target="_blank" rel="noopener">See it on Instagram <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
    </article>`;
}

const collections = `${pageHero('The Collections', 'Six ways to be', 'unforgettable.', 'Every piece begins as a starting point. Choose a category, then make it entirely yours — cloth, cut, colour and finishing.', 'post-2024-b', 'Made to measure · Made in Accra')}

    <section class="section collection-intro">
      <div class="container narrow reveal">
        <p class="eyebrow eyebrow-center">Explore the Range</p>
        <h2 class="display center">The house, <em>in detail.</em></h2>
        <p>Our categories mirror what the house actually makes — the same pieces you will find in the @stallionoutlook highlights. Nothing here is fixed: if you can imagine a variation, we can talk about making it.</p>
      </div>
    </section>

${collection('01', 'Premium Kaftans', 'The signature of the house — for men and women.', 'post-2024-b.jpg', 'cat-kaftans.jpg', 'Flowing, generous and richly finished, our kaftans are the piece the house is best known for. They move beautifully in the Accra heat and carry just enough detail to make an entrance without ever looking loud.', ['Free-flowing cuts for men and women', 'Hand-finished embroidery and neckline detail', 'Choice of weight, colour and motif', 'Made for weddings, Sundays and everyday grace'], IG)}

${collection('02', 'Signature Suits', 'Two and three-piece tailoring with presence.', 'post-2024-a.jpg', 'cat-suits.jpg', 'A Stallion Outlook suit is cut close where it should be and easy where it matters. Considered linings and breathable cloth keep you composed from the first handshake to the last dance.', ['Single or double-breasted jackets', 'Flat-front or pleated trousers', 'Lapel, lining and button choices', 'Optional waistcoat for the full three-piece look'], IG)}

${collection('03', 'Shirts', 'Every tailoring, with room to breathe.', 'post-style-a.jpg', 'cat-shirts.jpg', 'The shirt is where personal style often starts. Ours are made with the same attention as our occasion pieces — from the collar roll to the last button — so an everyday garment still feels considered.', ['Formal and casual collars', 'Long and short sleeve options', 'Fabric chosen for the season', 'Monogramming available on request'], IG)}

${collection('04', 'Shorts', 'Relaxed silhouettes, carefully cut.', 'reel-2024-nov.jpg', 'cat-shorts.jpg', 'Smart enough for an evening out, easy enough for a warm afternoon. Our shorts are cut with the same precision as our trousers, with a comfortable drape and a clean finish.', ['Tailored and relaxed fits', 'Mid or high rise options', 'Side and back pocket detailing', 'Matching shirt sets available'], IG)}

${collection('05', 'Trousers', 'The foundation of a good wardrobe.', 'post-2024-c.jpg', 'cat-pants.jpg', 'Often overlooked, always noticed. Our trousers are cut to your measurements with a clean break and a comfortable seat — the kind of piece you reach for again and again.', ['Flat-front or pleated', 'Straight, tapered or wide legs', 'Waistband and pocket options', 'Cloth suited to work or occasion'], IG)}

${collection('06', 'Occasion & Wedding', 'For the day everyone remembers.', 'post-2024-d.jpg', 'post-2025-easter.jpg', 'From the couple to the full wedding party, we make clothing for moments that matter. Agbadas, kaftans, suits and coordinated looks — designed together so the whole group reads as one.', ['Couples and wedding party outfits', 'Agbadas and grand traditional wear', 'Coordinated colours and detailing', 'Fittings arranged around your timeline'], IG)}

    <section class="section start-section">
      <div class="container">
        <div class="start-card reveal">
          <p class="eyebrow eyebrow-light">Not sure where to start?</p>
          <h2 class="display">Bring us the occasion.<br><em>We will find the piece.</em></h2>
          <p>Tell us where you are going and how you want to feel. We will suggest a category, a cloth and a design that makes sense for you.</p>
          <a class="btn btn-gold" href="appointment.html">Book a consultation <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>

${ctaBand('Every Piece Is Yours', 'Ready to make it', 'personal?', 'Send a message with the category you like and we will talk through options, fabric and timing.', 'Enquire now', 'appointment.html')}`;

/* =========================================================
   CRAFT
   ========================================================= */
const craft = `${pageHero('Custom Tailoring', 'The making of', 'a difference.', 'A Stallion Outlook piece is never pulled from a rack. It is discussed, measured, cut, checked and finished — with you at the centre of every step.', 'post-style-b', 'Consultation · Cloth · Cut · Fitting · Finish')}

    <section class="section craft-intro">
      <div class="container narrow reveal">
        <p class="eyebrow eyebrow-center">How It Works</p>
        <h2 class="display center">From first word<br>to <em>final stitch.</em></h2>
        <p>Custom tailoring should feel generous, not intimidating. Here is the full path, from the first message to the day you wear it.</p>
      </div>
    </section>

    <section class="section craft-steps">
      <div class="container">
        <div class="craft-step-row reveal">
          <div class="craft-step-visual photo"><img src="assets/images/reel-2025-apr.jpg" alt="Stallion Outlook consultation and design still" loading="lazy"></div>
          <div class="craft-step-copy"><span>Step 01</span><h3>Talk it through</h3><p>We start with a conversation — in the studio or on WhatsApp. Tell us the occasion, who will see it and what you want the outfit to say. We will ask about your usual fit and anything you have never liked about clothes you own.</p><p>By the end, we will have a clear idea of the garment and a realistic sense of timing.</p></div>
        </div>
        <div class="craft-step-row reverse reveal">
          <div class="craft-step-visual photo"><img src="assets/images/post-style-a.jpg" alt="Fabric and shirt detail from Stallion Outlook" loading="lazy"></div>
          <div class="craft-step-copy"><span>Step 02</span><h3>Choose cloth &amp; design</h3><p>Next comes the fun part. We help you choose a fabric that suits the occasion and the climate, then settle the details: neckline, embroidery, lapel, lining, buttons and finish.</p><p>Nothing is a package deal. If you have a reference photo, send it — we will happily work from it.</p></div>
        </div>
        <div class="craft-step-row reveal">
          <div class="craft-step-visual photo"><img src="assets/images/post-2025-april.jpg" alt="Stallion Outlook fitting" loading="lazy"></div>
          <div class="craft-step-copy"><span>Step 03</span><h3>Measure &amp; cut</h3><p>We take a full set of measurements and build the pattern around your body. This is where made-to-measure earns its name — the cut follows you, not the other way around.</p><p>The cloth is then cut carefully, with the pattern checked against your measurements before a stitch is sewn.</p></div>
        </div>
        <div class="craft-step-row reverse reveal">
          <div class="craft-step-visual photo"><img src="assets/images/post-style-c.jpg" alt="Stallion Outlook garment detail" loading="lazy"></div>
          <div class="craft-step-copy"><span>Step 04</span><h3>First fitting</h3><p>You come back to try the piece before it is finished. We check the fall of the cloth, the ease of movement and every point where a garment can pull or sit badly.</p><p>Adjustments are made here — this is the step that turns a good garment into the right one.</p></div>
        </div>
        <div class="craft-step-row reveal">
          <div class="craft-step-visual photo"><img src="assets/images/post-style-b.jpg" alt="Stallion Outlook finishing detail" loading="lazy"></div>
          <div class="craft-step-copy"><span>Step 05</span><h3>Finish &amp; press</h3><p>Buttons are secured, hems are set and the piece is pressed and inspected. We look at it the way you will — from a distance, up close and in movement.</p></div>
        </div>
        <div class="craft-step-row reverse reveal">
          <div class="craft-step-visual photo"><img src="assets/images/post-2024-d.jpg" alt="Finished Stallion Outlook occasion wear" loading="lazy"></div>
          <div class="craft-step-copy"><span>Step 06</span><h3>Yours to wear</h3><p>Your garment is packed and handed over with care instructions. And the relationship does not end there — we remain available for future alterations, repairs and the next piece.</p></div>
        </div>
      </div>
    </section>

    <section class="section fabric-section">
      <div class="container">
        <div class="section-head reveal">
          <p class="eyebrow">Fabric &amp; Finish</p>
          <h2 class="display">The details you<br><em>feel before you see.</em></h2>
          <p>Weight, texture, lining, stitch. These are the choices that decide whether a garment merely looks good or actually lives with you.</p>
        </div>
        <div class="fabric-grid">
          <figure class="fabric-cell photo reveal"><img src="assets/images/reel-2024-mar.jpg" alt="Stallion Outlook fabric detail" loading="lazy"></figure>
          <figure class="fabric-cell photo reveal delay-1"><img src="assets/images/reel-2024-feb.jpg" alt="Stallion Outlook garment texture" loading="lazy"></figure>
          <figure class="fabric-cell photo reveal delay-2"><img src="assets/images/reel-2023-nov-a.jpg" alt="Stallion Outlook finish" loading="lazy"></figure>
          <figure class="fabric-cell photo reveal"><img src="assets/images/reel-2023-nov-b.jpg" alt="Stallion Outlook garment detail" loading="lazy"></figure>
        </div>
      </div>
    </section>

    <section class="section faq-section">
      <div class="container faq-grid">
        <div class="faq-intro reveal">
          <p class="eyebrow">Good to Know</p>
          <h2 class="display">Questions,<br><em>answered.</em></h2>
          <p>Still unsure about something? Send us a message on WhatsApp and we will answer directly.</p>
          <a class="btn btn-outline-dark" href="${WA}" target="_blank" rel="noopener">Ask on WhatsApp <span aria-hidden="true">↗</span></a>
        </div>
        <div class="reveal delay-1">
${qa([
  ['How long does a made-to-measure piece take?', 'It depends on the garment, the cloth and the amount of detailing. We give you a realistic timeline at the consultation and keep you updated as the piece moves through the workroom.'],
  ['Do I have to visit the studio?', 'Not necessarily. We can begin with a conversation over WhatsApp and arrange measurements and fittings at a time that works for you. Exact location details are shared when you book.'],
  ['Can I copy a design I have seen online?', 'Often, yes. Send us a reference image and we will talk through what can be adapted to your measurements, chosen cloth and the way you want it to fit.'],
  ['Do you make matching outfits for groups?', 'Yes. Weddings and group occasions are a big part of our work. We can coordinate colour, cloth and detailing across a wedding party or family group.'],
  ['What if the fit is not right?', 'That is what the fitting is for. We adjust the piece before final finishing. We also help with alterations further down the line.'],
  ['Do you offer laundry or aftercare?', 'Yes — ask about our fitting, alteration and garment care services when you enquire.']
])}
        </div>
      </div>
    </section>

${ctaBand('Start Something', 'The first step is', 'a conversation.', 'Tell us what you have in mind. We will take care of the rest, one careful step at a time.', 'Book a fitting', 'appointment.html')}`;

/* =========================================================
   GALLERY
   ========================================================= */
const galleryImages = [
  ['post-2025-easter.jpg', 'Stallion Outlook post, April 2025', 'occasion', 'https://www.instagram.com/p/DIqemhDIdup/'],
  ['post-2025-april.jpg', 'Dressing maketh a man', 'kaftans', 'https://www.instagram.com/p/DIojA_dI6fW/'],
  ['post-2024-a.jpg', 'Signature tailoring', 'suits', IG],
  ['post-2024-b.jpg', 'Premium kaftan from the feed', 'kaftans', 'https://www.instagram.com/p/C3GsmH2oDth/'],
  ['post-2024-c.jpg', 'Traditional West African attire', 'occasion', IG],
  ['post-2024-d.jpg', 'Occasion wear', 'occasion', IG],
  ['post-style-a.jpg', 'Shirt and everyday design', 'shirts', IG],
  ['post-style-b.jpg', 'Garment detail', 'details', IG],
  ['post-style-c.jpg', 'Everyday elegance', 'shirts', IG],
  ['reel-2025-apr.jpg', 'Reel still · April 2025', 'reels', IG],
  ['reel-2024-nov.jpg', 'Reel still · November 2024', 'reels', IG],
  ['reel-2024-mar.jpg', 'Reel still · March 2024', 'reels', IG],
  ['reel-2024-feb.jpg', 'Reel still · February 2024', 'reels', IG],
  ['reel-2023-nov-a.jpg', 'Reel still · 2023', 'reels', IG],
  ['reel-2023-nov-b.jpg', 'Reel still · 2023', 'reels', IG],
  ['reel-2023-nov-c.jpg', 'Reel still · 2023', 'reels', IG],
  ['reel-2023-nov-d.jpg', 'Reel still · 2023', 'reels', IG],
  ['reel-2023-nov-e.jpg', 'Reel still · 2023', 'reels', IG],
  ['cat-kaftans.jpg', 'Kaftans highlight', 'kaftans', IG],
  ['cat-shirts.jpg', 'Shirts highlight', 'shirts', IG],
  ['cat-shorts.jpg', 'Shorts highlight', 'shirts', IG],
  ['cat-suits.jpg', 'Suits highlight', 'suits', IG],
  ['cat-pants.jpg', 'Pants highlight', 'suits', IG]
];

const gallery = `${pageHero('The Gallery', 'A closer', 'look.', 'Twenty-three frames from the public feeds of Stallion Outlook — the work, the details and the moments in between. Click any image to view it larger and find its source.', 'post-2024-a', '@stallionoutlook · Instagram & Facebook')}

    <section class="section gallery-page-section">
      <div class="container">
        <div class="filter-tabs" role="group" aria-label="Filter the gallery">
          <button type="button" class="filter-btn is-active" data-filter="all">All <span>23</span></button>
          <button type="button" class="filter-btn" data-filter="kaftans">Kaftans</button>
          <button type="button" class="filter-btn" data-filter="suits">Suits</button>
          <button type="button" class="filter-btn" data-filter="shirts">Shirts &amp; Shorts</button>
          <button type="button" class="filter-btn" data-filter="occasion">Occasion</button>
          <button type="button" class="filter-btn" data-filter="details">Details</button>
          <button type="button" class="filter-btn" data-filter="reels">Reels</button>
        </div>

        <div class="gallery-grid gallery-full">
${galleryImages.map(function (x, i) {
  const delay = ['', ' delay-1', ' delay-2'][i % 3];
  const small = x[0].indexOf('cat-') === 0 ? ' is-small' : '';
  return '          <figure class="gallery-item reveal' + delay + small + '" data-category="' + x[2] + '" data-caption="' + x[1] + '" data-source="' + x[3] + '">\n            <div class="photo"><img src="assets/images/' + x[0] + '" alt="' + x[1] + ' by Stallion Outlook" loading="lazy"></div>\n            <figcaption class="gallery-caption">' + x[1] + '</figcaption>\n          </figure>';
}).join('\n')}
        </div>
        <p class="gallery-note">Photography sourced from the public Instagram and Facebook pages of Stallion Outlook (@stallionoutlook). Confirm image permissions with the client before publishing.</p>
      </div>
    </section>

${ctaBand('Seen Something You Like?', 'Let us make it', 'for you.', 'Every image here started as a conversation. Yours can too.', 'Start a conversation', 'appointment.html')}`;

/* =========================================================
   APPOINTMENT
   ========================================================= */
const appointment = `${pageHero('Book an Appointment', 'Let\u2019s make something', 'worth remembering.', 'Tell us what you have in mind and we will get back to you on WhatsApp to arrange a fitting or a chat about your design.', 'post-2024-d', 'Monday – Saturday · By appointment')}

    <section class="section appointment-page-section">
      <div class="container appointment-grid">
        <div class="appointment-copy reveal">
          <p class="eyebrow">Start Here</p>
          <h2 class="display">Tell us about<br><em>your order.</em></h2>
          <p>The form takes a minute. It opens WhatsApp with your details already written out, so nothing is stored on this website and you can send it straight away.</p>
          <div class="contact-list">
            <div class="contact-row"><span class="ico" aria-hidden="true">↗</span><div><span class="mini-label">Prefer to message?</span><a href="${WA}" target="_blank" rel="noopener">Chat with us on WhatsApp</a></div></div>
            <div class="contact-row"><span class="ico" aria-hidden="true">◷</span><div><span class="mini-label">Availability</span><span>Monday – Saturday, by appointment</span></div></div>
            <div class="contact-row"><span class="ico" aria-hidden="true">◎</span><div><span class="mini-label">Location</span><span>Accra, Ghana — shared when booking</span></div></div>
          </div>
          <div class="appointment-aside photo reveal">
            <img src="assets/images/post-style-b.jpg" alt="Detail of a Stallion Outlook garment" loading="lazy">
            <span>Every detail, considered.</span>
          </div>
        </div>

        <form class="form-card reveal delay-1" id="enquiry-form" novalidate>
          <p class="form-kicker">Enquiry form</p>
          <h3>Tell us about your order</h3>
          <div class="form-grid">
            <div class="field"><label for="f-name">Full name</label><input id="f-name" name="name" type="text" placeholder="Your name" required></div>
            <div class="field"><label for="f-phone">Phone / WhatsApp</label><input id="f-phone" name="phone" type="tel" placeholder="+233 ..." required></div>
            <div class="field full"><label for="f-service">What are you looking for?</label>
              <select id="f-service" name="service" required>
                <option value="" selected disabled>Select a service</option>
                <option>Premium kaftan</option>
                <option>Bespoke suit</option>
                <option>Shirt</option>
                <option>Shorts</option>
                <option>Trousers</option>
                <option>Agbada</option>
                <option>Wedding attire</option>
                <option>Fitting, alterations &amp; care</option>
                <option>Something else</option>
              </select>
            </div>
            <div class="field"><label for="f-date">Preferred date</label><input id="f-date" name="date" type="date"></div>
            <div class="field"><label for="f-time">Preferred time</label><input id="f-time" name="time" type="text" placeholder="e.g. 10:00 am"></div>
            <div class="field full"><label for="f-message">Anything else we should know?</label><textarea id="f-message" name="message" placeholder="Tell us about the occasion, fabric, colours..."></textarea></div>
          </div>
          <button class="btn btn-gold btn-block" type="submit">Send enquiry via WhatsApp <span aria-hidden="true">↗</span></button>
          <p class="form-note">Submitting opens WhatsApp with your details prefilled — nothing is stored on this website.</p>
          <p class="form-status" id="form-status" role="status" aria-live="polite"></p>
        </form>
      </div>
    </section>

    <section class="section next-section">
      <div class="container">
        <div class="section-head center reveal">
          <p class="eyebrow eyebrow-center">What Happens Next</p>
          <h2 class="display">From message to <em>measuring tape.</em></h2>
        </div>
        <div class="next-grid">
          <article class="next-card reveal"><span>01</span><h3>We reply</h3><p>We read your enquiry and get back to you on WhatsApp, usually the same day, with a few clarifying questions.</p></article>
          <article class="next-card reveal delay-1"><span>02</span><h3>We plan</h3><p>Together we settle the garment, the cloth, the timeline and a convenient time to meet or measure.</p></article>
          <article class="next-card reveal delay-2"><span>03</span><h3>We measure</h3><p>You come in for measurements and a proper conversation about the details that make it yours.</p></article>
          <article class="next-card reveal"><span>04</span><h3>We make</h3><p>Pattern, cut, stitch, fitting and finish — with updates along the way.</p></article>
        </div>
      </div>
    </section>

    <section class="section prepare-section">
      <div class="container split">
        <div class="split-copy reveal">
          <p class="eyebrow">Before You Come</p>
          <h2 class="display">A little preparation<br><em>goes a long way.</em></h2>
          <p>You do not need to arrive with a finished plan. But a few things make the first conversation more useful.</p>
          <ul class="check-list">
            <li>A rough idea of the occasion and date</li>
            <li>A photo of something you like, if you have one</li>
            <li>An idea of your usual size and fit preferences</li>
            <li>Any colours or fabrics you love — or cannot stand</li>
            <li>Your questions, however small</li>
          </ul>
        </div>
        <div class="prepare-media reveal delay-1">
          <div class="photo"><img src="assets/images/reel-2024-mar.jpg" alt="Stallion Outlook design detail" loading="lazy"></div>
          <div class="prepare-note"><strong>Good to know</strong><p>Appointments are one-to-one. Exact location details are shared when your fitting is confirmed.</p></div>
        </div>
      </div>
    </section>

    <section class="section faq-section">
      <div class="container faq-grid">
        <div class="faq-intro reveal">
          <p class="eyebrow">Before You Book</p>
          <h2 class="display">Quick <em>answers.</em></h2>
          <p>Anything else? Send us a message and we will reply directly.</p>
          <a class="btn btn-outline-dark" href="contact.html">More ways to reach us <span aria-hidden="true">↗</span></a>
        </div>
        <div class="reveal delay-1">
${qa([
  ['Is there a fee for the consultation?', 'No. The first conversation is free — we want to understand what you need before either of us commits to anything.'],
  ['Can I bring someone with me?', 'Of course. Many clients bring a partner, friend or family member to help with fabric and design decisions.'],
  ['How early should I book for a wedding?', 'As early as you can. The earlier we start, the more time we have for cloth, fittings and any adjustments. Send us your date and we will advise.'],
  ['What if I need to change my appointment?', 'Just message us on WhatsApp. We understand that plans move and will find another time that works.']
])}
        </div>
      </div>
    </section>`;

/* =========================================================
   CONTACT
   ========================================================= */
const contact = `${pageHero('Get in Touch', 'We\u2019d love to', 'dress you.', 'Enquiries, fittings, collaborations or a simple question about fabric — reach out however suits you. We reply as quickly as we can.', 'reel-2023-nov-c', 'Accra, Ghana · Online everywhere')}

    <section class="section contact-page-section">
      <div class="container">
        <div class="contact-head reveal">
          <div><p class="eyebrow">The Details</p><h2 class="display">Find your<br><em>way to us.</em></h2></div>
          <p>WhatsApp is the fastest way to reach the house. Everything else — calls, email and social messages — comes straight to us too.</p>
        </div>
        <div class="contact-cards reveal delay-1">
          <a class="contact-card" href="${WA}" target="_blank" rel="noopener"><span class="label">WhatsApp</span><span class="value">+233 24 827 1255</span><span class="sub">Fastest way to reach us</span></a>
          <a class="contact-card" href="tel:+233248271255"><span class="label">Call</span><span class="value">+233 24 827 1255</span><span class="sub">Monday – Saturday</span></a>
          <a class="contact-card" href="mailto:stallionoutlook@gmail.com"><span class="label">Email</span><span class="value">stallionoutlook@gmail.com</span><span class="sub">For detailed enquiries</span></a>
        </div>
        <div class="contact-cards secondary reveal">
          <a class="contact-card" href="${IG}" target="_blank" rel="noopener"><span class="label">Instagram</span><span class="value">@stallionoutlook</span><span class="sub">13.2K followers · Tag us in your photos</span></a>
          <a class="contact-card" href="${FB}" target="_blank" rel="noopener"><span class="label">Facebook</span><span class="value">Stallion Outlook</span><span class="sub">Page updates and photo albums</span></a>
          <a class="contact-card" href="appointment.html"><span class="label">Fittings</span><span class="value">By appointment</span><span class="sub">Book a time that works for you</span></a>
        </div>
      </div>
    </section>

    <section class="section location-section">
      <div class="container location-grid">
        <div class="location-card reveal">
          <p class="eyebrow">Find Us</p>
          <h2 class="display">Based in <em>Accra.</em></h2>
          <p>We are based in Accra, Ghana. Exact address and directions are shared when your appointment is confirmed, so every visit is properly prepared for.</p>
          <div class="location-meta">
            <div><span class="mini-label">City</span><span>Accra, Ghana</span></div>
            <div><span class="mini-label">Visits</span><span>By appointment only</span></div>
            <div><span class="mini-label">Days</span><span>Monday – Saturday</span></div>
          </div>
        </div>
        <div class="map-card reveal delay-1" aria-label="Stallion Outlook is based in Accra, Ghana">
          <div class="map-grid" aria-hidden="true"></div>
          <div class="map-pin" aria-hidden="true"><span></span></div>
          <div class="map-label"><strong>Stallion Outlook</strong><span>Accra · Ghana</span></div>
        </div>
      </div>
    </section>

    <section class="section feed-section">
      <div class="container">
        <div class="section-head reveal">
          <p class="eyebrow">Follow Along</p>
          <h2 class="display">The work, <em>as it happens.</em></h2>
          <p>New pieces, finishing details and photos from the community. Tap through to the source on Instagram.</p>
        </div>
        <div class="feed-grid">
          <a href="${IG}" target="_blank" rel="noopener" class="feed-cell photo reveal"><img src="assets/images/reel-2023-nov-d.jpg" alt="Stallion Outlook reel still" loading="lazy"></a>
          <a href="${IG}" target="_blank" rel="noopener" class="feed-cell photo reveal delay-1"><img src="assets/images/reel-2023-nov-e.jpg" alt="Stallion Outlook reel still" loading="lazy"></a>
          <a href="${IG}" target="_blank" rel="noopener" class="feed-cell photo reveal delay-2"><img src="assets/images/reel-2024-feb.jpg" alt="Stallion Outlook reel still" loading="lazy"></a>
          <a href="${IG}" target="_blank" rel="noopener" class="feed-cell photo reveal"><img src="assets/images/reel-2024-mar.jpg" alt="Stallion Outlook reel still" loading="lazy"></a>
          <a href="${IG}" target="_blank" rel="noopener" class="feed-cell photo reveal delay-1"><img src="assets/images/reel-2024-nov.jpg" alt="Stallion Outlook reel still" loading="lazy"></a>
          <a href="${IG}" target="_blank" rel="noopener" class="feed-cell photo reveal delay-2"><img src="assets/images/reel-2025-apr.jpg" alt="Stallion Outlook reel still" loading="lazy"></a>
        </div>
        <div class="center-action reveal"><a class="btn btn-outline-dark" href="${IG}" target="_blank" rel="noopener">Visit @stallionoutlook <span aria-hidden="true">↗</span></a></div>
      </div>
    </section>

${ctaBand('Ready When You Are', 'Have a question?', 'Just ask.', 'Send a message and we will help you find the right piece, cloth or fitting time.', 'Book a fitting', 'appointment.html')}`;

/* ---------- Write all pages ---------- */
const pages = [
  ['index.html', 'Home', 'Stallion Outlook — premium kaftans, bespoke suits and occasion wear, cut to measure in Accra, Ghana.', 'home', home],
  ['about.html', 'The House', 'The story, values and craft behind Stallion Outlook, a bespoke fashion house in Accra, Ghana.', 'about', about],
  ['collections.html', 'Collections', 'Explore kaftans, suits, shirts, shorts, trousers and occasion wear from Stallion Outlook, Accra.', 'collections', collections],
  ['craft.html', 'Our Craft', 'How a Stallion Outlook garment is made — from consultation and cloth to fitting and finish.', 'craft', craft],
  ['gallery.html', 'Gallery', 'Photography from the public Instagram and Facebook feeds of Stallion Outlook, Accra.', 'gallery', gallery],
  ['appointment.html', 'Book an Appointment', 'Enquire or book a fitting with Stallion Outlook in Accra. Enquiries open directly in WhatsApp.', 'appointment', appointment],
  ['contact.html', 'Contact', 'Contact Stallion Outlook in Accra on WhatsApp, phone, email, Instagram and Facebook.', 'contact', contact]
];

pages.forEach(function (p) {
  fs.writeFileSync(path.join(ROOT, p[0]), shell({
    title: p[1],
    description: p[2],
    page: p[3],
    body: p[4].replace(/\$\{IG\}/g, IG).replace(/\$\{FB\}/g, FB).replace(/\$\{WA\}/g, WA)
  }), 'utf8');
  console.log('wrote ' + p[0]);
});
