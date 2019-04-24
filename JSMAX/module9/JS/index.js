'use strict';



/*
 * Есть массив цветов в hex-формате и кнопки Start и Stop.
 *
 * Напиши скрипт, который после нажатия кнопки Start, раз в секунду
 * меняет цвет фона body на случайное значение из массива. Используй
 * инлайн-стиль для изменения background-color.
 *
 * При нажатии на кнопку Stop, изменении цвета фона должно останавливаться.
 *
 * Учти, что на кнопку Start можно нажать бесконечное количество раз.
 * Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
 */

// const colors = [
//     "#FFFFFF",
//     "#2196F3",
//     "#4CAF50",
//     "#FF9800",
//     "#009688",
//     "#795548"
// ];

// const body = document.body;
// const startBtn = document.querySelector('[data-action = "start"]');
// const stopBtn = document.querySelector('[data-action = "stop"]');
// let id;
// startBtn.addEventListener("click", start );

// function start()  {
//     id = setInterval(() => {
//         let randCol = Math.floor(Math.random() * colors.length);
//         let clr = colors[randCol];
//         body.style.backgroundColor = clr;
//     }, 1000);
//     startBtn.setAttribute('disabled', true);
// }

// stopBtn.addEventListener("click", stop);


// function stop(){
//     startBtn.removeAttribute('disabled');
//     clearInterval(id);
// }
// ======================================================================

/* 
  Напишите функцию getFormattedTime(time), которая 
  получает time - кол-во миллисекунд и возвращает 
  строку времени в формате xx:xx.x, 01:23.6, минуты:секунды.миллисекунды.
  
  Используйте возможности объекта Date для работы со временем.
  
  Из миллисекунд нам интересен только разряд с сотнями,
  то есть если сейчас 831мс то нам интересна исключительно цифра 8.
*/

// function getFormattedTime(time) {
//     const date = new Date(time);
//     let min = 10 > date.getMinutes()?`0${date.getMinutes()}`: date.getMinutes();
//     let sec = 10 > date.getSeconds()?`0${date.getSeconds()}`: date.getSeconds();
//     let miliSec = date.getMilliseconds();

//     return `${min}:${sec}.${Math.abs(Math.floor(miliSec/100))}`;
//   }

//   console.log(
//     getFormattedTime(1523621052858)
//   ); // 04:12.8

//   console.log(
//     getFormattedTime(1523621161159)
//   ); // 06:01.1

//   console.log(
//     getFormattedTime(1523621244239)
//   ); // 07:24.2

// ============================================================================================================
/* 
  Напишите скрипт, реализующий базовый функционал
  таймера, запуск отсчета времени и сброс счетчика
  в исходное состояние.
  
  Используйте возможности объекта Date для работы со временем.
  
  Создайте функцию startTimer, которая будет запускать
  отсчет времени с момента ее нажатия, она вызывается 
  при клике на кнопку с классом js-timer-start.
  
  Создайте функцию stopTimer, которая будет останавливать
  счетчик, она вызывается при клике на кнопку с классом js-timer-stop.
  
  Используйте вспомогательную функцию updateClockface 
  которая обновляет значение счетчика в интерфейсе. 
  Для составления строки времени в формате xx:xx.x, 
  исользуйте функцию getFormattedTime из задания номер 3.
  
  Подсказка: так как нам интересны исключительно сотни миллисекунд,
      нет смысла выполнять пересчет времени чаще чем каждые 100мс.
*/

const clockface = document.querySelector(".js-clockface");
const startBtn = document.querySelector(".js-timer-start");
const stopBtn = document.querySelector(".js-timer-stop");

const timer = {
  startTime: null,
  deltaTime: null,
  id: null
};

/*
* Вспомогательные функции
*/

function getFormattedTime(time) {
  const date = new Date(time);
  let min = 10 > date.getMinutes()?`0${date.getMinutes()}`: date.getMinutes();
  let sec = 10 > date.getSeconds()?`0${date.getSeconds()}`: date.getSeconds();
  let miliSec = date.getMilliseconds();

  clockface.textContent = `${min}:${sec}.${parseInt(miliSec/100)}`;
}

function updateClockface(elem, time) {
  elem.textContent = getFormattedTime(time);
}

function startTim(){
  timer.startTime = Date.now();

  timer.id = setInterval(function(){
    timer.deltaTime = (Date.now()-timer.startTime);
    getFormattedTime(timer.deltaTime);
  },100);

  stopBtn.addEventListener('click', function(){
    clearInterval(timer.id);
  });
}

startBtn.addEventListener('click',startTim);

function setActiveBtn(target) {
  if(target.classList.contains('active')) {
    return;
  }

  startBtn.classList.remove('active');
  stopBtn.classList.remove('active');

  target.classList.add('active');
}

// ================================================================================

/*
 * Есть переменная quantity хранящиая в себе
 * текущее количество единиц какого-то товара на складе.
 *
 * Напиши функцию processOrder(value), получающую
 * кол-во товаров заказанных покупателем, и возвращающую промис.
 *
 * Для имитации проверки достаточного количества товаров
 * на складе используй setTimeout с задержкой 500мс.
 *
 * Если на складе товаров больше либо равно заказанному
 * количеству, функция возвращает промис который исполняется
 * успешно со строкой "Ваш заказ готов!".
 *
 * В противном случае, со строкой "К сожалению на складе не достаточно товаров!".
 *
 * Если же пользователь ввел не число, то промис выполняется с ошибкой
 * и значением "Некорректный ввод!".
 */

// const DELAY = 1000;
// const quantity = 100;

// const processOrder = (value) =>
//    new Promise((resolve) => {
//     setTimeout(() => {
//       return resolve(!isNaN(value) ? (quantity - value > 0 ? "Ваш заказ готов!" : "К сожалению на складе не достаточно товаров!") : 'Некорректный ввод!');

//   }, DELAY/2);
//   });

// function processOrder(amount) {
//   return Promise.resolve(!isNaN(amount) ? (goodsAmount - amount > 0 ? "Ваш заказ готов!" : "К сожалению на складе не достаточно товаров!") : 'Некорректный ввод!');
// }

// Вызовы функции для проверки
// processOrder(50)
// .then(console.log) // Ваш заказ готов!
//   .catch(console.log);

// processOrder(50)
//   .then(console.log) // Ваш заказ готов!
//   .catch(console.log);

// processOrder(500)
//   .then(console.log) // К сожалению на складе недостаточно товаров!
//   .catch(console.log);

// processOrder("lorem")
//   .then(console.log)
//   .catch(console.log); // Некорректный ввод!





// let prize = Math.floor(Math.random() * 2);

// function shooter(arrow) {
//     console.log("You'v made a shot");

//     const promise = new Promise((resolve, reject) => {
//         setTimeout(function () {
//             Math.random() > .5 ? resolve('nice') : reject("You'v Missed");
//         }, 200);
//     })
//     return promise;
// }

// function win() {
//     console.log("You Win");
// }

// function prizes() {
//     if (prize === 1) {
//         console.log('Beer')
//     } else {
//         console.log("Vodka");

//     }
// }

// shooter({})
// .then(nice => console.log(nice))
// .then(win)
// .then(prizes)
// .catch(miss => console.log(miss));