const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');
const searchInput = document.getElementById('searchInput');
const productCards = Array.from(document.querySelectorAll('.product-card'));

menuToggle?.addEventListener('click', () => {
  menu.classList.toggle('open');
});

document.querySelectorAll('.menu a').forEach((link) => {
  link.addEventListener('click', () => menu.classList.remove('open'));
});

searchInput?.addEventListener('input', (event) => {
  const value = event.target.value.toLowerCase().trim();

  productCards.forEach((card) => {
    const name = (card.dataset.name || '').toLowerCase();
    const content = card.textContent.toLowerCase();
    const match = name.includes(value) || content.includes(value);
    card.classList.toggle('hidden', !match);
  });
});
