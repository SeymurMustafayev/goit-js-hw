// Задание 6

// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его 
// содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте 
// data-length.
// Если введено подходящее количество, то border инпута становится зеленым, 
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const input = document.getElementById('validation-input');
input.addEventListener('input',() =>{
  if(input.value.length === 6){
    input.classList.remove('invalid');
    input.classList.add('valid');
  }else{
    input.classList.add('invalid');
  }
  });
