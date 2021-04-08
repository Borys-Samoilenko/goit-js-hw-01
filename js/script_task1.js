// const userName = 'Mango';
// console.log(userName);

// function makeMessage(name, price) {
//     const message = `Вы выбрали ${name}, цена за штуку ${price} кредитов`;
//     return message;
// };
// console.log(makeMessage('Радар', 6150))
// console.log(makeMessage('Сканер', 3500))
// console.log(makeMessage('Реактор', 8000))
// console.log(makeMessage('Двигатель', 4070))


// function checkStorage(available, ordered) {
//     let message;
//     if (available >= ordered) {
//         message = 'Заказ оформлен, с вами свяжеться менеджер';
//     } else {
//         message = 'На складе недостаточно товаров!';
//     }
//     return message;
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));


// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message;
//     const totalPrice = pricePerDroid * orderedQuantity;
//     if (totalPrice > customerCredits) {
//         message = 'Недостаточно средств на счету!';
//     } else {
//         message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${customerCredits - totalPrice} кредитов`;
//     }
//     return message;
// }
// console.log(makeTransaction(3000, 5, 23000));


// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';
//     let message;

//     if (password === null) {
//         message = 'Отменено пользователем!';
//     } else if (password === ADMIN_PASSWORD) {
//         message = 'Добро пожаловать!';
//     } else {
//         message = 'Доступ запрещен, неверный пароль!';
//     }

//     return message;
// }
// console.log(checkPassword('mangohackzor'));
// console.log(checkPassword(null));
// console.log(checkPassword('polyhax'));
// console.log(checkPassword('jqueryismyjam'));
