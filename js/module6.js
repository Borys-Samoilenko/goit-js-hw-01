/*
Метод forEach(callback)
Перебирающий метод массива, который используется как замена циклов for и for...of при работе с коллекцией.

массив.forEach(function callback(element, index, array) {
  // Тело коллбек-функции
});
Поэлементно перебирает массив.
Вызывает коллбек-функцию для каждого элемента массива.
Ничего не возвращает.
Аргументы коллбек-функции это значение текущего элемента element, его индекс index и сам исходный массив array.
Объявлять можно только те параметры которые нужны, чаще всего это элемент, главное не забывать про их порядок.

const numbers = [5, 10, 15, 20, 25];

// Классический for
for (let i = 0; i < numbers.length; i += 1) {
  console.log(`Индекс ${i}, значение ${numbers[i]}`);
}

// Перебирающий forEach
numbers.forEach(function (number, index) {
  console.log(`Индекс ${index}, значение ${number}`);
});
Единственным случаем, когда стоит использовать циклы for или for...of для перебора массива, 
это задачи с прерыванием выполнения цикла. Прервать выполнение метода forEach нельзя, он всегда перебирает массив до конца.
*/

/*
Задание 1
Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, 
и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.

Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки

  for (let i = 0; i < orderedItems.length; i += 1) {
    totalPrice += orderedItems[i];
  }

  // Пиши код выше этой строки
  return totalPrice;
}

*/
// решение задачи 1
/*
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function (orderedItem) {
    totalPrice += orderedItem;
  });

  return totalPrice;
}
console.log(calculateTotalPrice([2, 4]))
*/

/* 
Задача 2. Фильтрация массива чисел
Задание
Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, 
в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.

Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Пиши код ниже этой строки
  
    for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] > value) {
        filteredNumbers.push(numbers[i]);
      }
    }
  
    // Пиши код выше этой строки
    return filteredNumbers;
  }
*/
//решение задачи 2
/*
function filterArray(numbers, value) {
  const filteredNumbers = [];
    
  
  numbers.forEach(function (number) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });
  
  return filteredNumbers;
};

console.log(filterArray([1, 2, 3, 4, 5], 3));
*/

/*Задача. Общие элементы
Задание
Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины 
в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, 
то есть тех которые есть в обоих массивах.

Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Пиши код ниже этой строки
  
    for (let i = 0; i < firstArray.length; i += 1) {
      if (secondArray.includes(firstArray[i])) {
        commonElements.push(firstArray[i]);
      }
    }
  
    return commonElements;
    // Пиши код выше этой строки
  }
*/
/* решение задачи 3
function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  
  firstArray.forEach(function (ele) {
    if (secondArray.includes(ele)) {
      commonElements.push(ele);
    };
  });

  return commonElements;
};

console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
*/

/*
Стрелочные функции.
Стрелочные функции имеют сокращённый, более лаконичный синтаксис, что уменьшает объем кода, 
особенно когда функция маленькая или если она используется как коллбек.

Все стрелки создаются как функциональное выражение, и если функция не анонимна, то она должна быть присвоена переменной.

// Обычное объявление функции
function classicAdd(a, b, c) {
  return a + b + c;
}

// Тоже самое как стрелочная функция
const arrowAdd = (a, b, c) => {
  return a + b + c;
};
Ключевое слово function не используется, вместо этого сразу идёт объявление параметров, за которыми следует символ => и тело функции.

Если параметров несколько, то они перечисляются через запятую в круглых скобках, между знаками равно = и стрелкой =>.

const add = (a, b, c) => {
  return a + b + c;
};
Если параметр один, его объявление может быть без круглых скобок.

const add = (a) => {
  return a + 5;
};
Если параметров нет, то обязательно должны быть пустые круглые скобки.

const greet = () => {
  console.log('Привет!');
};

// Пиши код ниже этой строки

function calculateTotalPrice(quantity, pricePerItem) {
  // Пиши код выше этой строки
  return quantity * pricePerItem;
}

*/
/* задача 4
const calculateTotalPrice = (quantity, pricePerItem) => {
  return quantity * pricePerItem;
};
console.log(calculateTotalPrice(3, 400)); //1200
*/
/*
Неявный возврат
В стрелочной функции после символа => идёт её тело. Здесь может быть два варианта: с фигурными скобками и без них.

const add = (a, b, c) => {
  console.log(a, b, c);
  return a + b + c;
};
Если фигурные скобки есть, и функция должна возвращать какое-то значение, необходимо явно поставить return. 
Это называется явный возврат (explicit return). Такой синтаксис используется в том случае, если в теле функции нужно выполнить 
ещё какие-то инструкции кроме возврата значения.

const add = (a, b, c) => a + b + c;
Если фигурных скобок нет, то возвращается результат выражения стоящего после =>. Это называется неявный возврат (implicit return). 
В примере вернётся результат выражения сложения параметров a, b и c.

Синтаксис неявного возврата сильно сокращает «шум» объявления функции с телом и возвращаемым выражением, но подходит только в 
случае когда в теле функции не нужно выполнять никаких дополнительных инструкций кроме возврата значения.

// До
function classicAdd(a, b, c) {
  return a + b + c;
}

// После
const arrowAdd = (a, b, c) => a + b + c;


Задание 5
Выполни рефакторинг функции calculateTotalPrice() так, чтобы она использовала неявный возврат.


const calculateTotalPrice = (quantity, pricePerItem) => {
  return quantity * pricePerItem;
};


const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
console.log(calculateTotalPrice(3, 400));
*/

