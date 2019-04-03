"use strict";

// 1. Зайдите в консоль своего браузера. При помощи оператора определения типа уточните тип следующих величин: «Привет», 123, true, «true».

// const str = "Hello";
// const num = 123;
// const boll = true;
// const strBol = "true";

// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof boll);
// console.log(typeof strBol);


// // 2. Зайдите в консоль своего браузера. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений: 5 + 3, 5 — 3, 5 * 3, 5 / 3.

// const a = 5;
// const b = 3;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);


// // 3. Зайдите в консоль своего браузера. При помощи оператора нахождения остатка от деления %, найдите значения выражений: 5 % 3, 3 % 5.
// console.log(a%b);
// console.log(b%a);


// // 4. Зайдите в консоль своего браузера. При помощи оператора + (сложение, склеивание) найдите значения выражений: 5 + ‘3’ , ‘5’ — 3, 75 + ‘кг’.

// const c = "3";
// const d = "5";

// console.log(a+d);
// console.log(d-b);
// console.log(75 + "kg");

// // 5. Создайте переменные строкового, числового и булева типов. Выведите их содержимое.
// console.log(str);
// console.log(num);
// console.log(boll);


// // 6. Напишите скрипт, который находит площадь прямоугольника длиной 23см., шириной 10см.

// const len = "23cm";
// const wid = "10cm";

// let result = parseInt(len) * parseInt(wid);

// console.log(result + "cm^2");



// // 7. (*) Найди двенадцатый элемент последовательности Леонардо Пизанского (нужно использовать функцию Math.pow(число, степень))

//     let fib = Math.pow(4,5)

// 8. (*) Даны размер ипотечного кредита, процентная ставка, кол-во лет. Найти переплату по кредиту.

// _________________________________
// 9) Створіть змінну num і надайте їй значення 3. Виведіть значення цієї змінної на екран за допомогою методу alert

    // const num = 3;
    // alert(num);

// 10) Створіть змінні a = 10 і b = 2. Виведіть на екран їх суму, різницю, добуток і частку (результат ділення)
//     const a = 10;
//     const b = 2;
//     console.log(a+b);
//     console.log(a-b);
//     console.log(a*b);
//     console.log(a/b);
// // 11) Створіть змінні c = 15 і d = 2. Підсумуйте їх, а результат надайте змінної result. Виведіть на екран значення змінної result

//     const c = 15;
//     const d = 2;
//     let result = c + d;

//     console.log(result);

// 12) Створіть змінні a = 10, b = 2 і c = 5. Виведіть на екран їх суму.

// const a = 10;
// const b = 2;
// const c = 5;

// console.log(a+b+c);
// 13) Створіть змінні a = 17 і b = 10. Відніміть від a змінну b і результат надайте зміннії c. Потім створіть змінну d, надайте їй значення 7. Складіть змінні c і d, а результат запишіть в змінну result. Виведіть на екран значення змінної result.

// const a = 17;
// const b = 10;
// let c = a-b;
// const d = 7;
// let result = c+d;
// console.log(result);
// 14) Запитайте ім'я користувача за допомогою методи prompt. Виведіть за допомогою alert повідомлення 'Ваше ім'я
// %значення що отримали з prompt%'

// const name = prompt('Enter your name','');
// alert(`Your name ${name}`);







// 15) Створіть три змінні - година, хвилина, секунда. З їх допомогою виведіть поточний час в форматі 'година: хвилина: секунда'.
//  const hour = 15;
//  const min = 55;
//  const sec = 40;

//  console.log(`${hour}:${min}:${sec} `)


// 16) Створіть змінну, надайте їй число. Зведіть це число в квадрат. Виведіть його на екран
// const sqr = 5;
// const result = Math.pow(sqr,2);
// console.log(result);

// 17) Переробіть цей код так, щоб в ньому використовувалися операції + =, - =, * =, / =. Кількість рядків коду при цьому не повинно змінитися.

//   let num = 47;
//   num += 7;
//   num -= 18;
//   num *= 10;
//   num /= 15;
//   alert (num);


// 18) Створіть змінну str і надайте їй значення 'Hello World'. Виведіть значення цієї змінної на екран

// const str = "Hello World";

// console.log(str);

// 19) Створіть змінні str1 = 'Hello,' і str2 = 'World!'. За допомогою цих змінних і операції додавання рядків виведіть на екран фразу 'Hello World'.

// const str1 = 'Hello, ';
// const str2 =  "World!";
// console.log(str1 + str2) ; 

// 20) Створіть змінну name і надайте їй ваше ім'я. Створіть змінну age і надайте їй ваш вік. Виведіть на екран 'Привіт, я  % Ім'я%!'Мені% Вік% років!'.
// let nam = "Rodion",
//     age = 23;

//     alert(`Hello my name is ${nam}, and I am ${age}, years old`)




// 21) Створіть змінну str і надайте їй значення 'abcde'. Звертаючись до окремих символів цього рядка виведіть на екран символ 'a', символ 'c', символ 'e'
// let str = "abcde";

// console.log(str[0], str[2], str[4]);


// 22) Створіть змінну num і надайте їй значення '12345'. Знайдіть суму, різницю, добуток, частку цифр цього числа
// і виведіть ці значення в консоль
 
// const num = "12345";

// let sum = Number(num[0]) + Number(num[1])+ Number(num[2])+ Number(num[3]) + Number(num[4]);
// let minus = Number(num[0]) - Number(num[1])- Number(num[2])- Number(num[3]) - Number(num[4]);
// let umn = Number(num[0]) * Number(num[1])* Number(num[2])* Number(num[3]) * Number(num[4]);
// let podelit = Number(num[0]) / Number(num[1])/ Number(num[2])/ Number(num[3]) / Number(num[4]);


// console.log(sum);
// console.log(minus);
// console.log(umn);
// console.log(podelit);



// 23) Дана рядок 'js'. Зробіть з неї рядок 'JS'.
// let str = "js";

// console.log(str.toUpperCase());


// 24) Дана рядок 'JS'. Зробіть з неї рядок 'js'
// let str1 = "JS";
// console.log(str1.toLowerCase());
// 25) Дана рядок 'я вчу javascript!'. Знайдіть кількість символів в цьому рядку.
// const learn = "I am learning javascript";

// console.log(learn.length);


// 26) Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b.
// let a = 10;
// let b = 3;
// console.log(a%b);
// 27) Возведите 2 в 10 степень. Результат запишите в переменную st.
// const a = 2;
// const b = 10;

// let st = Math.pow(a,b);

// console.log(st);

// 28) Найдите квадратный корень из 245.
// const sq = Math.sqrt(245);
// console.log(sq);

// 29) Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых. (toFixed(0))
// let sq = Math.sqrt(379);

// console.log(sq.toFixed(0));
// console.log(sq.toFixed(1));
// console.log(sq.toFixed(2));

// 30) Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны (edited) 
// Перечень методов для работы со строками

let sq = Math.sqrt(587);

let max = Math.ceil(sq);
let min = Math.floor(sq);
console.log(max , min);