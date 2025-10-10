const toTopButton = document.querySelector('.to-top');

const toggleToTopVisibility = () => {
  if (!toTopButton) return;
  const show = window.scrollY > 400;
  toTopButton.style.display = show ? 'flex' : 'none';
};

toggleToTopVisibility();
window.addEventListener('scroll', toggleToTopVisibility);

toTopButton?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const form = document.querySelector('.form');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name');

  form.reset();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = `Спасибо, ${name || 'друг'}! Мы свяжемся с вами скоро.`;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('toast--visible');
  });

  setTimeout(() => {
    toast.classList.remove('toast--visible');
    setTimeout(() => toast.remove(), 400);
  }, 3200);
});
