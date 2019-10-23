// Задание 7

// Напиши скрипт, который реагирует на изменение значения 
// input#font-size-control (событие input) и изменяет инлайн-стиль 
// span#text обновляя свойство font-size. В результате при перетаскивании
//  ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>


const valInput = document.getElementById('font-size-control');
const valTex = document.getElementById('text');

valInput.addEventListener('input', function(){
  valTex.style.fontSize =`${valInput.value}px`
}
)