/*
Стрелочные функции как коллбеки
Анонимные стрелочные функции отлично подходят как коллбеки для перебирающих методов массива из-за более краткого синтаксиса объявления, 
особенно если не нужно тело функции.

const numbers = [5, 10, 15, 20, 25];

// Объявление функции
numbers.forEach(function (number, index) {
  console.log(`Индекс ${index}, значение ${number}`);
});

// Анонимная стрелочная функция
numbers.forEach((number, index) => {
  console.log(`Индекс ${index}, значение ${number}`);
});

Стрелочную коллбек-функцию также можно объявлять отдельно и передавать на неё ссылку. 
Это стоит делать если одна функция используется в нескольих местах программы или если она громоздкая.

const numbers = [5, 10, 15, 20, 25];

const logMessage = (number, index) => {
  console.log(`Индекс ${index}, значение ${number}`);
};

numbers.forEach(logMessage);

Заданиеn 6
Выполни рефакторинг функции calculateTotalPrice(orderedItems) заменив её объявление на стрелочную функцию. 
Замени коллбек-функцию передаваемую в метод forEach() на стрелочную функцию.

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;

  orderedItems.forEach(function (item) {
    totalPrice += item;
  });

  return totalPrice;
}
*/
/*
const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
};

console.log(calculateTotalPrice([12, 85, 37, 4]));
*/

/* Задача 7. Фильтрация массива чисел 2.0
Задание
Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.
function filterArray(numbers, value) {
    const filteredNumbers = [];
  
    numbers.forEach(function (number) {
      if (number > value) {
        filteredNumbers.push(number);
      }
    });
  
    // Пиши код выше этой строки
    return filteredNumbers;
  }

*/
/*
const filterArray = (numbers, value) => {
    const filteredNumbers = [];
  
    numbers.forEach((number) => {
      if (number > value) {
        filteredNumbers.push(number);
      }
    });
  
  return filteredNumbers;
};

console.log(filterArray([1, 2, 3, 4, 5], 3));
*/

/* задача 8 
const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];
  
  firstArray.forEach((element) => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });
  return commonElements;
}
*/

/*
Чистые функции
Функция с побочными эффектами - это функция которая в процессе выполнения может изменять или использовать глобальные переменные, 
изменять значение аргументов ссылочного типа, выполнять операции ввода-вывода и т. п.

const dirtyMultiply = (array, value) => {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = array[i] * value;
  }
};

const numbers = [1, 2, 3, 4, 5];
dirtyMultiply(numbers, 2);
// Произошла мутация исходных данных - массива numbers
console.log(numbers); // [2, 4, 6, 8, 10]
Функция dirtyMultiply(array, value) умножает каждый элемент массива array на число value. Она изменяет (мутирует) исходный массив по ссылке.

Чистая функция (pure function) - это функция результат которой зависит только от значений переданных аргументов. 
При одинаковых аргументах она всегда возвращает один и тот же результат и не имеет побочных эффектов, 
то есть не изменяет значения аргументов.

Напишем реализацию чистой функции умножения элементов массива, возвращающей новый массив, не изменяя исходный.

const pureMultiply = (array, value) => {
  const newArray = [];

  array.forEach(element => {
    newArray.push(element * value);
  });

  return newArray;
};

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = pureMultiply(numbers, 2);

// Не произошло мутации исходных данных
console.log(numbers); // [1, 2, 3, 4, 5]
// Функция вернула новый массив с изменёнными данными
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
Задание
Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число,
добавляя к нему значение параметра value.

function changeEven(numbers, value) {
   
    for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] % 2 === 0) {
        numbers[i] = numbers[i] + value;
      }
    }
  
};

Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, 
а создавала, наполняла и возвращала новый массив с обновлёнными значениями.

function changeEven(numbers, value) {

  const newChangeEven = [];

  numbers.forEach((number) => {
    if (number % 2 === 0) {
      newChangeEven.push(number + value);
    } else newChangeEven.push(number);
  });


};
*/

/*
Метод map()
Большинство перебирающих методов массива это чистые функции. Они создают новый массив, заполняют его, 
применяя к значению каждого элемента указанную коллбек-функцию, после чего возвращают этот новый массив.

Метод map(callback) используется для трансформации массива. Он вызывает коллбек-функцию для каждого элемента исходного массива, 
а результат её работы записывает в новый массив, который и будет результатом выполнения метода.

массив.map((element, index, array) => {
  // Тело коллбек-функции
});
Поэлементно перебирает оригинальный массив.
Не изменяет оригинальный массив.
Результат работа коллбек-функции записывается в новый массив.
Возвращает новый массив такой же длины.
Его можно использовать для того, чтобы изменить каждый элемент массива. Оригинальный массив используется как эталон, 
на базе которого можно сделать другую коллекцию.

const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];

const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПИТЕР']

const planetsInLowerCase = planets.map((planet) => planet.toLowerCase());
console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпитер']

// Оригинальный массив не изменился
console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпитер']
Использование анонимных стрелочных функций с неявным возвратом сильно сокращает «шум» объявления коллбек-функции, 
делая код чище и проще для восприятия.

Задание
Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. Обязательно используй метод map().


const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
const planetsLengths = planets.map(planet => planet.length);
console.log(planetsLengths);
*/

