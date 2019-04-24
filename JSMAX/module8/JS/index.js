'use strict';

/*
  Напишите скрипт который реализует следующий функционал.
  
  Есть кнопка с классом button, текст которой отображает 
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/



// const btn = document.querySelector('.button');

// btn.addEventListener('click', plus);

// function plus(){
//     btn.textContent ++;
// }


/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку 
  получите числа которые бьудут введены в инпуты и запишите их сумму в span.result.
*/

// const exp = document.querySelector(".expression");
// const btn = document.querySelector("button");

// const first = exp.children[0];
// const second = exp.children[2];
// const result = exp.children[4];

// btn.addEventListener('click', plus);

// function plus (){
//     result.textContent = Number(first.value) + Number(second.value);
// }


/*
  Есть счетчик (спан) и кнопки +1, -1, которые должны увеличивать и уменьшать значение счетчика на 1. 
  
  - Создайте класс Counter, который хранит одно поле value - текущее значение счетчика
  - Класс принимает один параметр - onChange, функцию для обновления интерфейса при изменении счетчика
  - Добавьте классу методы increment и decrement для увеличения и ументшение значения счетчика
  - Привяжите вызовы методов и значение счетчика к раметке
*/


// class Counter {
//     constructor(onChange){
//         this.value = 0;
//         this.onChange = onChange;
//     }
    
//     get increment(){
//         this.value ++;
//         this.onChange(this.value);
//     }
    
//     get decrement(){
//         this.value --;
//         this.onChange(this.value);
//     }

// }

// const result  = document.querySelector('.value');

// function onChange(value){
//     result.textContent = value;
// }

// const counter = new Counter(onChange);

// const inc = document.querySelector('button[data-action ="add"]');
// const dec = document.querySelector('button[data-action ="sub"]');

// inc.addEventListener("click", () => counter.increment);
// dec.addEventListener("click", () => counter.decrement);


/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/


// const form = document.querySelector('.question-form');
// const chkd = document.querySelectorAll('input');
// const result = document.querySelector('.result');

// form.addEventListener('submit', show );

// function show(e) {
//   e.preventDefault();
//   Array.from(chkd).find(i => i.checked === true ? result.innerHTML = ` Result:${i.parentElement.textContent};` : null);
// }


/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/

// const images = document.querySelector('.images');

// images.addEventListener('click', show);

// function show(e){
//     alert(e.target.src);
// }


/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/


// const list = document.querySelector('.list');

// list.addEventListener('click', destroi);

// function destroi({target}){
// if(target.dataset.action === "delete"){
//     target.parentElement.remove();
// }
// }


/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/

// const list = document.querySelector('.input-list');

// list.addEventListener('focusout', validator);

// function validator({target}){
//   let x = target.value;

//   ['invalid', 'valid'].forEach(i => target.classList.remove(i));

//   if( x.length === +target.dataset.length){
//     target.classList.add ('valid');
//   }else if(x.length === 0 ){
//     ['invalid', 'valid'].forEach(i => target.classList.remove(i));
//   } else{
//     target.classList.add('invalid');
//   }
// }


/*
  Напишите скрипт который:
    
    - При фокусе текстового поля, в p.message рендерит строку "Input is in focus!"
    - При наборе текста в инпуте (событие input), текущее его значение должно 
      отображаться в p.input-value 
*/

// const message = document.querySelector('.message');
// const input = document.querySelector('.input');
// const result = document.querySelector('.input-value');

// input.addEventListener('focusin',rend);
// input.addEventListener('input', newInfo);

// function newInfo(e){
//   result.textContent = `Current input value: ${e.target.value}`;
// }

// function rend(){
//   message.textContent = "Input is in focus!";
// }



/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/



const btn = document.querySelector(".btn");
const modal = document.querySelector(".js-modal-backdrop");
const clsd = document.querySelector(".close-btn");

btn.addEventListener("click", show);
modal.addEventListener("click", hide);


function show(){
  modal.classList.remove("modal-hidden");
}

function hide({target}) {
  target.dataset.action === "close-modal" || target === modal ?modal.classList.add('modal-hidden'):null;
  
}




/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пунктов меню может быть произвольное количество, используйте
  прием делегирование событий. Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/

 const menu = document.querySelector(".js-menu");

menu.addEventListener("click", clack);

function clack(e) {
  e.preventDefault();
  foer(e.target);
}

function foer(secondActive) {
  const active = menu.querySelector("a.active");

  if (active) {
    active.classList.remove("active");
  }

secondActive.classList.add("active");
}