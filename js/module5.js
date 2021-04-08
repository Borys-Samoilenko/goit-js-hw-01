/*task 1-2
const parent = {
  name: 'Stacey',
  surname: 'Moore',
  age: 54,
  heritage: 'Irish'
};
// Пиши код ниже этой строки

const child = Object.create(parent);

// Пиши код выше этой строки
child.name = 'Jason';
child.age = 27;


console.log(parent.hasOwnProperty('surname'));
*/

/*task 3-4-5
function Car({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}


Car.prototype.getPrice = function () {
  return this.price;
};

Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

console.log(Car.prototype.hasOwnProperty('changePrice'));
*/
/*
function Storage(items){
this.items = items
};
Storage.prototype.getItems = function(){
  return this.items;
};
Storage.prototype.addItem = function(newItem){
  this.items.push(newItem);
};
Storage.prototype.removeItem = function(item){
  this.items.splice(this.items.indexOf(item), 1);
};

// Пиши код выше этой строки
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]
*/


// function StringBuilder (baseValue){
//   this.value = baseValue;
// };

// StringBuilder.prototype.getValue = function (){
//   return this.value;
// };

// StringBuilder.prototype.padEnd = function (str){
//   this.value =  this.value + str;
// };

// StringBuilder.prototype.padStart = function (str){
//   this.value = str + this.value;
// };

// StringBuilder.prototype.padBoth = function (str){
//   this.value = str + this.value + str;
// };

// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='


/*
задача 8
Используя ключевое слово class объяви класс Car с пустым телом.

Тесты
Объявлен класс Car с пустым телом.
Результат вызова new Car() это пустой объект.
*/
/*
class Car {
}; 
*/

/* задача 9 конструктор

class Car {
  brand;
  model;
  price;
  constructor({ brand, model, price }) {
  	this.brand = brand;
  	this.model = model;
  	this.price = price;
  };
};

// 2й вариант записи конструктора
class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}
*/


//задача 10 методы класов 
/*
class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  
  getPrice(){
    return this.price;
  }
  
  changePrice(newPrice){
    this.price = newPrice;
  }
  
}
*/


/*
Инкапсуляция - это концепция позволяющая скрыть внутренние детали класса.
Пользователь класса должен получать доступ только к публичному интерфейсу - набору публичных свойств и методов класса.
В классах инкапсуляция реализуется приватными свойствами, доступ к которым можно получить только внутри класса.
Это одно из отличий классов и функций - конструкторов - в классах легко объявить приватные свойства.
Допустим почта пользователя должна быть недоступна из вне, то есть приватна.
Добавляя к имени свойства символ # мы делаем его приватным.Объявление приватного свойства до инциализации в конструкторе - обязательно.

class User {
  // Необязательное объявление публичных свойств
  name;
  // Обязательное объявление приватных свойств
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  getEmail() {
    return this.#email;
  }

  changeEmail(newEmail) {
    this.#email = newEmail;
  }
}

const mango = new User({ name: 'Манго', email: 'mango@mail.com' });

mango.changeEmail('mango@supermail.com');
console.log(mango.getEmail()); // mango@supermail.com
console.log(mango.#email); // Будет ошибка, это приватное свойство
Методы класса также могут быть приватными, то есть доступны только в теле класса.
Для этого перед их именем необходимо поставить символ #.
*/


/* 
Задание 11
Выполни рефакторинг класса Car так, чтобы свойство brand было приватным и добавь два метода для публичного интерфейса,
для чтения и изменения этого свойства.

getBrand() - возвращает значение приватного свойства brand.
changeBrand(newBrand) - изменяет значение приватного свойства brand на newBrand.
*/
/*
class Car {
  #brand;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }
  
  getBrand() {
    return this.#brand;
  };

  changeBrand(newBrand) {
    this.#brand = newBrand;
  };
  
}
*/


/* warehouse 2.0 task 12

class Storage {
  #items;
  constructor (items) {
  this.#items = items;
  };
  
  getItems () {
    return this.#items;
  };

  addItem (newItem) {
    this.#items.push(newItem);
  };

  removeItem (item) {
    const itemIndex = this.#items.indexOf(item);
    this.#items.splice(itemIndex, 1);
  };
};
// Пиши код выше этой строки
const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem("Дроид");
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem("Пролонгер");
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]
*/

