document.querySelectorAll('[data-nav]').forEach((link) => {
  if (link.dataset.nav === document.body.dataset.page) link.classList.add('active');
});

const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
menuButton?.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => backToTop?.classList.toggle('is-visible', window.scrollY > 450), { passive: true });
backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
// Keep the browser tab identity consistent across the public site.
document.title = 'CoSolve';
const favicon = document.querySelector('link[rel="icon"]') || document.createElement('link');
favicon.rel = 'icon';
favicon.type = 'image/png';
favicon.href = '../assets/images/favicon-cosolve.png';
if (!favicon.parentNode) document.head.append(favicon);
