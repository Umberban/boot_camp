"use strict";

// // Vovan, [16.03.19 15:46]
// // Part 1
// // Створити конструктор Book який створює обєкти такого типу {title: title, author:author, pages: pages, price: price, curentPage: 0};
// function Book ({title: title, author:author, pages: pages, price: price, curentPage: min}){
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.price = price;
//     this.curentPage = min;
//     // Помістити в прототип метод  buy(arr) який приймає аргументом масив order додає ціну книжки в нього.
//     this.buy = function(arr) {
//         return arr.push(this.price);
//     };
//     // Помістити в прототип метод read(num) який приймає аргументом кількість сторінок що прочитано і змінює значення поля curentPage;
//     this.read = function(num){
//         return this.curentPage = num;
//     };
// }
// // Створити 3 обєкта книжки викликати для них методи buy() та read(num);
// let order = [];
// const hero = new Book({title: "Hello World", author:"Gregory", pages: 300, price: 100, curentPage: 0}) ;
// hero.buy(order);
// hero.read(100);
// const world = new Book({title: "Hello World", author:"Max", pages: 500, price: 900, curentPage: 0}) ;
// world.buy(order);
// world.read(90);
// const hello = new Book({title: "Hello World", author:"Alex", pages: 300, price: 500, curentPage: 0}) ;
// hello.buy(order);
// hello.read(212);
// console.log(hero);
// // Порахувати загальну вартість замовлення з масива order.
// let sumOrder = order.reduce((acc,el) => acc + el,0);
// console.log(order);
// console.log(sumOrder);
// // Вивести в консоль змінене значення поля curentPage після запуску методів read(num); 
//     console.log("current Page of 'hero' = ",hero.curentPage);
//     console.log("current Page of 'world' = ",world.curentPage);
//     console.log("current Page of 'hello' = ",hello.curentPage);
// //  Part 2
// // Створити ф-ю конструктор E-Book який наслідує всі властивості консруктора Book і додає до обєкта книги додаткове поле fileSize де вказується розмір книги в кілобайтах.
// function E_Book ({title: title, author:author, pages: pages, price: price, curentPage: min,fileSize: fileSize}){
//     Book.call(this, {title, author, pages, price , min});

//     this.fileSize = fileSize;
//     // Додати в прототип E-Book метод download() який при виклику виводить в консоль напис 'Book {title} has been dowloaded, app was downloaded {fileSize} kb';
//     this.download = function() {
//         return `Book ${title} has been dowloaded, app was downloaded ${this.fileSize} kb`;
//     };

// }

// E_Book.prototype =  Object.create(Book.prototype);
// E_Book.prototype.constructor = E_Book;



// // Створити 2 книги конструктором E-Book і викликати для них метод buy(arr) щоб додати їх до масиву order.
// // Викликати для них метод download()
//     const nagan = new E_Book({title: "Bang Bang", author:"Gregory", pages: 300, price: 300, curentPage: 0, fileSize: 125}) ;
// nagan.buy(order);
// nagan.read(56);
// console.log(nagan.download());
// const bottle = new E_Book({title: "La LA la", author:"Max", pages: 500, price: 200, curentPage: 0, fileSize: 150}) ;
// bottle.buy(order);
// bottle.read(17);
// console.log(bottle.download());
// console.log(order);
// console.log(nagan.curentPage);
// console.log(bottle.curentPage);

// // Part 3 
// // Створити корструктор PapperBook який наслідує всі властивості консруктора Book і додає до обєкта книги додаткове поле cover.
// function PapperBook({title: title, author:author, pages: pages, price: price, curentPage: min, cover : cover}) {
//     Book.call(this, {title, author, pages, price , min});
//     this.cover = cover;
//     // Додати в прототип PapperBook метод burn(arr) який приймає аргументом масив books з частини №1 при виклику виводить в консоль напис 'Book {title} has been burned' і видаляє з масива order ту книгу для якої викликаємо цей метод.
//     this.burn = function(arr){
//         let ash = arr.filter((el) => this.price === el).forEach(el => arr.splice(arr.indexOf(el),1));
//         console.log(`Book ${this.title} has been burned`);
//     };
// }
// PapperBook.prototype =  Object.create(Book.prototype);
// PapperBook.prototype.constructor = PapperBook;