/*
  string builder 2.0

class StringBuilder {
  
  #value;
  
  constructor(baseValue) {
  	this.#value = baseValue;
  };

  getValue () {
    return this.#value;
  };

  padEnd (str) {
    this.#value += str;
  };

  padStart (str) {
    this.#value = str + this.#value;
  };

  padBoth (str) {
   this.padStart(str);
   this.padEnd(str);
  };
};
// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='

*/

/*
Геттеры и сеттеры
Геттеры и сеттеры - это более краткий синтаксис объявления методов для взаимодействия со свойствами.
Геттер и сеттер имитируют обычное публичное свойство класса, но позволяют изменять другие свойства более удобным способом.
Геттер выполняется при попытке получить значение свойства, а сеттер - при попытке его изменить.
Геттеры и сеттеры хорошо использовать для простых операций чтения и изменения значения свойств, особенно приватных,
как их публичный интерфейс.Для работы со свойством которое хранит массив или объект они не подойдут.

class User {
  name;
  #email;

  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }

  // Геттер email
  get email() {
    return this.#email;
  }

  // Сеттер email
  set email(newEmail) {
    this.#email = newEmail;
  }
}
Мы объявили геттер и сеттер email поставив перед именем свойства ключевые слова get и set. 
Внутри этих методов мы или возвращаем значение приватного свойства #email или изменяем его значение. 
Геттер и сеттер идут в паре и должны называться одинаково.

const mango = new User({ name: 'Манго', email: 'mango@mail.com' });
console.log(mango.email); // mango@mail.com
mango.email = 'mango@supermail.com';
console.log(mango.email); // mango@supermail.com
При обращении к mango.email вызывается геттер get email() {...} и выполняется его код. 
При попытке записи mango.email = 'mango@supermail.com' вызывается сеттер set email(newEmail) {...} 
и строка 'mango@supermail.com' будет значением параметра newEmail.

Плюс в том, что это методы, а значит при записи можно выполнить дополнительный код, 
например с какими-то проверками, в отличии от выполнениях этой же операции напрямую со свойством.

set email(newEmail) {
  if(newEmail === '') {
    console.log('Ошибка! Почта не может быть пустой строкой!');
    return;
  }

  this.#email = newEmail;
}

*/

/*
Задание 14
Выполни рефакторинг класса Car. Сделай свойства model и price приватными, также как #brand. 
Стандартизируй публичный интерфейс класса заменив уже объявленные методы на геттеры и сеттеры brand, model и price 
для взаимодействия с приватными свойствами.

class Car {
  #model;
  #price;
  #brand;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand () {
    return this.#brand;
  }

  set brand (newBrand) {
    this.#brand = newBrand;
  }

  get model () {
    return this.#model;
  }

  set model (newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price (newPrice) {
    this.#price = newPrice;
  }
}

*/


/*
Статические свойства
Кроме публичных и приватных свойств будущего экземпляра, в классе можно объявить его собственные свойства, 
доступные только классу, но не его экземплярам - статические свойства (static). Они полезны для хранения информации относящейся 
к самому классу.

Добавим классу пользователя приватное свойство type - его тип, определяющий набор прав, 
например администратор, редактор, просто пользователь и т п. Возможные типы пользователей будем хранить как 
статическое свойство TYPES - объект со свойствами.

Статические свойства объявляются в теле класса. Перед именем свойства добавляется ключевое слово static.

class User {
  // Объявление и инициализация статического свойства
  static TYPES = {
    ADMIN: 'admin',
    EDITOR: 'editor',
  };
  #email;
  #type;

  constructor({ email, type }) {
    this.#email = email;
    this.#type = type;
  }

  get type() {
    return this.#type;
  }

  set type(newType) {
    if (User.TYPES[newType] === undefined) {
      console.log('Ошибка! Такого типа пользователя не существет');
      return;
    }

    this.#type = User.TYPES[newType];
  }
}

const mango = new User({
  email: 'mango@mail.com',
  type: User.TYPES.ADMIN,
});

console.log(mango.TYPES); // undefined
console.log(User.TYPES); // { ADMIN: 'admin', EDITOR: 'editor' }

console.log(mango.type); // admin
mango.type = 'editor';
console.log(mango.type); // editor

Статические свойства также могут быть приватные, то есть доступные только внутри класса. 
Для этого имя свойства должно начинаться с символа #, также как приватные свойства. 
Обращение к приватному статическому свойству вне тела класса вызовет ошибку.
*/


