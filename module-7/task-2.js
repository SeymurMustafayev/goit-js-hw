// Напиши скрипт, который для каждого элемента массива ingredients создаст 
// отдельный li, после чего вставит все li за одну операцию 
// в список ul.ingredients. 
// Для создания DOM-узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// const ingredientsItems = document.querySelector ('#ingredients');

// const  fragment = document.createDocumentFragment();

// console.log('ingredientsItems', ingredientsItems);


// ingredients.forEach(el =>{
//    console.log('el', el);
   
//    const newLi = document.createElement('li');
//    newLi.textContent = el;
//    ingredientsItems.append(newLi);

//  });

//  ingredientsItems.appendChild(fragment);

let sum = '';
const ingredientsItems = document.querySelector ('#ingredients');
ingredients.forEach(el =>{
  sum += `<li> ${el} <li/>`;})
  ingredientsItems.insertAdjacentHTML('afterbegin', sum);
   

 
 
 