// // Створити 3 книги конструктором PapperBook і викликати для них метод buy(arr) щоб додати їх до масиву order.
// // Викликати для першої і другої книги методи burn(arr), щоб видатити їх з масива books
// const helicopter = new PapperBook({title: "Holly", author:"Gregory", pages: 300, price: 300, curentPage: 0, cover: "plastic"}) ;
// helicopter.buy(order);
// helicopter.burn(order);
// console.log(order);
// const bable = new PapperBook({title: "Pray", author:"Max", pages: 500, price: 200, curentPage: 0, cover: "carton"}) ;
// bable.buy(order);
// bable.burn(order);
// console.log(order);

// Vovan, [16.03.19 15:47]
// Написати калькулятор за допомогою ф-ї конструктора. Ця ф-я створює обєкт з  методами read(), sum(), mul(), addMethod(name, function);
// function Calc(){
//     // Метод read() запитує в користувача числа за допомогою prompt і запамятовує їх.
//     // Метод read() працює до тих пір поки користувач не натисне Cancel;
//     this.arr = [];
//         this.read = function (){
//             let ask;
//             while(ask !== null){
//                 ask = prompt("Enter a number");
//                 if(Number(ask) > 0){
//                 this.arr.push(Number(ask));
//                 }
//             } 
//             return this.arr;
//         };

//         // Метод sum() виводить в консоль суму всіх чисел що ввели в процесі роботи метода read().
//         this.sum = function(){
//           let sum = this.arr.reduce((acc,el) => acc + el,0);
//           return sum;
//         } ;
//         // mul() виводить в консоль добуток всіх чисел.
//         this.mul = function(){
//             let mult = this.arr.reduce((acc, el) => acc * el,1);
//             return mult;

//         };

//         // Метод addMethod(name, function) вчить калькулятор нової операції. 
//         // параметр name - назва нового метода
//         // параметр function - код нового метода.
//         this.addMethod = function(name ,func){
//             Calc.prototype.name = func;
//         };
//     }

//     const calculator = new Calc();
//     calculator.read();
//     console.log(calculator.arr);

//     console.log(calculator.sum());
//     console.log(calculator.mul());
//     // За допомогою метода addMethod(name, function) додати в калькулятор новий функціонад який буде знаходити різницю всіх введених цифр які отримали при використанні метода read();
//     calculator.addMethod(name ,function(){
//        return this.arr.length > 1 ? this.arr.reduce((acc,el) =>  acc - el ): null ;
//     });
//     console.log(calculator.arr);
//     console.log(calculator.name());




// Vovan, [16.03.19 15:48]
// Part 1
// Написати клас  Герой в якого будуть параметри (name, life, level, хр, stamina)
// name - імя
// life - житя =100
// level - рівень = 1
// хр - досвід = 0
// stamina - витривалість = 100
// Клас буде мати методи :
// 1) riseLevel - метод що збідьшує рівень героя на один, якщо хр = 1000
// 2) addXp - метод що приймає параметром хр і плюсує поки сума небуде 1000. Коли хр стає тисячу метод обнуляє поле до 0.
// 3) walk - метод що виводить в консоль фразу "name walking"
// 4) rest - метод що відновлює поле stamina до початкового значення і виводить в консоль фразу 'Recovered' 

// class Hero {
//     constructor(name, life = 100, level = 1, xp = 0, stamina = 100) {
//         this.name = name;
//         this.life = life;
//         this.level = level;
//         this.xp = xp;
//         this.stamina = stamina;
//     }

    
//     riseLevel() {
//       if(this.xp >= 1000) {
//           this.level +=1;
//           this.addXp(0);
//       }
//   }
//   addXp(xp) {
//       if(this.xp >= 1000) {
//           this.xp -= 1000;
//       }
//       this.xp += xp;
//   }
//   walk() {
//       console.log(`${this.name} walking`);
//   }
//   rest() {
//       this.stamina = 100;
//       console.log('Recovered');
//   }
// }

