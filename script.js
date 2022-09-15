const hamburger = document.querySelector('.humgurger');
const navMenu = document.querySelector('#navMenu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('#navMenu').forEach((n) => (
  n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })));