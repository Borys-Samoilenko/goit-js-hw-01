// 1задача использование паттерна 
// function checkAge(age) {
//   if (age>=18) { 
//     return 'Вы совершеннолетний человек';
//   }
//   return 'Вы не совершеннолетний человек';
// }
// console.log(checkAge(5));


// задача 2 рефакторинг (паттерн)
// исходник
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   if (password === ADMIN_PASSWORD) {
//     message = 'Добро пожаловать!';
//   } else {
//     message = 'Доступ запрещен, неверный пароль!';
//   }
//   return message;
// }
// console.log(checkPassword());
// рефакторинг
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   if (password === ADMIN_PASSWORD) {
//     return 'Добро пожаловать!';
//   }
//    return 'Доступ запрещен, неверный пароль!';
// }
// console.log(checkPassword('jqueryismyjam'));
// задача 3 исходник
// function checkStorage(available, ordered) {
//   let message;
//   if (ordered === 0) {
//     message = 'В заказе еще нет товаров';
//   } else if (ordered > available) {
//     message = 'Слишком большой заказ, на складе недостаточно товаров!';
//   } else {
//     message = 'Заказ оформлен, с вами свяжется менеджер';
//   }
//   return message;
// }
// console.log(checkStorage());
// рефакторинг
// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return 'В заказе еще нет товаров';
//   }
//   if (ordered > available) {
//     return 'Слишком большой заказ, на складе недостаточно товаров!';
//   }
//   return 'Заказ офрмлен, с вами свяжется менеджер';
// }
// console.log(checkStorage(4, 5));


// задача 4, создание массива
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

// // const firstElement = fruits[0];
// // const secondElement = fruits[1];
// // const lastElement = fruits[3];

// fruits[1] = 'персик';
// fruits[3] = 'банан';

// console.log(fruits);

// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);

// const lastElementIndex = fruits.length - 1;
// // const lastElement = fruits[3]; //другой вариант написания этой строки см запись строки 76
// const lastElement = fruits[lastElementIndex];

// console.log(lastElementIndex);
// console.log(lastElement);

//задача 9