/*
Задание 15
Выполни рефакторинг класса Car. Добавь публичное статическое свойство MAX_PRICE со значением 50000 - максимально допустимая цена автомобиля.

Добавь сеттеру price проверку передаваемого значения параметра newPrice. 
Если оно больше чем MAX_PRICE, сеттер ничего не делает, а если меньше или равно, то перезаписывает цену автомобиля.

class Car {
  // Пиши код ниже этой строки
  static MAX_PRICE = 50000;
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    
    if (newPrice > Car.MAX_PRICE){
      return;
    } if (this.#price <= newPrice){
      return this.#price = newPrice;
    };
  };
  // Пиши код выше этой строки
};

const audi = new Car({price: 35000});
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000
*/

/*
Статические методы
В классе можно объявить не только методы будущего экземпляра, но и методы доступные только классу - статические методы, 
которые могут быть как публичные, так и приватные. Синтаксис объявления аналогичен статическим свойствам, за исключением того, 
что значением будет метод.

class User {
  static #takenEmails = [];

  static isEmailTaken(email) {
    return User.#takenEmails.includes(email);
  }

  #email;

  constructor({ email }) {
    this.#email = email;
    User.#takenEmails.push(email);
  }
}

const mango = new User({ email: 'mango@mail.com' });

console.log(
  User.isEmailTaken('poly@mail.com')
); // false

console.log(
  User.isEmailTaken('mango@mail.com')
); // true

Особенность статических методов в том, что во время их вызова ключевое слово this ссылается на сам класс. 
Это значит, что статический метод может получить доступ к статическим свойствам класса, но не к свойствам экземпляра. 
Логично, потому что статические методы вызывает сам класс, а не его экземпляры.
*/

/*
Задание 16
Добавь классу Car публичный статический метод checkPrice(price), принимающий цену автомобиля. 
Метод должен сравнить значения параметра price и приватного статического свойства MAX_PRICE.

Если цена автомобиля превышает максимальную, метод должен вернуть строку 'Внимание! Цена превышает допустимую.'.
В противном случае метод должен вернуть строку 'Всё хорошо, цена в порядке.'.
Под объявлением класса мы добавили инициализацию экземпляра и вызовы методов, чтобы показать как будет 
использоваться метод checkPrice(price).



class Car {
  static #MAX_PRICE = 50000;
  // Пиши код ниже этой строки

  static checkPrice(price){
    if (Car.#MAX_PRICE < price) {
      return `Внимание! Цена превышает допустимую.`;
    } else {
      return `Всё хорошо, цена в порядке.`;
    };
  };

  // Пиши код выше этой строки
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

*/


/*
Наследование классов
Ключевое слово extends позволяет реализовать наследование классов, когда один класс (дочерний, производный) наследует свойства 
и методы другого класса (родителя). В выражении class Child extends Parent дочерний класс Child наследует (расширяет) 
от родительского класса Parent.

Это означает, что мы можем объявить базовый класс, который хранит общие характеристики и методы для группы производных классов, 
которые наследуют свойства и методы родителя, но также добавляют свои уникальные.

Например, в приложении есть пользователи разных типов - администратор, писатель статей, контент менеджер и т. п. 
У каждого типа пользователя есть набор общих характеристик, например почта и пароль, но также есть и уникальные.

Сделав независимые классы для каждого типа пользователя мы получим дублирование общих свойств и методов, 
и при необходимости изменить, например, название свойства, придётся проходить по всем классам, это неудобно и трудозатратно.

Вместо этого можно сделать общий класс User, который будет хранить набор общих свойств и методов, 
после чего сделать классы для каждого типа пользователя, которые наследуют этот набор от класса User. При необходимости изменить что-то общее, достаточно будет поменять только код класса User.

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class ContentWriter extends User {
  // Тело класса ContentWriter
}

const writer = new ContentWriter('mango@mail.com');
console.log(writer); // { email: 'mango@mail.com' }
console.log(writer.email); // 'mango@mail.com'

Класс ContentWriter наследует от класса User его конструктор, геттер и сеттер email, а также одноимённое публичное свойство. 
Важно помнить, что приватные свойства и методы класса-родителя не наследуются классом-ребёнком.

*/

