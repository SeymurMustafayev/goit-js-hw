import menu from './menu.js';
import menuTemplates from '../templates/dish.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const tem = document.querySelector(".switch__input");
 const colorBody = document.querySelector('body');

if (localStorage.getItem('Theme') === null) {
  localStorage.setItem('Theme', `${Theme.LIGHT}`)
 }
 if (localStorage.getItem('Theme') === Theme.DARK) {
  colorBody.classList.add("dark-theme");
  tem.checked = true;
 }
 if (localStorage.getItem('Theme') === Theme.LIGHT) {
  colorBody.classList.add("light-theme");
  tem.checked = false;
 }


 tem.addEventListener('input',() => {
   if(tem.checked === true){
    colorBody.classList.remove('light-theme')
   colorBody.classList.add('dark-theme')
   localStorage.setItem('Theme', `${Theme.DARK}`)
   }else {
    colorBody.classList.remove('dark-theme')
    colorBody.classList.add('light-theme')
    localStorage.setItem('Theme', `${Theme.LIGHT}`)
   }
 })



const menuItems = menuTemplates(menu);


const menuDishes = document.querySelector('#menu');

menuDishes.insertAdjacentHTML('afterbegin', menuItems);
