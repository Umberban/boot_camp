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

// let sq = Math.sqrt(587);

// let max = Math.ceil(sq);
// let min = Math.floor(sq);
// console.log(max , min);

// ============================part 2 ===========================

//======================= task 01 =================

/*
 * - Объяви две переменные хранящие информацию о товаре: name и price
 * - Присвой переменным следующие характеристики товара (сразу при объявлении)
 *   - название: Генератор защитного поля
 *   - цена: 1000
 * - Присвой товару новую цену - 2000
 * - Используя шаблонную строку выведи в консоли информацию о товаре, 
 *   получится "Выбран «Генератор защитного поля», цена за штуку 2000 кредитов"
 */

// let name = 'Генератор защитного поля',
//     price = 1000;

//     price = 2000;

// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

//====================== task 02 =====================


/*Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.*/

// let ask = Number(prompt('Enter number 10'));

// ask===10?alert("TRUE"):alert('FALSE');


//==================== task 03 ======================


/*Задача. В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).*/

// let min = Number(prompt("enter a number from 0 to 59"));

// min >= 0 && min <= 14 ? alert('First part'):min >= 15 && min <= 29 ? alert('Second part'):min >= 30 && min <= 44 ? alert('third part'): min >= 45 && min <= 59?alert('Fourth part'): null;   


//==================== task 04 =======================



/*
  Есть три переменные содержащие составляющие даты: день, месяц, и год. 
  
  Создай переменную date, в которую запиши полную дату в формате день\месяц\год
  Создай переменную message, в которую запиши сообщение "Доброе утро, cегодня 17\10\2048, за бортом отличная погода!"
  
  PS: используя шаблонные строки.
*/


// const day = 17;
// const month = 10;
// const year = 2048;

// const date = `${day}\\${month}\\${year}`;
// const message = `Доброе утро, cегодня ${date}, за бортом отличная погода!`;


// console.log(date); // 17\10\2048
// console.log(message); // "Доброе утро, cегодня 17\10\2048, за бортом отличная погода!"


//==================== task 05 ============================


/*
  Есть три переменные name, date и roomType, содержащие имя гостя, 
  дату его прибытия на отдых и тип комнаты отеля.
  
  Создай переменную message и используя шаблонные строки запиши в нее сообщение формата:
  "имя гостя" прибывает на отдых "дата прибытия" в "тип комнаты".
*/

// const name = 'Mango';
// const date = '14/08/2137';
// const roomType = 'люкс';
// const message = `${name} прибывает на отдых ${date} в ${roomType}`;

// console.log(message); // Mango прибывает на отдых 14/08/2137 в люкс


//================== task 06 ===============================


/*
  Напиши скрипт который: 
  
  - При посещении страницы через prompt cпрашивает 'Введите пароль доступа'
  
  - Если был нажат Cancel в prompt, показывать alert с сообщением 'Ожидаю ввода пароля'.
  
  - Если введенное значение совпадает со значением переменной correctPassword, 
    показывать alert со сообщением 'Доступ в секретный бункер разрешен!'
    
  - Если что-то другое — показывать alert с сообщением 'Активирована система защиты!'
*/

// const correctPassword = 'jqueryismyjam';
// const check = prompt('Entert your password');

// check === correctPassword ? alert("Доступ в секретный бункер разрешен!"):check === null ? alert('Ожидаю ввода пароля'):alert('Активирована система защиты!'); 



//========================= task 07 =================


/*
  Необходимо написать скрипт проверки количества товаров на складе.
  Есть переменные total (количество товаров на складе) и ordered (единиц товара в заказе).
  
  Сравни эти значения и по результатам выведи:
  
    - Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!"
    - Если в заказе указано число товаров, равное количеству товара на складе, то выведи сообщение "Вы забираете весь товар cо склада!"
    - В иных случаях выводи сообщение "Заказ оформлен, с вами свяжется менеджер"
    
  Проверь работоспособность кода с разными значениями переменной ordered.
*/

// const total = 100;
// const ordered = 50;

// total === ordered ? alert("Вы забираете весь товар cо склада!"): total > ordered ? alert('Заказ оформлен, с вами свяжется менеджер'):alert('На складе недостаточно твоаров!');



//===================== task 08 =====================