/*
Метод map() и массив объектов
Мы уже знаем что повседневная задача это манипуляция массивом объектов. Например, получить массив значений свойства из всех объектов. 
Есть массив студентов, а нужно получить отдельный массив их имён.

const students = [
  { name: 'Манго', score: 83 },
  { name: 'Поли', score: 59 },
  { name: 'Аякс', score: 37 },
  { name: 'Киви', score: 94 },
  { name: 'Хьюстон', score: 64 }
];

const names = students.map(student => student.name);
console.log(names); // ['Манго', 'Поли', 'Аякс', 'Киви', 'Хьюстон']
Используя метод map() можно перебрать массив объектов, и в коллбек-функции вернуть значение свойства каждого из них.

Задание
Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг 
(свойство title) из всех объектов массива books.
*/
/*
const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
  ];
  
  
const titles = books.map(book => book.title);
console.log(titles);
*/

/*
Метод flatMap()
Метод flatMap(callback) аналогичен методу map(), но применяется в случаях, когда результат это 
многомерный массив который необходимо «разгладить».

массив.flatMap((element, index, array) => {
  // Тело коллбек-функции
});

В массиве students хранится список студентов со списком предметов, которые посещает студент, 
в свойстве courses. Несколько студентов могут посещать один и тот же предмет. Необходимо составить список всех предметов, 
которые посещает эта группа студентов, пока даже повторяющихся.

const students = [
  { name: 'Манго', courses: ['математика', 'физика'] },
  { name: 'Поли', courses: ['информатика', 'математика'] },
  { name: 'Киви', courses: ['физика', 'биология'] },
];

students.map((student) => student.courses);
// [['математика', 'физика'], ['информатика', 'математика'], ['физика', 'биология']]

students.flatMap((student) => student.courses);
// ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];

Он вызывает коллбек-функцию для каждого элемента исходного массива, 
а результат её работы записывает в новый массив. Отличие от map() в том, что новый массив «разглаживается» 
на глубину равную единице (одна вложенность). Этот разглаженный массив и есть результат работы flatMap().

Задание
Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг (свойство genres) из массива книг books.
*/
/*
const books = [
    {
      title: 'Последнее королевство',
      author: 'Бернард Корнуэлл',
      genres: ['приключения', 'историческое']
    },
    {
      title: 'На берегу спокойных вод',
      author: 'Роберт Шекли',
      genres: ['фантастика']
    },
    {
      title: 'Красна как кровь',
      author: 'Ли Танит',
      genres: ['ужасы', 'мистика']
    }
  ];

  
const genres = books.flatMap((book) => book.genres);


console.log(genres);
*/
/*
Задача 13. Имена пользователей

Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

[
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

/*
Задание
Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей (свойство name) 
из массива объектов в параметре users.

const getUserNames = users => {
  const userNames = users.map((user) => user.name)
    
  return userNames
};
*/
/*
const getUserEmails = users => {
  const userEmail = users.map((user) => user.email);

  return userEmail;
    
};
*/

/*
Методы filter и find
Метод filter(callback) используется для единственной операции - фильтрации массива, то есть когда необходимо выбрать 
более одного элемента из коллекции по какому-то критерию.

массив.filter((element, index, array) => {
  // Тело коллбек-функции
});
Не изменяет оригинальный массив.
Поэлементно перебирает оригинальный массив.
Возвращает новый массив.
Добавляет в возвращаемый массив элементы которые удовлетворяют условию коллбек-функции.
Если коллбек вернул true элемент добавляется в возвращаемый массив.
Если коллбек вернул false элемент не добавляется в возвращаемый массив.
Если ни один элемент не удовлетворил условию, возвращает пустой массив.
const values = [51, -3, 27, 21, -68, 42, -37];

const positiveValues = values.filter(value => value >= 0);
console.log(positiveValues); // [51, 27, 21, 42]

const negativeValues = values.filter(value => value < 0);
console.log(negativeValues); // [-3, -68, -37]

const bigValues = values.filter(value => value > 1000);
console.log(bigValues); // []

// Оригинальный массив не изменился
console.log(values); // [51, -3, 27, 21, -68, 42, -37]
То есть метод filter вызывает коллбек-функцию для каждого элемента исходного массива и если результат её выполнения true, 
текущий элемент добавляет в новый массив.

Задание
Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers, 
а в переменной oddNumbers массив нечётных. Обязательно используй метод filter().
*/

/*
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);
const oddNumbers = numbers.filter(number => number % 2 === 1);
console.log(oddNumbers);
*/

