const menuBtn = document.querySelector('.burger-menu_btn');
const menuMobile = document.querySelector('.header__nav-list');

menuBtn.addEventListener('click', () => {
  menuMobile.classList.toggle('nav--open');
});

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
});

var swiper = new Swiper('.banner__slider', {
  loop: true,
  pagination: {
    el: '.slider__pagination',
  },
});
