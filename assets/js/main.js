document.querySelectorAll('[data-nav]').forEach((link) => {
  if (link.dataset.nav === document.body.dataset.page) link.classList.add('active');
});

const swapPrimaryAndSecondaryNavigation = () => {
  const topNav = document.querySelector('.top-nav');
  const sideNav = document.querySelector('.side-nav');
  if (!topNav || !sideNav) return;

  const startLabel = document.documentElement.lang === 'en' ? 'Get Started' : 'Comenzar';
  const frameworkLink = Array.from(topNav.querySelectorAll(':scope > a')).find((link) => link.dataset.nav === 'framework');
  const primaryLinks = Array.from(sideNav.querySelectorAll(':scope > a')).map((link) => {
    const primaryLink = link.cloneNode(true);
    primaryLink.querySelector('span')?.remove();
    return primaryLink;
  });
  if (frameworkLink) {
    const startLink = frameworkLink.cloneNode(true);
    startLink.textContent = startLabel;
    primaryLinks.splice(1, 0, startLink);
  }
  const secondaryIcons = {
    inicio: '<svg viewBox="0 0 24 24"><path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z"/><path d="M9 21v-6h6v6"/></svg>',
    framework: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="m9 15 6-6M10 9h5v5"/></svg>',
    recursos: '<svg viewBox="0 0 24 24"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H12v16H6.5A2.5 2.5 0 0 0 4 21Z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H12v16h5.5A2.5 2.5 0 0 1 20 21Z"/></svg>',
    autores: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.5"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/></svg>'
  };
  const secondaryLinks = Array.from(topNav.querySelectorAll(':scope > a')).map((link) => {
    const secondaryLink = link.cloneNode(true);
    if (secondaryLink.dataset.nav === 'framework') secondaryLink.textContent = startLabel;
    secondaryLink.prepend(Object.assign(document.createElement('span'), { className: 'nav-icon', innerHTML: secondaryIcons[secondaryLink.dataset.nav] }));
    return secondaryLink;
  });
  const languageSwitcher = topNav.querySelector('.language-switcher');

  topNav.querySelectorAll(':scope > a').forEach((link) => link.remove());
  primaryLinks.forEach((link) => topNav.insertBefore(link, languageSwitcher));
  sideNav.replaceChildren(...secondaryLinks);
};

const configureMobileNavigation = () => {
  const topbar = document.querySelector('.topbar');
  const topNav = document.querySelector('.top-nav');
  const sideNav = document.querySelector('.side-nav');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (!topbar || !topNav || !sideNav || !mobileMenu || document.querySelector('.mobile-primary-nav')) return;

  const primaryNav = document.createElement('nav');
  primaryNav.className = 'mobile-primary-nav';
  primaryNav.setAttribute('aria-label', topNav.getAttribute('aria-label') || 'Main navigation');
  topNav.querySelectorAll(':scope > a').forEach((link) => {
    const mobileLink = link.cloneNode(true);
    mobileLink.querySelector('span')?.remove();
    primaryNav.append(mobileLink);
  });
  topbar.insertBefore(primaryNav, topNav);

  mobileMenu.replaceChildren();
  sideNav.querySelectorAll(':scope > a').forEach((link) => mobileMenu.append(link.cloneNode(true)));
  mobileMenu.setAttribute('aria-label', sideNav.getAttribute('aria-label') || 'Explore framework');
};

swapPrimaryAndSecondaryNavigation();
configureMobileNavigation();

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
document.title = 'CoSolutioning';
const favicon = document.querySelector('link[rel="icon"]') || document.createElement('link');
favicon.rel = 'icon';
favicon.type = 'image/png';
favicon.href = '../assets/images/Logo_CoSolutioning01.png';
if (!favicon.parentNode) document.head.append(favicon);
