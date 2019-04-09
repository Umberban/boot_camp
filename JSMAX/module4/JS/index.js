'use strict';

//====================== task01 ==================

//  Выведите на экран зарплату Пети и Коли.
// var obj = {Коля: '1000', Вася: '500', Петя: '200'};

// console.log(`Sallery :Kolya - ${obj.Коля} ,Petya - ${obj.Петя}`);

//====================== task02 ==================

// Дан многомерный массив arr:
// let arr = {
// 	'ru':['голубой', 'красный', 'зеленый'],
// 	'en':['blue', 'red', 'green'],
// };

// console.log(arr.ru[0]);

// Выведите с его помощью слово 'голубой'.

//====================== task03 ==================

// Создайте объект obj. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта:
// let obj = {a: 1, b: 2, c: 3};
// console.log(obj.c);
// console.log(obj["c"]);


//====================== task04 ==================

// Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недели.

// const days = {
//     1: 'Monday',
//     2: 'Teusday',
//     3: 'Wensday',
//     4: 'Thursday',
//     5: 'Friday',
//     6: 'Sunday',
//     7: 'Saturday'
// };

// console.log(`Today is ${days['1']}`);

//====================== task05 ==================

// Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3. Выведите день недели, соответствующий значению переменной day.
// let today = days[1];
// console.log(`Today is ${today}`);
//====================== task06 ==================

// Создайте двухмерный массив. Первые два ключа - это 'ru' и 'en'. Пусть первый ключ содержит элемент, являющийся массивом названий дней недели по-русски, а второй - по-английски. Выведите с помощью этого массива понедельник по-русски и среду по английски (пусть понедельник - это нулевой день)9
// let arr = {
//     	'ru':['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
//     	'en':['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sunday', 'Saturday'],
//     };

//     console.log(` ru - ${arr.ru[0]}; en - ${arr.en[2]} `);

// //====================== task07 ==================

// // Пусть теперь в переменной lang хранится язык (она принимает одно из значений или 'ru', или 'en' - либо то, либо то), а в переменной day - номер дня. Выведите словом день недели, соответствующий переменным lang и day. То есть: если, к примеру, lang = 'ru' и day = 3 - то выведем 'среда'.

// let lang = "en";
// let day = 0;

// console.log(arr[lang][day])

// lang === "ru"? console.log(arr.ru[day]) : console.log(arr.en[day]);


//====================== task08 ==================

/*  
  Напиши скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - заменяет значение premium на false
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/

// const user = {
//     name: "Mango",
//     age: 20,
//     hobby: "html",
//     premium: true
//   };

//   user.mood = "happy";
//   user.hobby = "javascript";
//   user.premium = false;

// for(let i of Object.keys(user)){
//     console.log(`${i} : ${user[i]}`)
// }

// for(let i of Object.entries(user)){
//     console.log(`${i[0]} : ${i[1]}`);
// }

  

//====================== task09 ==================

/*
  Напиши скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/

// const tasksCompleted = {
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99
//   };
  
// let max = 0;
// let name = "";

// for(let key in tasksCompleted){
//     if(tasksCompleted[key] > max){
//         max = tasksCompleted[key];
//         name = key;
//     }
// }
// console.log(`${name} - ${max}`);


//====================== task10 ==================

/*  
  Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

// function countProps(obj){

// return Object.values(obj).length

// }


// // Вызовы функции для проверки
// console.log(
//     countProps({})
//   ); // 0
  
//   console.log(
//     countProps({a: 1, b: 3, c: 'hello'})
//   ); // 3

//====================== task11 ==================

/*  
  Напиши функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/

// function isObjectEmpty(obj) {
//     if(Object.values(obj).length === 0){
//         return true;
//     }return false;
// }



// // Вызовы функции для проверки
// console.log(
//     isObjectEmpty({})
//   ); // true
  
//   console.log(
//     isObjectEmpty({a: 1})
//   ); // false
  
//   console.log(
//     isObjectEmpty({a: 1, b: 2})
//   ); // false
  

//====================== task12 ==================

/*  
  Напиши функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/

// function isObjectEmpty(obj) {
//         if(Object.values(obj).length === 0){
//             return true;
//         }return false;
//     }


// // Вызовы функции для проверки
// console.log(
//     isObjectEmpty({})
//   ); // true
  
//   console.log(
//     isObjectEmpty({a: 1})
//   ); // false
  
//   console.log(
//     isObjectEmpty({a: 1, b: 2})
//   ); // false
  




  //====================== task13 ==================

/*  
  Напиши функцию countTotalSalary(salaries). 
  
  Функция получает объект зарплат и считает общую сумму запрплаты работников.
  Возвращает общую сумму зарплаты.
  
  Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата"
*/


// function countTotalSalary(salaries) {
//     let sum = 0;
//     for (let key in salaries){
//         sum += salaries[key]
//     }
//     return sum;
// }

// // Вызовы функции для проверки
// console.log(
//     countTotalSalary({})
//   ); // 0
  
//   console.log(
//     countTotalSalary({
//       mango: 100,
//       poly: 150,
//       alfred: 80
//     })
//   ); // 330
  
  
  //====================== task14 ==================

/*  
  Напиши функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа. 
  Возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

// const users = [
//     { name: 'Poly', age: 7, mood: 'happy' },
//     { name: 'Mango', age: 4, mood: 'blissful'},
//     { name: 'Ajax', age: 3, mood: 'tired' }
//   ];
  
  
//   function getAllPropValues(arr, prop){
//     let newArr = [];
//       for(let i of arr){
//           if(i.hasOwnProperty(prop)){
//           newArr.push(i[prop]);
//           }else{
//               return newArr;
//           }
//       }
//       return newArr;
//   }

//   // Вызовы функции для проверки
//   console.log(
//     getAllPropValues(users, 'name')
//   ); // ['Poly', 'Mango', 'Ajax']
  
//   console.log(
//     getAllPropValues(users, 'mood')
//   ); // ['happy', 'blissful', 'tired']
  
//   console.log(
//     getAllPropValues(users, 'active')
//   ); // []

//====================== task15 ==================

    /*  
 * Расставь отсутствующие this в методах объекта account
*/

// const account = {
//     owner: "Mango",
//     balance: 24000,
//     discount: 0.1,
//     orders: ["order-1", "order-2", "order-3"],
//     changeDiscount(value) {
//       this.discount = value;
//     },
//     getOrders() {
//       return this.orders;
//     },
//     addOrder(cost, order) {
//       this.balance -= cost;
//       this.orders.push(order);
//     }
//   };
  
//   account.changeDiscount(0.15);
//   console.log(account.discount); // 0.15
  
//   const orders = account.getOrders();
//   console.log(orders); // ['order-1', 'order-2', 'order-3']
  
//   account.addOrder(5000, "order-4");
//   console.log(account.balance); // 19000
//   console.log(account.orders); // ['order-1', 'order-2', 'order-3', 'order-4']