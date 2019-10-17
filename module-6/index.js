import users from './users.js';
console.log('users :', users);

//                       Задание 1

// Получить массив имен всех пользователей (поле name).

// const getUserNames = users => {
//   // твой код
// };

// console.log(getUserNames(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]


//------------- Метод 1--------------------------
// const getUserNames = users =>{
//   const usersArr = users.map(el => el.name);
//   return usersArr;
//--------------Метод 2--------------------------
  // let usersArr = [];
  // users.forEch(el => usersArr.push(el.name));
  // return usersArr;
// }
// console.log(getUserNames(users));
//------------------------------------------------


//                         Задание 2

// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

// const getUsersWithEyeColor = (users, color) => {
//   return users
//   .filter((el) => el.eyeColor ===color)
//   .map((el) => el.name);
// };

// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// --------------------------------------------------


//                          Задание 3

// Получить массив имен пользователей по полу (поле gender).

//  const getUsersWithGender = (users, gender) => {
//    return users
//    .filter((el) => el.gender === gender)
//    .map((el) =>el.name);

//  };

//  console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// -----------------------------------------------------------------
 //                          Задание 4

// Получить массив только неактивных пользователей (поле isActive).

//  const getInactiveUsers = users => {

//     const inactiveUsers = users.filter(user => !user.isActive)
//     .map((el) =>el.name);
//     return inactiveUsers;
    
//  };
//  console.log(getInactiveUsers(users));

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//---------------------------------------------------------------------

//                           Задание 5

// Получить пользоваля (не массив) по email (поле email, он уникальный).

//  const getUserWithEmail = (users, email) => {
//    const user = users
//    .filter((keys) => keys.email === email)
//    .map((el) =>el.name);
//    return user;

//  };

//  console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
//  console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// -------------------------------------------------------------------

//                           Задание 6

// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

// const getUsersWithAge = (users, min, max) => {
//    const user = users
//    .filter((el) => el.age > min && el.age < max)
//    .map((el) => el.name);
//    return user 
//  };

//  console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

//  console.log(getUsersWithAge(users, 30, 40));// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// ----------------------------------------------------------------------

 //                             Задание 7

// Получить общую сумму баланса (поле balance) всех пользователей.

//  const calculateTotalBalance = users => {
//    const user = users
//    .reduce((balance, user) => balance +user.balance, 0)
//    return user;
 

//  };

// console.log(calculateTotalBalance(users)); // 20916

// ----------------------------------------------------------------------

//                              Задание 8
// 
// Массив имен всех пользователей у которых есть друг с указанным именем.
// 1) Короткая запись

// const getUsersWithFriend = (users, friendName) => {
//   const arr = users.filter(el => el.friends.some(friend => friend === friendName)).map(el => el.name);
//   return arr;
// };

// 2) Длинная запись

//  const getUsersWithFriend = (users, friendName) => {
//    return users.filter(el => {
//     return el.friends.some(friend =>{
//       return friend === friendName
      
//     });
//    }).map((el) => el.name);
//   };

//  console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
//  console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// ------------------------------------------------------------------------

//                               Задание 9

// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

//  const getNamesSortedByFriendsCount = users => {
//    const peoples = users 
//    .sort((a, b)=> a.friends.length - b.friends.length)
//    .map(users => users.name)
//    return peoples

//  };

//  console.log(getNamesSortedByFriendsCount(users));
// // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// -------------------------------------------------------------------------

//                                Задание 10

// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

 const getSortedUniqueSkills = users => {
  let resArr = [];
    const newArr = users.map(el => (resArr = [...resArr, ...el.skills]));
    const skillsArr = resArr.filter((item, idx) => {
    return idx === resArr.indexOf(item);
     });
     return skillsArr.sort();
   };
   console.log(getSortedUniqueSkills(users));

// // console.log(getSortedUniqueSkills(users));
//  [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