/*
  Напиши скрипт который: 
 
  - Через prompt cпрашивает 'Введите произвольное целое число'
  - Если пользователь нажал Cancel - показывать alert 'Ну и ладно, пока!'
  - Если посетитель вводит целое число - показывать alert со строкой 'Спасибо!'
  - Если посетитель вводит что либо другое — показывать alert 'Необходимо было ввести целое число!'
*/

// const num = Number(prompt("Введите произвольное целое число"));
//  parseInt(num) ? alert('Спасибо!'): num === null ? alert('Ну и ладно, пока!'): alert('Необходимо было ввести целое число!');

//===================== task 09 =====================

/* 
  В переменную value записывается случайное число.
  
  Объяви переменную type, в которую, используя ветвления запиши строку:  
    - "even" если value четное
    - "odd" если value не четное
  PS: попробуй использовать тернарный оператор

*/

// const value = Number.parseInt(Math.random() * 100);
// let type;
// value % 2 === 0 ? type = "even" : type = "odd";

// console.log(`${value} is ${type}`);

//========================= taks 10 ==================

/* 
  Создай скрипт поиска отелей, где пользователь 
  с помощью prompt должен ввести число от 1 до 5
  
  Проверить что пользователь ввел именно цифру от 1 до 5
  
  Если пользователь нажал Cancel, то выведи alert с текстом 'Очень жаль, приходите еще!'
  
  Если было введено что либо кроме чисел 1-5, вывести alert с текстом 'Неверный ввод, возможные варианты 1-5!'
  
  Если же пользовател ввел валидное число, используя switch, вывести alert с одной из строк:
  
    1 - "Каталог хостелов" 
    2 - "Каталог бюджетных отелей"
    3 - "Каталог отелей ***"
    4 - "Каталог отелей ****"
    5 - "Каталог лучших отелей"
*/

// const stars = Number.isInteger(Number(prompt('Введите число от 1 до 5')));

// switch (stars) {
//     case 1:
//         alert("Каталог хостелов");
//         break;
//     case 2:
//         alert("Каталог бюджетных отелей");
//         break;
//     case 3:
//         alert("Каталог отелей ***");
//         break;
//     case 4:
//         alert("Каталог отелей ****");
//         break;
//     case 5:
//         alert("Каталог лучших отелей");
//         break;
//     case 0 :
//         alert("Очень жаль, приходите еще!");
//         break;

//     default:
//         alert("Неверный ввод, возможные варианты 1-5!");
//         break;
// }





//==================== task 11 ============================

/* 
  Пользователь может оформить доставку товара к себе в страну, 
  указав ее в переменной country, но доставка есть не везде.
  
  Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.
  Сообщение выглядит так: "Доставка в <<тут страна>> будет стоить <<тут цена>>"
  
  Ниже приведен список стран и стоимость доставки.
  
    Китай - 100 кредитов
    Южная Америка - 250 кредитов
    Австралия - 170 кредитов
    Индия - 80 кредитов
    Ямайка - 120 крдитов
  
  Если названия нет в списке, то выводи в консоль сообщение "В вашей стране доставка не доступна".
  Протестируй работоспособность кода подставив разные значения в переменную country.
  
  PS: используй switch
*/

// const country = prompt('Введите страну куда ожидаеться доставка');

// switch (country) {
//     case "Китай":
//     alert(`Доставка в ${country} будет стоить 100 кредитов`);
//         break;
//     case "Южная Америка":
//     alert(`Доставка в ${country} будет стоить 250 кредитов`);
//         break;
//     case "Австралия":
//     alert(`Доставка в ${country} будет стоить 170 кредитов`);
//         break;
//     case "Индия":
//     alert(`Доставка в ${country} будет стоить 80 кредитов`);
//         break;
//     case "Ямайка":
//     alert(`Доставка в ${country} будет стоить 120 кредитов`);
//         break;

//     default:
//     alert('В вашей стране доставка не доступна');
//         break;
// }


//========================= *tasks 12 ====================

