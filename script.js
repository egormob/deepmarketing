const parallaxLayers = document.querySelectorAll('[data-depth]');
const toTopButton = document.querySelector('.to-top');

const applyParallax = () => {
  const scrollTop = window.scrollY || window.pageYOffset;
  parallaxLayers.forEach((layer) => {
    const depth = parseFloat(layer.dataset.depth) || 0;
    const movement = scrollTop * depth;
    layer.style.transform = `translate3d(0, ${movement * -0.4}px, 0)`;
  });
};

const toggleToTop = () => {
  if (window.scrollY > window.innerHeight * 0.5) {
    toTopButton?.classList.add('is-visible');
  } else {
    toTopButton?.classList.remove('is-visible');
  }
};

window.addEventListener('scroll', () => {
  applyParallax();
  toggleToTop();
});

window.addEventListener('resize', applyParallax);
applyParallax();

toTopButton?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