/*
Фильтрация уникальных элементов
Используя метод filter() можно выполнить фильтрацию массива так, что в нём останутся только уникальные элементы. 
Этот приём работает только с массивом примитивных значений - не объектов.

Вернёмся к группе студентов и массиву всех посещаемых предметов, которые мы получили методом flatMap().

const students = [
  { name: 'Манго', courses: ['математика', 'физика'] },
  { name: 'Поли', courses: ['информатика', 'математика'] },
  { name: 'Киви', courses: ['физика', 'биология'] }
];

const allCourses = students.flatMap(student => student.courses);
// ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];

В переменной allCourses хранится массив всех посещаемых предметов, которые могут повторяться. 
Задача заключается в том, чтобы сделать новый массив, в котором будут только уникальные предметы, то есть без повторений.

const uniqueCourses = allCourses.filter(
  (course, index, array) => array.indexOf(course) === index
);
Используя array.indexOf(course) выполняем поиск первого совпадения текущего элемента course и 
получаем его индекс в оригинальном массиве всех курсов. В параметре index хранится индекс текущего элемента course 
при переборе массива методом filter.

Если результат indexOf() и значение index равны - это уникальный элемент, потому что это первый раз когда такое значение 
встречается в массиве и на текущей итерации фильтр обрабатывает именно его.

# Массив всех курсов
['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];
Для элемента 'математика' под индексом 0:

indexOf() вернёт 0, потому что ищет первое совпадение.
Значение параметра index будет 0.
Они равны, значит это уникальный элемент.
Для элемента 'математика' под индексом 3:

indexOf() вернёт 0, потому что ищет первое совпадение.
Значение параметра index будет 3.
Они не равны, значит это повторяющийся - не уникальный элемент.

Задание
Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres) из массива books, 
а в переменной uniqueGenres массив уникальных жанров - без повторений.
*/
/*
const books = [
  {
    title: 'Последнее королевство',
    author: 'Бернард Корнуэлл',
    genres: ['приключения', 'историческое'],
  },
  {
    title: 'На берегу спокойных вод',
    author: 'Роберт Шекли',
    genres: ['фантастика', 'мистика'],
  },
  {
    title: 'Красна как кровь',
    author: 'Ли Танит',
    genres: ['ужасы', 'мистика', 'приключения'],
  },
];

const allGenres = books.flatMap(book => book.genres);
const uniqueGenres = allGenres.filter(
  (genres, index, array) => array.indexOf(genres) === index
);
console.log(allGenres);
console.log(uniqueGenres);
*/

/*
Метод filter() и массив объектов

При работе с массивом объектов выполняется фильтрация по значению какого-то свойства. 
В результате получается новый массив отфильтрованных объектов.

Например, есть массив студентов с баллами за тест. Необходимо отфильтровать лучших (балл выше 80), 
худших (балл ниже 50) и средних студентов (балл от 50 до 80).

const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const students = [
  { name: 'Манго', score: 83 },
  { name: 'Поли', score: 59 },
  { name: 'Аякс', score: 37 },
  { name: 'Киви', score: 94 },
  { name: 'Хьюстон', score: 64 },
];

const best = students.filter((student) => student.score >= HIGH_SCORE);
console.log(best); // Массив объектов с именами Манго и Киви

const worst = students.filter((student) => student.score < LOW_SCORE);
console.log(worst); // Массив с одним объектом Аякс

// В коллбек-функции удобно деструктуризировать свойства объекта
const average = students.filter(
  ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
);
console.log(average); // Массив объектов с именами Поли и Хьюстон

Задание 17
Используя метод filter() дополни код так, чтобы:

В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating) 
больше либо равно значению переменной MIN_RATING.
В переменной booksByAuthor получился массив книг написанных автором с именем (свойство author) 
которое совпадает со значением в переменной AUTHOR.
*/
/*
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = 'Бернард Корнуэлл';

const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
console.log(topRatedBooks);

const booksByAuthor = books.filter(book => book.author === AUTHOR);
console.log(booksByAuthor);
*/

/*
Задача. Пользователи с цветом глаз
Этот массив объектов мы будем передавать в параметр users при вызове функции из задания.

[
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male'
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female'
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male'
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female'
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male'
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male'
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female'
  }
]
Задание
Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей у которых цвет глаз 
(свойство eyeColor) совпадает со значением параметра color.

const getUsersWithEyeColor = (users, color) => {

  const usersWithEyeColor = users.filter((user) => user.eyeColor === color);
  
  return usersWithEyeColor;
 
};
*/

/*
const getUsersWithAge = (users, minAge, maxAge) => {
  const usersWithAge = users.filter(
    user => user.age >= minAge && user.age <= maxAge,
  );
  return usersWithAge;
};


const getUsersWithAge = (users, minAge, maxAge) => {
  const usersWithAge = users.filter(({ age }) => age >= minAge && age < maxAge);
  return usersWithAge;
};  //второй вариант
*/
/* Задача 20
Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей у
которых есть друг с именем в параметре friendName.
Массив друзей пользователя хранится в свойстве friends.

const getUsersWithFriend = (users, friendName) => {
  const usersWithFriend = users.filter(user =>
    user.friends.includes(friendName),
  );
  return usersWithFriend;
};
*/
/*
Задание 21
Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей(свойство friends).
У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.

const getFriends = users => {
  const allFriends = users.flatMap(user => user.friends);
  const uniqueFriends = allFriends.filter(
    (friends, index, array) => array.indexOf(friends) === index,
  );
  return uniqueFriends;
};
*/