/*
  Создайте скрипт турагенства, продающего поездки в 3-х группах: sharm, hurgada и taba.
  Кол-во мест в группах ограничено (создайте переменные для хранения мест в группах): 
    * sharm - 15
    * hurgada - 25
    * taba - 6.
  Когда пользователь посещает страницу, ему необходимо предложить ввести число необходимых мест,
  результат сохранить в переменную.
  Необходимо проверить являются ли введенные данные целым положительным числом. 
  
    - В случае неверного ввода от пользователя, скрипт показывает alert с текстом 
      "Ошибка ввода" и больше ничего не делает.
    - Если пользователь нажал Cancel, скрипт показывает alert с текстом "Нам очень жаль, приходите еще!".
    - В случае верного ввода, последовательно проверить кол-во мест в группах, 
      и кол-во необходимых мест введенных пользователем.
  Если была найдена группа в которой количество мест больше либо равно необходимому, 
  вывести сообщение через confirm, что есть место в группе такой-то, согласен ли 
  пользоваетель быть в этой группе?
    * Если ответ да, показать alert с текстом 'Приятного путешествия в группе <имя группы>'
    * Если ответ нет, показать alert с текстом 'Нам очень жаль, приходите еще!'
  
  Если мест нигде нет, показать alert с сообщением 'Извините, столько мест нет ни в одной группе!'
*/

// const sharm = 15;
// const hurgada = 25;
// const taba = 6;
// let hotel = "";
// const num = Number(prompt('Введите число необходимых мест'));

// if(num > 0 && Number.isInteger(num)){
//     if(num <= 6){
//         hotel = "taba";
//         confirm(`Есть место в группе ${hotel}`)?alert(`Приятного путешествия в группе ${hotel}`):alert("Нам очень жаль, приходите еще!");
//     }
//     else if(num <= 15){
//         hotel = "sharm";
//         confirm(`Есть место в группе ${hotel}`)?alert(`Приятного путешествия в группе ${hotel}`):alert("Нам очень жаль, приходите еще!");
//     }
//     else if(num <= 25){
//         hotel = "hurgada";
//         confirm(`Есть место в группе ${hotel}`)?alert(`Приятного путешествия в группе ${hotel}`):alert("Нам очень жаль, приходите еще!");
//     }else {
//         alert("Извините, столько мест нет ни в одной группе!");
//     }
// }else if(num === 0){
//  alert("Нам очень жаль, приходите еще!");
// }else{
//     alert("Ошибка ввода");
// }


// num > 0 ? (num <= 6 ? (confirm("Есть место в группе Taba")?alert("Приятного путешествия в группе Taba"):alert("Нам очень жаль, приходите еще!")):num <= 15?(confirm("Есть место в группе Sharm")?alert("Приятного путешествия в группе Sharm"):alert("Нам очень жаль, приходите еще!")):num <= 25 ? (confirm("Есть место в группе Hurgada")?alert("Приятного путешествия в группе Hurgada"):alert("Нам очень жаль, приходите еще!")):alert("Извините, столько мест нет ни в одной группе!")):alert("Ошибка ввода");


//======================== *task 13 ================

/*
  Напишите скрипт имитирующий авторизацию администратора в панели управления.
  
  При загрузке страницы у посетителя запрашивается логин через prompt:
  
    - Если посетитель нажал Cancel — показывать alert с текстом 'Отменено пользователем!'
    - Если было введено что либо другое, что не совпадает со значением константы adminLogin, 
       показывать alert с текстом 'Доступ запрещен, неверный логин!'   
    - Если был введен логин совпадающий со значением константы adminLogin, 
      спрашивать пароль через prompt.
    
  При вводе пароля:
  
      - Если нажали Cancel, показывать alert с текстом 'Отменено пользователем!'
      - Если введен пароль который не совпадает со значением константы adminPassword,
        показывать alert с текстом 'Доступ запрещен, неверный пароль!'        
      - Если введён пароль который совпадает со значением константы adminPassword, 
        показывать alert с текстом 'Добро пожаловать!'
        
  🔔 PS: для удобства и чистоты кода сохраните в переменные сообщения отображаемые в alert
*/
// const adminLogin = 'admin';
// const adminPassword = 'm4ngo1zh4ackz0r';
// const login = prompt('Enter your Login');
// const canseled = 'Отменено пользователем!';
// const welcome = "Добро пожаловать!";
// const wrongLogin = 'Доступ запрещен, неверный логин!';
// const wrongPass = 'Доступ запрещен, неверный пароль!';

// if(login === adminLogin){
//     const password = prompt('Enter your Password');
//     if(password === adminPassword){
//         alert(welcome);
//     }else if(password === null){
//  alert(canseled);
// }else{
//         alert(wrongPass);
//     }
// }else if(login === null){
//     alert(canseled);
// }else{
//     alert(wrongLogin);
// }





