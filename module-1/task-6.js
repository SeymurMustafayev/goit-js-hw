// Напиши скрипт который просит посетителя ввести число в prompt до тех пор, пока посетитель на нажмет Cancel и каждый раз добавляет введенное значение к общей сумме.

// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод добавляется к значению переменной total.
// Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel в prompt.
// После того как пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой 'Общая сумма чисел равна [сумма]'.

let total = 0;
let userInput;

while (userInput !== null) {
  userInput = prompt("Введите число!");
  if(userInput !== null) {
    const num = Number(userInput)
    if (num) {
      total += num;
    } else  {
      alert("Было введено не число, попробуйте еще раз");
    }
  }
   
}
alert(`Общая сумма чисел равна  ${total} `);