/*
Задание 22
Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, 
значение свойства isActive которых true.
const getActiveUsers = (users) => {

  const activeUsers = users.filter(user => user.isActive === true);
  return activeUsers;
   
};
*/

/*
Задание 23
Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив неактивных пользователей, 
значение свойства isActive которых false.

const getInactiveUsers = (users) => {

  const inactiveUsers = users.filter(user => user.isActive === false);
  return inactiveUsers;

};
*/
/*
Метод find()
Если метод filter(callack) используется для поиска всех элементов удовлетворяющим условию, 
то метод find(callback) позволяет найти и вернуть первый подходящий элемент, после чего перебор массива прекращается. 
То есть он ищет до первого совпадения.

массив.find((element, index, array) => {
  // Тело коллбек-функции
});
Не изменяет оригинальный массив.
Поэлементно перебирает оригинальный массив.
Возвращает первый элемент удовлетворяющий условию, то есть когда коллбек возвращает true.
Если ни один элемент не подошёл, то есть для всех элементов коллбек вернул false, метод возвращает undefined.
Метод find() используется для одной задачи - поиска элемента по уникальному значению свойства. Например, поиск пользователя по почте, 
автомобиля по серийному номеру, книги по названию и т. п.

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

colorPickerOptions.find((option) => option.label === 'blue'); // { label: 'blue', color: '#2196F3' }
colorPickerOptions.find((option) => option.label === 'pink'); // { label: 'pink', color: '#E91E63' }
colorPickerOptions.find((option) => option.label === 'white'); // undefined

Задание
Используя метод find() дополни код так, чтобы:

В переменной bookWithTitle получился объект книги название которой (свойство title) совпадает со значением переменной BOOK_TITLE.
В переменной bookByAuthor получился объект книги автор который (свойство author) совпадает со значением переменной AUTHOR.
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
];
const BOOK_TITLE = 'Сон смешного человека';
const AUTHOR = 'Роберт Шекли';
// Пиши код ниже этой строки

const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
const bookByAuthor = books.find((book) => book.author === AUTHOR);
*/

/*
Задание 25
Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя,
почта которого(свойство email) совпадает со значением параметра email.

const getUserWithEmail = (users, email) => {
  const userWithEmail = users.find(user => user.email === email);
  return userWithEmail;
};
*/

/*
Метод every()
Метод every(callback) проверяет проходят ли все элементы массива тест предоставляемый коллбек-функцией. Возвращает true или false.

массив.every((element, index, array) => {
  // Тело коллбек-функции
});
Не изменяет оригинальный массив.
Поэлементно перебирает оригинальный массив.
Возвращает true если все элементы массива удовлетворяют условию.
Возвращает false если хотя бы один элемент массива не удовлетворяет условию.
Перебор массива прекращается если коллбек возвращает false.
// Все элементы больше либо равны нулю? - да
[1, 2, 3, 4, 5].every((value) => value >= 0); // true

// Все элементы больше либо равны нулю? - нет
[1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false
При работе с массивом объектов проверяется значение какого-то их свойства.

Задание
Используя метод every() дополни код так, чтобы:

В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.
В переменной eachElementInSecondIsEven был результат проверки всех элементов массива secondArray на чётность.
В переменной eachElementInSecondIsOdd был результат проверки всех элементов массива secondArray на нечётность.
В переменной eachElementInThirdIsEven был результат проверки всех элементов массива thirdArray на чётность.
В переменной eachElementInThirdIsOdd был результат проверки всех элементов массива thirdArray на нечётность.

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const eachElementInFirstIsEven = firstArray.every(element => element % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every(element => element % 2 === 1);

const eachElementInSecondIsEven = secondArray.every(element => element % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every(element => element % 2 === 1);

const eachElementInThirdIsEven = thirdArray.every(element => element % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every(element => element % 2 === 1);
*/
/* Задание 27
Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли пользователи
сейчас активны(свойство isActive) и возвращала true или false.

const isEveryUserActive = (users) => {
  return users.every(user => user.isActive);
};
*/