/*
Задание 17
В приложении нужен администратор с возможностью добавлять почты пользователей в чёрный список.

Объяви класс Admin, который наследует от класса User.
Добавь классу Admin публичное статическое свойство AccessLevel (уровень доступа), з
начение которого это объект { BASIC: 'basic', SUPERUSER: 'superuser' }.

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
// Пиши код ниже этой строки
class Admin extends User {
  static AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' };
};

console.log(Admin.AccessLevel.SUPERUSER);

*/


/*
Конструктор дочернего класса
Первым делом в конструкторе дочернего класса необходимо вызвать специальную функцию super(аргументы) - 
это псевдоним конструктора родительского класса. В противном случае, при попытке обратиться к this в конструкторе дочернего клаcса, 
будет ошибка. При вызове конструктора класса родителя передаём необходимые ему аргументы для инициализации свойств.

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class ContentWriter extends User {
  posts;

  constructor({ email, posts }) {
    // Вызов конструктора родительского класса User
    super(email);
    this.posts = posts;
  }
}

const writer = new ContentWriter({ email: 'mango@mail.com', posts: [] });
console.log(writer); // { email: 'mango@mail.com', posts: [] }
console.log(writer.email); // 'mango@mail.com'

*/
/*
Задание 18
Добавь классу Admin метод constructor, который принимает один параметр - объект настроек с двумя свойствами email и accessLevel. 
Добавь классу Admin публичное свойсво accessLevel, значение которого будет передаваться при вызове конструктора.

Чтобы показать как будет использоваться класс Admin, мы добавили инициализацию экземпляра под объявлением класса.


class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  // Пиши код ниже этой строки
  accessLevel;
  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };
  
  constructor ({email, accessLevel}) {
    super(email);
    this.accessLevel = accessLevel;
  };

  // Пиши код выше этой строки
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser

*/


/*
Методы дочернего класса
В дочернем классе можно объявлять методы которые будут доступны только его экземплярам.

// Представим что выше есть объявление класса User

class ContentWriter extends User {
  posts;

  constructor({ email, posts }) {
    super(email);
    this.posts = posts;
  }

  addPost(post) {
    this.posts.push(post);
  }
}

const writer = new ContentWriter({ email: 'mango@mail.com', posts: [] });
console.log(writer); // { email: 'mango@mail.com', posts: [] }
console.log(writer.email); // 'mango@mail.com'
writer.addPost('post-1');
console.log(writer.posts); // ['post-1']

*/
/*
Задание 19
Добавь классу Admin следующие свойства и методы.

Публичное свойство blacklistedEmails для хранения чёрного списка почтовых адресов пользователей. 
Значение по умолчанию это пустой массив.

Публичный метод blacklist(email) для добавления почты в чёрный список. 
Метод должен добавлять значение параметра email в массив хранящийся в свойстве blacklistedEmails.

Публичный метод isBlacklisted(email) для проверки почты в чёрном списке. Метод должен проверять наличие значения параметра email 
в массиве хранящемся в свойстве blacklistedEmails и возвращать true или false.
После объявления класса мы добавили инициализацию экземпляра и вызовы методов в той последовательности, 
в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.


class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}
class Admin extends User {
  // Пиши код ниже этой строки
  blacklistedEmails = [];
  
  blacklist(email) {
    this.blacklistedEmails.push(email);
  };
  
  isBlacklisted(email){
    return this.blacklistedEmails.includes(email);
  };
  
  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser'
  };

  accessLevel;

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }

  // Пиши код выше этой строки
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser
mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // 'poly@mail.com'
console.log(mango.isBlacklisted('mango@mail.com')); //  false
console.log(mango.isBlacklisted('poly@mail.com')); // true 

*/