// const human = new Hero('Jordan');
// human.addXp(50);
// human.addXp(950);
// human.riseLevel();
// human.addXp(1000);
// human.riseLevel();
// human.walk();

// console.log(human);





// Створити героя і викликати для нього метод addXp(50) і addXp(950)
// Далі викликати метод riseLevel() що збільшить рівень до 2.
// викликати метод walk.

// Part 2 
// Написати класи Людина, Гном, Маг які будуть насладувати все від класа Герой.
// Ці 3 класа будуть мати додаткову властивість race - раса.
// Людина додатково матиме поле - strength = 100
// Гном матиме додатково поле - rage = 100
// Маг матиме додаткове поле - mana = 100

// Для людини додати метод - wardenFight - який при кожному запуску зменьшує поле stamina на 20.
// Коли поле stamina стане 0 потрібно викликати метод rest() щоб відновити її значення.

// Для гнома додати метод berserk'sFury - який при кожному виклику збільшує поле 
// rage на 30. Якщо rage = 100 обнулити поле stamina і rage та викликати метод rest().

// Для мага додати метод spell який при виклику зменьшує занчення на 25 і stamina на 25.
// Коли значення stamina стає 0 потрібно викликати метод rest(). 
// Додати метод reload() який оновлює поле mana до 100

// Створити по одному екземпляру кожного класу для кожного з них обнулити показник stamina викликом їхніх спеціальних методів, щоб в консолі зявилося повідомлення 'Recovered' 

// Part 3 

// Створити клас FireMage який наслідує всі властивості від Мага і має додаткову властивість skill
// skill - поле де додається навик 'fireball'
// Додати метод shootFireBall - який виведе в консоль фразу "Вогняний шар запущений і нанесен шкоди на ${рандомне число від 1 до 30}" і запустить метод spell();

// Створити екземпляр класу FireMage і запустити 4 рази метод shootFireBall(). після цього в консолі має зявитися напис 'Recovered'.


//=============
/*
  Напиши функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email. 
  
  В prototype функции-конструктора добавь метод getInfo(), 
  который выводит в консоль значения полей login и email. 
  
  Обрати внимание, метод всего один, в поле prototype функции-конструктора, 
  а использовать его смогут все экземпляры, по ссылке.
  
  Создать несколько экземпляров с разными значениями свойств, вывесди их в консоль.
*/

// function Account(login , email){
//     this.login= login;
//     this.email = email;
// }

// Account.prototype.getInfo = function(){
// console.log(`Email = ${this.email}; Login = ${this.login}`);
// }

// const account = new Account('Mangozedog', 'mango@dog.woof');

// console.log(Account.prototype.getInfo); // function
// account.getInfo(); // Login: Mangozedog, Email: mango@dog.woof




// //======================================
// /*
//   Напиши ES6 класс StringBuilder.

//   На вход (в конструкторе) он получает один параметр string - строку,
//   которую записывает в свойство _value.

//   Добавь классу следующие методы:

//     - геттер value - возвращает текущее значение поля _value

//     - append(str) - получает парметр str (строку) и добавляет ее в конец _value

//     - prepend(str) - получает парметр str (строку) и добавляет ее в начало value

//     - pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value
// */


// class StringBuilder {
//     constructor (value) {
//         this._value = value;
//     }
// get value () {
//     return this._value;
// }
// append(str) {
//     return  (this._value = this._value + str);
// }
// prepend(str){
//     return (this._value = str + this._value);
// }
// pad(str) {
//     return (this._value = str + this._value + str);
// }
// }


// const builder = new StringBuilder('.');

// builder.append('^'); 
// console.log(builder.value); // '.^'

// builder.prepend('^'); 
// console.log(builder.value); // '^.^'

// builder.pad('='); 
// console.log(builder.value); // '=^.^='



//====================================

/*
 * Напиши класс Car с указанными свойствами и методами
 */

