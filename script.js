const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const focusableLinks = siteNav?.querySelectorAll('a') ?? [];

const toggleNav = (open) => {
  if (!navToggle || !siteNav) return;
  const isOpen = open ?? navToggle.getAttribute('aria-expanded') === 'true';
  const nextState = open ?? !isOpen;
  navToggle.setAttribute('aria-expanded', String(nextState));
  siteNav.classList.toggle('is-open', nextState);
  document.body.classList.toggle('nav-open', nextState);
};

navToggle?.addEventListener('click', () => {
  toggleNav();
});

focusableLinks.forEach((link) => {
  link.addEventListener('click', () => toggleNav(false));
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    toggleNav(false);
  }
});

const mediaQuery = window.matchMedia('(max-width: 960px)');
const handleViewportChange = () => {
  if (!mediaQuery.matches) {
    toggleNav(false);
  }
};

handleViewportChange();
if (typeof mediaQuery.addEventListener === 'function') {
  mediaQuery.addEventListener('change', handleViewportChange);
} else if (typeof mediaQuery.addListener === 'function') {
  mediaQuery.addListener(handleViewportChange);
}
