'use strict';

const burgerMenu = document.querySelector('.burger'),
   menuList = document.querySelector('.menu__list'),
   menuLogin = document.querySelector('.btn-group');
console.log(menuLogin);

const openBurger = () => {
   burgerMenu.classList.toggle('--active');
   menuList.classList.toggle('--active');
   document.body.classList.toggle('--lock')
   if (document.documentElement.clientWidth <= 560) {
      menuLogin.classList.toggle('--active');
   } else {
      menuLogin.classList.remove('--active');
   };
};

burgerMenu.addEventListener('click', openBurger);