// class Car {
//     constructor({ maxSpeed = 0, price = 0 }) {
//       this.speed = 0;
//       this.maxSpeed = maxSpeed;
//       this.running = false;
//       this.distance = 0;
//       this._price = price;
//     }

//     turnOn() {
//       return this.running = true;
//     }

//     turnOff() {
//       return this.running = false;
//     }

//     accelerate(spd) {
//       return this.maxSpeed >= spd ? this.speed = spd: null;
//     }

//     decelerate(spd) {
//       return this.maxSpeed >= spd && spd > 0 ? this.speed = spd : null;
//     }

//     drive(hours) {
//       return this.running === true ? this.distance = hours * this.speed : null;
//     }

//     static getSpecs(car) {
//        console.log(`maxSpeed :${ car.maxSpeed}, speed:${car.speed} running: ${car.running}, distance: ${car.distance}`);
//     }

// get value (){
//     return this._price;
// }

// set value (price){
//     return this._price = price;
// }

//   }



//   const car = new Car({ maxSpeed: 100,price :2000 });
//   car.turnOn();
//   car.accelerate(50);
//   car.drive(2);
//   Car.getSpecs(car);

// // const car = new Car({ maxSpeed: 50, price: 2000 });
// console.log(car); // 2000

// car.value = 4000;
// console.log(car); // 4000


"use strict";

/*
  Сеть фастфудов предлагает несколько видов гамбургеров.
  Основа (булочка) гамбургера может быть большой или маленькой (обязательно):
	- маленькая (+30 денег, +50 калорий)
	- большая (+50 денег, +100 калорий)
  Гамбургер может быть с одной из нескольких видов начинок (обязательно):
	- сыром (+15 денег, +20 калорий)
	- салатом (+20 денег, +5 калорий)
	- мясом (+35 денег, +15 калорий)
  Дополнительно, гамбургер можно:
	- посыпать приправой (+10 денег, +0 калорий)
	- полить соусом (+15 денег, +5 калорий)
  Напишите скрипт, расчитывающий стоимость и калорийность гамбургера. Используте ООП подход,
  создайте класс Hamburger, константы, методы для выбора опций и рассчета нужных величин.
  Написанный класс должен соответствовать следующему jsDoc описанию. То есть класс должен содержать
  указанные методы, которые принимают и возвращают данные указанного типа.
*/

/**
 * Класс, объекты которого описывают параметры гамбургера.
 */
// class Hamburger {
//   /**
//    * @constructor
//    * @param {String} size - Размер
//    * @param {String} stuffing - Начинка
//    */
//   constructor(size, stuffing) {
//     this._size = size;
//     this._stuffing = stuffing;
//     this._toppings = [];
//   }

//   /**
//    * Добавить topping к гамбургеру. Можно добавить несколько topping, при условии, что они разные.
//    */
//   addTopping(topping) {
//     return !this._toppings.includes(topping) ? this._toppings.push(topping) : null;
// }
//   /**
//    * Убрать topping, при условии, что она ранее была добавлена
//    */
//   removeTopping(topping) {
//     return this._toppings.includes(topping) ? this._toppings.splice(this._toppings.indexOf(topping), 1) : null;

//   }

//   /**
//    * Получить список toppings
//    *
//    * Попробуйте сделать это геттером чтобы можно было обращаться как obj.toppings и нам вернет массив добавок
//    */
//   getToppings() {
//     return this._toppings;
//   }

//   /**
//    * Узнать размер гамбургера
//    * @returns {String} - размер гамбургера
//    *
//    * Попробуйте сделать это геттером чтобы можно было обращаться как obj.size и нам вернет размер
//    */
//   getSize() {
//     return this._size;
//   }


//   /**
//    * Узнать начинку гамбургера  *
//    * Попробуйте сделать это геттером чтобы можно было обращаться как obj.stuffing и нам вернет начинку
//    */
//   getStuffing() {    
//       return this._stuffing;
//   }

