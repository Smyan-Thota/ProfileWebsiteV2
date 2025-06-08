const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');
const button = document.getElementById('menu-button');

button.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  overlay.classList.toggle('show', isOpen);
  if (isOpen) {
    menu.classList.remove('scrolled');
  } else if (window.scrollY > 50) {
    menu.classList.add('scrolled');
  }
});

overlay.addEventListener('click', () => {
  menu.classList.remove('open');
  overlay.classList.remove('show');
  if (window.scrollY > 50) {
    menu.classList.add('scrolled');
  }
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    menu.classList.add('scrolled');
  } else {
    menu.classList.remove('scrolled');
  }
});