//========================     Работа с if-else ========

//  Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
// const a = 0;
// if(a === 0){
//     console.log("true");
// }else{
//     console.log('false');
// }


//  Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
// const a = '1';
// a > 0 ? console.log('True'):console.log('False');
// //  Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
// a < 0 ? console.log('True'):console.log('False');
// //  Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
// a >= 0 ? console.log('True'): console.log("False");
// //  Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
// a <= 0 ? console.log('True'): console.log("False");
// //  Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
// a !== 0 ? console.log("True"): console.log('False');
// //  Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 'test', 'тест', 3.
// a === "test" ? console.log("True"):console.log('False');
// //  Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном '1', 1
// a === '1' ? console.log("True") : console.log("False");

// =============================   Работа с && (и) и || (или)

//  Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
// const a = 1;
// a > 0 && a < 5 ? console.log("True") : console.log("False");

//  Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
// let a = -3 ;
// if(a === 0 || a === 2){
//     a += 7;
// } else {
//     a /= 10;
// }
// console.log(a);
//  Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.
// let a = 3;
// let b = 5;
// let result;

// if(a <= 1 && b >= 3){
//     result = a + b; 
// }else {
//     result = a - b;
// }

// console.log(result);



//  Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.

// let a = 1,
//     b = 1;

// if(a > 2 && a < 11 || b >= 6 && b < 14){
//     console.log('Верно');
// }else{
//     console.log('Неверно');
// }

//  В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
// const day = Number(prompt('Enter a number from 1 to 31', ''));
// if(day >= 1 && day < 11){
//     alert('First decade');
// }else if (day >= 11 && day < 21){
//     alert('Second decade');
// }else if (day >= 21 && day <= 31){
//     alert('Third decade');
// }else if (!day){
//     null;
// }else{
//     alert("Wrong number");
// }

//  В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
// const month = Number.parseInt(Math.random() * 12 + 1);
// const month = Number(prompt('Enter a month from 1 to 12', ''));
// if (month === 12 || month >= 1 && month <= 2) {
//     alert('Winter');
// } else if (month >= 3 && month <= 5) {
//     alert('Spring');
// } else if (month >= 6 && month <= 8) {
//     alert('Summer');
// } else if (month >= 9 && month <= 11) {
//     alert('Autumn');
// } else if (!month) {
//     null;
// } else {
//     alert("Wrong month");
// }

//  Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.
// let str = 'abcde';
// if(str[0]=== "a"){
//     console.log('Yes');
// }else{
//     console.log("No");
// }
//  Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.
// let str = '12345';
// if (parseInt(str[0])=== 1 || parseInt(str[0])=== 2 || parseInt(str[0])=== 3 ){
//     console.log("Yes");
// }else{
//     console.log('No');
// }

//  Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий.
// let str  = "123";
// const result = Number(str[0]) + Number(str[1]) + Number(str[2]);
// console.log(result)
//  Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

// const str = "654456";
// const first = Number(str[0]) + Number(str[1]) + Number(str[2]);
// const second = Number(str[3]) + Number(str[4]) + Number(str[5]);

// if (first === second){
//     console.log("True");
// }else{
//     console.log('False');
// }

//  Создайте программу, которая выводит надбавку за стаж. Пользователь вводит стаж работы, а программа пишет ему надбавку.

/*Стаж от	Стаж до	Надбавка
0	3 лет	0%
3 лет	10 лет	10%
10 лет	20 лет	20%
20 лет	выше	25%
Учтите вариант ошибки – пользователь вводит отрицательное число.*/

// const exp = Number.isInteger(prompt("Enter your experience in years"));
// let bonus;
// if(exp >= 0 && exp){
//   if (exp <= 3){
//     bonus= "0%";
//     alert(`Your bonuses for ${exp} years experience is ${bonus}`);
//   } else if (exp > 3 && exp <= 10) {
//     bonus = "10%";
//     alert(`Your bonuses for ${exp} years experience is ${bonus}`);
//   }else if (exp > 10 && exp <= 20) {
//     bonus = "20%";
//     alert(`Your bonuses for ${exp} years experience is ${bonus}`);
//   }else {
//     bonus = "25%";
//     alert(`Your bonuses for ${exp} years experience is ${bonus}`);
//   }
// }else{
//   alert('You should enter a number');
// }