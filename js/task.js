// // 1. сделать переменные
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 4;
// let totalSalary = 0;
// // 2. перебрать работников в цикле
// for (let i = 1; i <= employees; i += 1) {
//     // 3. генерируем случайную зп 
//     const salary = Math.round(
//         Math.random() * (maxSalary - minSalary) + minSalary,
//     );
// // 4. логируем зп для каждого работника
//     console.log(`ЗП работника номер ${i} - ${salary}`);
// // 5. прибавляем к тоталу
//     totalSalary += salary;
// }
// // 6. логируем результат задачи
// console.log('totalSalary:', totalSalary);


// /*
// Напиши скрипт который подсчитывает сумму всех четных чисел,
// которые входят в диапазон чисел в переменных от min до max.
// Например, если min=0 и max=5, то диапазон 0-5, и в нем два четных числа - 2 и 4,
// их сумма 6.
// */

// // 1 переменные(вары)
// const min = 5;
// const max = 13;
// let total = 0;

// // // 2 for от min до max с шагом 1
// // for (let i = min; i <= max; i += 1){
// //     console.log(i);

// // // 3 проверяем остаток деления
// //     if (i % 2 === 0) {
// //         console.log('четное:', i);

// //         total += i;
// // }
// // }    
// // //пишем в суммму
// // console.log('total:', total);
// //тоже решение от обратного (от худшего к лучшему) - вариант решения задачи лучше 1го
// for (let i = min; i <= max; i += 1){
//     if (i % 2 !== 0) {
//         console.log('Не четное: ', i);
//         continue;
//     }

//     console.log('четное: ', i);
//     total += i;
// }

// console.log('total: ', total);



// Скрипт обработки покупки в магазине
// let balance = 10000;
// const payment = 2000;

// console.log(`Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету`);

// if (payment <= balance) {
//     console.log('ok');

//     balance -= payment;
//     //balance = balance - payment

//     console.log(`На счету осталось ${balance} кредитов`);
// } else {
//     console.log('На счету недостаточно средств для проведения операции!');  
// }

// console.log('Операция завершена');


// const totalSpent = 20;
// let payment = 500;
// let discount = 0;
// if (totalSpent < 100) {
//     console.log('Не партнер, скидка 0%')
// } else if (totalSpent >= 100 && totalSpent < 1000) {
//     console.log('Бронзовый партнер, скидка 2%');
//     discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//     console.log('Серебрянный партнер, скидка 5%');
//     discount = 0.05;
// } else {
//     console.log('Золотой партнер, скидка 10%')
// }

// console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`,);