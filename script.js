// ============================================================
// Rinconcito Casero — script.js
// Built by NovaBuild LLC | novabuildweb.netlify.app
// ============================================================

const navToggle = document.getElementById('nav-toggle');
const navLinks  = document.getElementById('nav-links');
const siteNav   = document.getElementById('site-nav');

// Mobile nav toggle
navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile nav when any link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Close mobile nav when clicking outside
document.addEventListener('click', e => {
  if (!siteNav.contains(e.target) && navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }
});

// Nav shadow on scroll
window.addEventListener('scroll', () => {
  siteNav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// Highlight active nav link based on scroll position
const sections    = document.querySelectorAll('section[id]');
const navAnchors  = document.querySelectorAll('.nav-links a[href^="#"]');

function updateActiveLink() {
  const scrollY = window.scrollY + 120;
  let current   = '';

  sections.forEach(section => {
    if (scrollY >= section.offsetTop) {
      current = section.id;
    }
  });

  navAnchors.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}

window.addEventListener('scroll', updateActiveLink, { passive: true });
updateActiveLink();