/*
Метод some()
Метод some(callback) проверяет проходит ли хотя бы один элемент массива тест предоставляемый коллбек-функцией. Возвращает true или false.

массив.some((element, index, array) => {
  // Тело коллбек-функции
});
Не изменяет оригинальный массив.
Поэлементно перебирает оригинальный массив.
Возвращает true если хотя бы один элемент массива удовлетворяет условию.
Возвращает false если ни один элемент массив не удовлетворяет условию.
Перебор массива прекращается если коллбек возвращает true.
// Есть хотя бы один элемент больше либо равный нулю? - да
[1, 2, 3, 4, 5].some(value => value >= 0); // true

// Есть хотя бы один элемент больше либо равный нулю? - да
[-7, -20, 3, -10, -14].some(value => value >= 0); // true

// Есть хотя бы один элемент меньше нуля? - нет
[1, 2, 3, 4, 5].some(value => value < 0); // false

// Есть хотя бы один элемент меньше нуля? - да
[1, 2, 3, -10, 4, 5].some(value => value < 0); // true
Задание 28

Используя метод some() дополни код так, чтобы:

В переменной anyElementInFirstIsEven был результат проверки наличия чётных элементов в массиве firstArray.
В переменной anyElementInFirstIsOdd был результат проверки наличия нечётных элементов в массиве firstArray.
В переменной anyElementInSecondIsEven был результат проверки наличия чётных элементов в массиве secondArray.
В переменной anyElementInSecondIsOdd был результат проверки наличия нечётных элементов в массиве secondArray.
В переменной anyElementInThirdIsEven был результат проверки наличия чётных элементов в массиве thirdArray.
В переменной anyElementInThirdIsOdd был результат проверки наличия нечётных элементов в массиве thirdArray.

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const anyElementInFirstIsEven = firstArray.some(element => element % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some(element => element % 2 === 1);

const anyElementInSecondIsEven = secondArray.some(element => element % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some(element => element % 2 === 1);

const anyElementInThirdIsEven = thirdArray.some(element => element % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(element => element % 2 === 1);
*/

/*
Задание 29
Дополни функцию isAnyUserActive(users) так, чтобы она проверяла наличие активных пользователей(свойство isActive)
и возвращала true или false.

const isAnyUserActive = users => {
  return users.some(user => user.isActive); 
};

*/

/*
Метод reduce()
Метод reduce(callback, initialValue) используется для последовательной обработки каждого элемента массива с сохранением 
промежуточного результата, как аккумулятор. Немного сложнее других в усвоении, но результат стоит того.

массив.reduce((previousValue, element, index, array) => {
  // Тело коллбек-функции
}, initialValue);
Не изменяет оригинальный массив.
Поэлементно перебирает оригинальный массив.
Возвращает что угодно.
Делает что угодно.
Легче всего представить его работу на примере подсчёта суммы элементов массива.

const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

console.log(total); // 32
Первый параметр коллбек-функции (previousValue) это аккумулятор, то есть промежуточный результат. 
Значение которое вернёт коллбек-функция на текущей итерации, будет значением этого параметра на следующей.

Вторым аргументом для reduce() можно передать необязательное начальное значение аккумулятора - параметр initialValue.

# Вначале метод reduce() создаёт внутреннюю переменную-аккумулятор и
# присваивает ей значение параметра initialValue или первого элемента
# перебираемого массива, если initialValue не задан.
previousValue = 0

# Далее коллбек-функция вызывается для каждого элемента массива. Текущее значение
# параметра previousValue это то, что вернула коллбек-функция на прошлой итерации.
Итерация 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
Итерация 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
Итерация 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
Итерация 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
Итерация 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32

# После того как весь массив перебран, метод reduce() возвращает значение аккумулятора.
Результат - 32
То есть метод reduce() используется когда необходимо взять «много» и привести к «одному». 
В повседневных задачах его применение сводится к работе с числами.

Задание 30
Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх. 
Дополни код так, чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes.

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]


const totalPlayTime = playtimes.reduce((previousValue, number) => {
  return previousValue + number
});


const averagePlayTime = totalPlayTime / playtimes.length;

*/

/*
Метод reduce() и массив объектов
При работе с массивом объектов выполняется редуцирование по значению какого - то свойства.
Например, есть массив студентов с баллами за тест.Необходимо получить средний бал.

const students = [
  { name: 'Манго', score: 83 },
  { name: 'Поли', score: 59 },
  { name: 'Аякс', score: 37 },
  { name: 'Киви', score: 94 },
  { name: 'Хьюстон', score: 64 },
];

// Название аккумулятора может быть произвольным, это просто параметр функции
const totalScore = students.reduce((total, student) => {
  return total + student.score;
}, 0);

const averageScore = totalScore / students.length;
Задание
Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока, и получить общую сумму этих времён.
Рассчитать время для каждого из игроков, можно разделив его время(свойство playtime) на количество игр(свойство gamesPlayed).

const players = [
  { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
  { name: 'Поли', playtime: 469, gamesPlayed: 2 },
  { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
  { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame = players.reduce((total, player) => {
  return total + player.playtime / player.gamesPlayed}, 0);

*/
/*
Задание 32
Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму всех средств(свойство balance)
которые хранят пользователи из массива users.

const calculateTotalBalance = users => {
  return users.reduce((total, user) => total + user.balance, 0);
};
*/

/*
Задание
Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала 
общее количество друзей (свойство friends) всех пользователей из массива users.

const getTotalFriendCount = users => {
   return users.reduce((count, user) => user.friends.length + count,0)
};

*/

