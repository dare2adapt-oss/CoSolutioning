(() => {
  const language = document.documentElement.lang === 'en' ? 'en' : 'es';
  const page = document.body.dataset.page || 'inicio';
  const spanishPages = { inicio: 'index.html', framework: 'framework.html', recursos: 'recursos.html', autores: 'autores.html', principios: 'principios.html', roles: 'roles.html', artefactos: 'artefactos.html', eventos: 'eventos.html' };
  const englishPages = { ...spanishPages, recursos: 'resources.html', principios: 'principles.html', artefactos: 'artifacts.html', eventos: 'events.html' };
  const pages = language === 'en' ? englishPages : spanishPages;
  const filename = pages[page];
  document.querySelectorAll('[data-nav]').forEach((link) => { link.href = pages[link.dataset.nav]; });
  document.querySelectorAll('.language-switcher a').forEach((link) => {
    const target = link.lang;
    const targetPages = target === 'en' ? englishPages : spanishPages;
    link.href = target === language ? filename : `../${target}/${targetPages[page]}`;
    link.toggleAttribute('aria-current', target === language);
    link.classList.toggle('is-active', target === language);
  });
})();
