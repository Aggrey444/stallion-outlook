/* =========================================================
   Stallion Outlook — interactions
   ========================================================= */
(function () {
  'use strict';

  var WHATSAPP_NUMBER = '233248271255';
  var WA_BASE = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=';

  function waUrl(message) {
    return WA_BASE + encodeURIComponent(message);
  }

  /* ---------- Header shadow on scroll ---------- */
  var header = document.querySelector('.site-header');
  var ticker = document.querySelector('.ticker');
  function onScroll() {
    if (!header) return;
    var limit = ticker ? ticker.offsetTop : 120;
    header.classList.toggle('is-scrolled', window.scrollY > limit - 90);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile navigation ---------- */
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('primary-nav');
  var scrim = document.getElementById('nav-scrim');

  function setMenu(open) {
    if (!nav || !toggle) return;
    nav.classList.toggle('is-open', open);
    if (scrim) scrim.classList.toggle('is-visible', open);
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  if (toggle) toggle.addEventListener('click', function () {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });
  if (scrim) scrim.addEventListener('click', function () { setMenu(false); });
  if (nav) nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setMenu(false);
  });

  /* ---------- Scroll reveal ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { revealObserver.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Collection quick enquiries ---------- */
  document.querySelectorAll('[data-enquire]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      window.open(waUrl('Hello Stallion Outlook,' + '\n\n' + link.getAttribute('data-enquire') + '\n\nCould you tell me more about options and pricing?'), '_blank', 'noopener');
    });
  });

  /* ---------- Enquiry form -> WhatsApp ---------- */
  var form = document.getElementById('enquiry-form');
  var status = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var fields = ['name', 'phone', 'service', 'date', 'time', 'message'];
      var values = {};
      var missing = [];

      fields.forEach(function (name) {
        var input = form.elements[name];
        values[name] = input ? input.value.trim() : '';
        if (input) input.classList.remove('is-invalid');
      });

      ['name', 'phone', 'service'].forEach(function (name) {
        if (!values[name]) {
          missing.push(name);
          var el = form.elements[name];
          if (el) el.classList.add('is-invalid');
        }
      });

      if (missing.length) {
        if (status) status.textContent = 'Please fill in your name, phone number and the service you need.';
        var first = form.elements[missing[0]];
        if (first) first.focus();
        return;
      }

      var lines = [
        'Hello Stallion Outlook,',
        '',
        "I'd like to make an enquiry / book a fitting.",
        '',
        'Name: ' + values.name,
        'Phone / WhatsApp: ' + values.phone,
        'Service: ' + values.service,
        'Preferred date: ' + (values.date || 'Flexible'),
        'Preferred time: ' + (values.time || 'Flexible')
      ];
      if (values.message) lines.push('', 'Details:', values.message);

      if (status) status.textContent = 'Opening WhatsApp with your enquiry…';
      window.open(waUrl(lines.join('\n')), '_blank', 'noopener');
    });
  }

  /* ---------- Gallery lightbox ---------- */
  var galleryItems = Array.prototype.slice.call(document.querySelectorAll('.gallery-item'));
  var visibleItems = galleryItems.slice();
  var lightbox = document.getElementById('lightbox');
  var lbImage = document.getElementById('lb-image');
  var lbCaption = document.getElementById('lb-caption');
  var lbSource = document.getElementById('lb-source');
  var current = 0;
  var lastFocused = null;

  function showImage(index) {
    if (!visibleItems.length) return;
    current = (index + visibleItems.length) % visibleItems.length;
    var item = visibleItems[current];
    var img = item.querySelector('img');
    if (!img || !lbImage) return;
    lbImage.src = img.src;
    lbImage.alt = img.alt || '';
    if (lbCaption) lbCaption.textContent = item.getAttribute('data-caption') || '';
    if (lbSource) lbSource.href = item.getAttribute('data-source') || 'https://www.instagram.com/stallionoutlook/';
  }

  function openLightbox(index) {
    if (!lightbox) return;
    lastFocused = document.activeElement;
    showImage(index);
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    var closeBtn = lightbox.querySelector('.lb-close');
    if (closeBtn) closeBtn.focus();
  }

  function closeLightbox() {
    if (!lightbox || !lightbox.classList.contains('is-open')) return;
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
  }

  galleryItems.forEach(function (item) {
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.setAttribute('aria-label', 'View image: ' + (item.getAttribute('data-caption') || 'gallery image'));
    function activate(e) {
      if (e.type === 'keydown' && e.key !== 'Enter' && e.key !== ' ') return;
      if (e.type === 'keydown') e.preventDefault();
      openLightbox(visibleItems.indexOf(item));
    }
    item.addEventListener('click', activate);
    item.addEventListener('keydown', activate);
  });

  /* ---------- Gallery category filters ---------- */
  var filterButtons = Array.prototype.slice.call(document.querySelectorAll('.filter-btn'));
  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var filter = button.getAttribute('data-filter') || 'all';
      filterButtons.forEach(function (b) { b.classList.toggle('is-active', b === button); });
      galleryItems.forEach(function (item) {
        item.hidden = filter !== 'all' && item.getAttribute('data-category') !== filter;
      });
      visibleItems = galleryItems.filter(function (item) { return !item.hidden; });
    });
  });

  if (lightbox) {
    var closeBtn = lightbox.querySelector('.lb-close');
    var prevBtn = lightbox.querySelector('.lb-prev');
    var nextBtn = lightbox.querySelector('.lb-next');
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevBtn) prevBtn.addEventListener('click', function () { showImage(current - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { showImage(current + 1); });
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }

  /* ---------- Global keyboard ---------- */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeLightbox();
      setMenu(false);
    }
    var lightboxOpen = lightbox && lightbox.classList.contains('is-open');
    if (lightboxOpen && e.key === 'ArrowRight') showImage(current + 1);
    if (lightboxOpen && e.key === 'ArrowLeft') showImage(current - 1);
  });

  /* ---------- Graceful image fallback: show gradient if a photo fails ---------- */
  document.querySelectorAll('.photo img').forEach(function (img) {
    img.addEventListener('error', function () { img.style.opacity = '0'; });
  });

  /* ---------- Footer year ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