/*
Метод sort()
Метод sort() сортирует элементы массива, но в отличии от остальных перебирающих методов, он сортирует исходный массив.

Сортирует и изменяет исходный массив.
Возвращает изменённый массив, то есть ссылку на отсортированный исходный.
По умолчанию сортирует по возрастанию.
Сравнение чисел выполняется по их значению.
Сравнение всего остального происходит путём приведения их к строке и сравнения порядковых номеров в таблице Unicode.
// Массив чисел будет отсортирован по возврастанию
const scores = [61, 19, 74, 35, 92, 56];
scores.sort();
console.log(scores); // [19, 35, 56, 61, 74, 92]

// Массив строк сортируется по алфавиту

const students = ['Вика', 'Андрей', 'Олег', 'Юля', 'Борис', 'Катя'];
students.sort();
console.log(students); // [ 'Андрей', 'Борис', 'Вика', 'Катя', 'Олег', 'Юля' ]

// При этом порядковый номер заглавных букв меньше чем у прописных
const letters = ['b', 'B', 'a', 'A', 'c', 'C'];
letters.sort();
console.log(letters); // ['A', 'B', 'C', 'a', 'b', 'c']

Из - за того, что сортируется исходный массив, нарушается принцип чистоты функций и нельзя удобно сделать несколько
производных коллекций на базе исходной.Например, сделать коллекцию отсортированную по возрастанию, а другую по убыванию.
Поэтому перед сортировкой делают полную копию исходного массива и сортируют уже её.

const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = [...scores].sort();

console.log(scores); // [61, 19, 74, 35, 92, 56]
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

Задание 34
Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates,
а в переменной alphabeticalAuthors копия массива имён авторов authors отсортированная в по алфавиту.

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский'
];

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();
*/

/*
Свой порядок сортировки чисел
Для указания своего порядка сортировки методу sort(callback) нужно передать коллбек-функцию с двумя параметрами. 
Это функция сравнения (compare function), порядок сортировки зависит от её результата. Метод sort() будет вызывать её для произвольных двух элементов.

массив.sort((firstEl, secondEl) => {
  // Тело коллбек-функции
});
firstEl - первый элемент для сравнения.
secondEl - второй элемент для сравнения.
Если вызов compareFunction(firstEl, secondEl) возвращает любое отрицательное значение, сортировка поставит firstEl перед secondEl. 
Это сортировка по возрастанию.

const scores = [61, 19, 74, 35, 92, 56];
const ascendingScores = [...scores].sort((a, b) => a - b);
console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]
Если вызов compareFunction(firstEl, secondEl) возвращает любое положительное значение больше нуля, 
сортировка поставит secondEl перед firstEl. Это сортировка по убыванию.

const scores = [61, 19, 74, 35, 92, 56];
const descendingScores = [...scores].sort((a, b) => b - a);
console.log(descendingScores); // [92, 74, 61, 56, 35, 19]
Eсли вызов compareFunction(firstEl, secondEl) вернёт 0, сортировка оставит firstEl и secondEl 
неизменными по отношению друг к другу, но отсортирует их по отношению ко всем другим элементам. 
Но вообще не важно, что возвращать, если их взаимный порядок не имеет значения.

Задание 35
Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания, по её возрастанию или убыванию. 
Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, 
а в переменной descendingReleaseDates копия отсортированная по убыванию.

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

const ascendingReleaseDates = [...releaseDates].sort();
console.log(ascendingReleaseDates);

const descendingReleaseDates = [...releaseDates].sort((a ,b) => b - a);
console.log(descendingReleaseDates);

*/

/*
Свой порядок сортировки строк
Для сортировки строк в алфавитном порядке, по возрастанию или убыванию, используется метод строк localeCompare().

firstString.localeCompare(secondString)
Он вызывается на строке которую нужно сравнить (firstString) с той, что передана ему как аргумент (secondString).

'a'.localeCompare('b'); // -1
'b'.localeCompare('a'); // 1
'a'.localeCompare('a'); // 0
'b'.localeCompare('b'); // 0
Возвращает отрицательное значение если firstString должна быть перед secondString.
Возвращает положительное значение больше нуля если firstString должна быть после secondString.
Если строки одинаковы, возвращается ноль.
Это удобно использовать при сортировке строк, так как метод sort() ожидает такие же значения от коллбек-функции.

const students = ['Вика', 'Андрей', 'Олег', 'Юля', 'Борис', 'Катя'];

const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
console.log(inAlphabetOrder); // ['Андрей', 'Борис', 'Вика', 'Катя', 'Олег', 'Юля']

const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Вика', 'Борис', 'Андрей']

Задание
Онлайн бибилиотеке необходимо отображать книги отсортированные по автору, в алфавитном и обратном алфавитном порядке. 
Дополни код так, чтобы в переменной authorsInAlphabetOrder получилась отсортированная по алфавиту копия массива authors, 
а в переменной authorsInReversedOrder копия отсортированная в обратном алфавитном порядке.

const authors = [
    'Ли Танит',
    'Бернард Корнуэлл',
    'Роберт Шекли',
    'Федор Достоевский',
    'Говард Лавкрафт'
  ];
  
  const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
  console.log(authorsInAlphabetOrder);
  
  const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
  console.log(authorsInReversedOrder);
*/

