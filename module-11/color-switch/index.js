// Переключатель цветов

// Есть массив цветов в hex-формате и кнопки Start и Stop.

// <button type="button" data-action="start">Start</button>
// <button type="button" data-action="stop">Stop</button>
//  const colors = [

//   '#FFFFFF',
//   '#2196F3',
//   '#4CAF50',
//   '#FF9800',
//   '#009688',
//   '#795548',

// ];
// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет 
// цвет фона body на случайное значение из массива используя инлайн-стиль. 
// При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

// ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай 
// так,чтобы пока изменение темы запушено, кнопка Start была не активна.
// Для генерации случайного числа (индекс элемента массива цветов), 
// используй функцию randomIntegerFromInterval.


// const start = document.querySelector("[data-action= 'start']");
// const stop = document.querySelector("[data-action= 'stop']");
// const body = document.querySelector('body'); 

// let timer;

// start.addEventListener('click', ()=> {
//   start.disabled = true;
//   stop.disabled = false;
//   timer = setInterval(() => {
//     const randomIntegerFromInterval = (min = 0, max = colors.length - 1) => {
//       return Math.floor(Math.random() * (max - min + 1) + min);
//     };
//     body.style.backgroundColor = colors[randomIntegerFromInterval ()]
//   }, 1000);
// })
//    stop.addEventListener('click', () => {
//      clearInterval(timer);
      // stop.disabled = true;
      // start.disabled = false;
      

//    })
  



//    Задание 2

// Перепиши функцию toggleUserState() так, чтобы она не использовала callback-функцию callback, а принимала всего два параметра allUsers и userName и возвращала промис.

// const users = [
//   { name: 'Mango', active: true },
//   { name: 'Poly', active: false },
//   { name: 'Ajax', active: true },
//   { name: 'Lux', active: false },
// ];

// const toggleUserState = (allUsers, userName, callback) => {
//   const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user,
//   );
// return new Promise((resolve)=>resolve(updatedUsers));

//   callback(updatedUsers);
// };

// const logger = updatedUsers => console.table(updatedUsers);

// /*
// // //  * Сейчас работает так
// // //  */
// // // toggleUserState(users, 'Mango', logger);
// // // toggleUserState(users, 'Lux', logger);

// // // /*
// // //  * Должно работать так
// // //  */
// toggleUserState(users, 'Mango').then(logger);
// toggleUserState(users, 'Lux').then(logger);




// Задание 3

// Перепиши функцию makeTransaction() так, чтобы она не использовала 
// callback-функции onSuccess и onError, а принимала всего один параметр
//  transaction и возвращала промис.

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const makeTransaction = (transaction) => {
//   const delay = randomIntegerFromInterval(200, 500);
// return new Promise((resolve, reject) =>{
//   setTimeout(() => {
//     const canProcess = Math.random() > 0.3;

//     if (canProcess) {
//       resolve([transaction.id, delay]);
//     } else {
//       reject(transaction.id);
//     }
//   }, delay);
// });
// };

// const logSuccess = ([id, time]) => {
//   console.log(`Transaction ${id} processed in ${time}ms`);
// };

// const logError = id => {
//   console.warn(`Error processing transaction ${id}. Please try again later.`);
// };

// /*
// //  * Работает так
// //  */
// // makeTransaction({ id: 70, amount: 150 }, logSuccess, logError);
// // makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
// // makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
// // makeTransaction({ id: 73, amount: 100 }, logSuccess, logError);
// // /*
// //  * Должно работать так
// //  */
// makeTransaction({ id: 70, amount: 150 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 71, amount: 230 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 72, amount: 75 })
//   .then(logSuccess)
//   .catch(logError);

// makeTransaction({ id: 73, amount: 100 })
//   .then(logSuccess)
//   .catch(logError);