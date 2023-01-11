// бургер
const burger = document.querySelectorAll('.burger');
const menu = document.querySelector(".menu")
const nav = document.querySelector('.menu__nav');
const navItems = nav.querySelectorAll('a');
const body = document.body;

burger.forEach((event) => {
    event.addEventListener('click', () => {
        nav.classList.toggle('nav--visible');
      });
})

navItems.forEach(el => {
  el.addEventListener('click', () => {
    nav.classList.remove('nav--visible');
  });
});