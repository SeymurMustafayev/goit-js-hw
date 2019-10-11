// Напиши функцию logItems(array), которая получает массив и использует цикл for, который для каждого элемента массива будет выводить в консоль сообщение в формате [номер элемента] - [значение элемента].

// Нумерация должна начинаться с 1. К примеру для первого элемента массива ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.

// Вызовы функции для проверки работоспособности твоей реализации.

// logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

 const names = (['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
 const numbers = ([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
//    -------------------Вариант-1------------------
// function logItems(array) {
//   for(let i = 0; i < array.length; i += 1 ){
//     console.log(`${i + 1} - ${array[i]}`);   

//   }
// }
// logItems(names);
// logItems(numbers);
// -------------------------Вариант-2-----------------------------

function logItems(array) {
for( const arr of array){
   let x = array.indexOf(arr);
   console.log(`${x + 1} - ${array[x]}`);
}
  
  

return array;
}


logItems(names);
logItems(numbers);