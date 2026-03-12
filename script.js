const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle?.addEventListener('click', () => {
  menu.classList.toggle('open');
});

document.querySelectorAll('.menu a').forEach((link) => {
  link.addEventListener('click', () => menu.classList.remove('open'));
});