//   /**
//    * Узнать цену гамбургера
//    * Попробуйте сделать это геттером чтобы можно было обращаться как obj.price и нам вернет сумму.
//    */
//   calculatePrice() {
//    let stuff = Hamburger.SIZES[this._size].price + Hamburger.STUFFINGS[this._stuffing].price;
//    let sum = 0;
//    if (this._toppings.length > 0) {
//        for(let x of this._toppings){
//           sum = sum + Hamburger.TOPPINGS[x].price;
//         }
//         return sum + stuff;

//    }else {
//        return stuff;
//    }

//   }

//   /**
//    * Узнать калорийность
//    * Попробуйте сделать это геттером чтобы можно было обращаться как obj.calories и нам вернет сумму.
//    */
//   calculateCalories() {
//     let call = Hamburger.SIZES[this._size].calories + Hamburger.STUFFINGS[this._stuffing].calories;
//     let sum = 0;
//     if(this._toppings.length > 0){
//     for(let x of this._toppings){
//        sum += Hamburger.TOPPINGS[x].calories;
//     }
//     return sum + call;

// }else{
//     return call;

// }
//   }
// }

// /*
//   Размеры, виды добавок и начинок объявите как статические поля класса.
//   Добавьте отсутсвующие поля по аналогии с примером.
// */
// Hamburger.SIZE_SMALL = 'SIZE_SMALL';
// Hamburger.SIZE_LARGE = 'SIZE_LARGE';

// Hamburger.SIZES = {
//   [Hamburger.SIZE_SMALL]: {
//     price: 30,
//     calories: 50,
//   },
//   [Hamburger.SIZE_LARGE]: {
//     price: 50,
//     calories: 100,
// }
// };

// Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
// Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
// Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';

// Hamburger.STUFFINGS = {
//   [Hamburger.STUFFING_CHEESE]: {
//     price: 15,
//     calories: 20,
//   },
//   [Hamburger.STUFFING_SALAD]: {
//     price: 20,
//     calories: 5,
//   },
//   [Hamburger.STUFFING_MEAT]: {
//     price: 35,
//     calories: 15,
//   },
// };

// Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
// Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';

// Hamburger.TOPPINGS = {
//   [Hamburger.TOPPING_SPICE]: {
//     price: 10,
//     calories: 0,
//   },
//   [Hamburger.TOPPING_SAUCE]: {
//     price: 15,
//     calories: 5,
//   },
// };

// /* Вот как может выглядеть использование этого класса */

// // Маленький гамбургер с начинкой из сыра
// const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// // Добавка из приправы
// hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// // Спросим сколько там калорий
// console.log("Calories: ", hamburger.calculateCalories());

// // Сколько стоит?
// console.log("Price: ", hamburger.calculatePrice());

// // Я тут передумал и решил добавить еще соус
// hamburger.addTopping(Hamburger.TOPPING_SPICE);

// // А сколько теперь стоит?
// console.log("Price with sauce: ", hamburger.calculatePrice());

// // Проверить, большой ли гамбургер?
// console.log("Is hamburger large: ", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false

// // Убрать добавку
// hamburger.removeTopping(Hamburger.TOPPING_SPICE);

// // Смотрим сколько добавок
// console.log("Hamburger has %d toppings", hamburger.getToppings().length); // 1
// console.log(hamburger);
// /*
//   🔔 Обратите внимание на такие моменты:
//     	✔️ класс не взаимодействует с внешним миром. Это не его дело, этим занимается
//     		другой код, а класс живет в изоляции от мира
//     	✔️ обязательные параметры (размер и начинка) мы передаем через конструктор,
// 		чтобы нельзя было создать объект, не указав их
//     	✔️ необязательные (добавка) добавляем через методы
//     	✔️ типы начинок обозначены "константами" с понятными именами (на самом деле просто
// 	    	свойствами, написанным заглавными буквами, которые мы договорились считать "константами")
//     	✔️ объект создается через конструктор - функцию, которая задает начальные значения полей.
//     	✔️ в свойствах объекта гамбургера логично хранить исходные данные (размер, тип начинки),
//       		а не вычисленные из них (цена, число калорий и т.д.). Рассчитывать цену и калории
// 		логично в тот момент, когда это потребуется, а не заранее.
// */