/*
Сортировка объектов
При работе с массивом объектов сортировка выполняется по числовому или строчному значению какого-то свойства. Например, есть группа студентов с баллами за тест. Необходимо отсортировать массив объектов по возрастанию и убыванию количества баллов, и по имени студента.

const students = [
  { name: 'Манго', score: 83 },
  { name: 'Поли', score: 59 },
  { name: 'Аякс', score: 37 },
  { name: 'Киви', score: 94 },
];

const inAscendingScoreOrder = students.sort(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);

const inDescendingScoreOrder = students.sort(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
);

const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
  firstStudent.name.localeCompare(secondStudent.name)
);
Задание
Дополни код так, чтобы:

В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в алфавитном порядке.
В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора в обратном алфавитном порядке.
В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];

const sortedByAuthorName = [...books].sort((firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author));

const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) => secondBook.author.localeCompare(firstBook.author));

const sortedByAscendingRating = [...books].sort((firstBook, secondBook) => firstBook.rating - secondBook.rating);

const sortedByDescentingRating = [...books].sort((firstBook, secondBook) => secondBook.rating - firstBook.rating);

*/

/*задача 38
const sortByAscendingBalance = users => {
  return [...users].sort(
    (firstUser, secondUser) => firstUser.balance - secondUser.balance,
  );
};
*/
/* 39
const sortByDescendingFriendCount = users => {
  return [...users].sort(
    (firstUser, secondUser) =>
      secondUser.friends.length - firstUser.friends.length,
  );
};
*/

/* 40
const sortByName = users => {
  return [...users].sort((firstUser, secondUser) =>
    firstUser.name.localeCompare(secondUser.name),
  );
};
*/

/*
Цепочки методов (чейнинг, chaining)
Есть массив объектов с именами, баллами и посещаемыми предметами каждого студента.

const students = [
  { name: 'Манго', score: 83, courses: ['математика', 'физика'] },
  { name: 'Поли', score: 59, courses: ['информатика', 'математика'] },
  { name: 'Аякс', score: 37, courses: ['физика', 'биология'] },
  { name: 'Киви', score: 94, courses: ['литература', 'информатика'] },
];

Необходимо получить массив их имён отсортированный по возрастанию баллов за тест. 
Для этого мы отсортируем копию массива методом sort(), после чего методом map() составим массив значений свойства name 
из сортированного массива.

const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
const names = sortedByAscendingScore.map((student) => student.name);

console.log(names); // ['Аякс', 'Поли', 'Манго', 'Киви']
Проблема в том, что у нас появляются промежуточные переменные после каждой операции кроме финальной. 
Переменная sortedByAscendingScore лишняя и необходима только для хранения промежуточного результата.

Избавиться от таких «мёртвых» переменных можно группируя вызовы методов в цепочки. 
Каждый следующий метод будет выполняться на результате работы предыдущего.

const names = [...students]
  .sort((a, b) => a.score - b.score)
  .map((student) => student.name);

console.log(names); // ['Аякс', 'Поли', 'Манго', 'Киви']
Делаем копию исходного массива перед сортировкой.
На копии вызываем метод sort().
К результату работы метода sort() применяем метод map().
Переменной names присваивается результат работы метода map().

Получим сортированный по алфавиту массив уникальных посещаемых предметов.

const uniqueSortedCourses = students
  .flatMap((student) => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .sort((a, b) => a.localeCompare(b));

console.log(uniqueSortedCourses); // ['биология', 'информатика', 'литература', 'математика', 'физика']

На исходном массиве вызываем flatMap() и делаем разглаженный массив всех курсов.
К результату метода flatMap() применяем метод filter() для фильтрации уникальных элементов.
На результате метода filter() вызываем sort().
Переменной uniqueSortedCourses присваивается результат работы метода sort().
Цепочка методов может быть произвольной длины, но обычно не более 2-3 операций.

Во-первых, перебирающие методы используются для сравнительно простых операций над коллекцией. 
Во-вторых, вызов каждого последующего метода, это дополнительный перебор массива, что при достаточном количестве, 
может сказаться на производительности.

Задание
Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке, 
рейтинг книг которых больше значения переменной MIN_BOOK_RATING.


const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
  { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 },
];
const MIN_BOOK_RATING = 8;
// Пиши код ниже этой строки

const names = [...books]
  .filter(book => book.rating > MIN_BOOK_RATING)
  .map(book => book.author)
  .sort();
console.log(names);
*/

/* 42 Задание
Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён пользователей 
отсортированный по возрастанию количества их друзей (свойство friends).

const getNamesSortedByFriendCount = users => {
   return [...users]
  	.sort((firstUser, secondUser) => firstUser.friends.length - secondUser.friends.length)
  	.map(user => user.name);
};
*/

/*Задание 43
Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей (свойство friends) 
отсортированный по алфавиту .

const getSortedFriends = users => {
  return [...users]
    .flatMap(user => user.friends)
    .filter((friends, index, array) => array.indexOf(friends) === index)
    .sort((firstFriendName, secondFriendName) =>
      firstFriendName.localeCompare(secondFriendName),
    );
};

*/

/* 44
Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий 
баланс пользователей (свойство balance), пол которых (свойство gender) совпадает со значением параметра gender.

const getTotalBalanceByGender = (users, gender) => {
   return [...users]
  		.filter(user =>user.gender === gender)
  		.reduce((total, user) => total + user.balance,0)
};
*/
