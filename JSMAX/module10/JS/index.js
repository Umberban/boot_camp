'use strict';

// let newDate;

// const url = `https://api.myjson.com/bins/k9i31`;


// fetch("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11")
//     .then(response =>{
//         if (response.ok) return response.json();
//         throw new Error("Error");
//     })
//     .then(data => console.log(data))
//     .catch(error =>console.error(error));

//   function getPost(num) {
//      return fetch(`https://jsonplaceholder.typicode.com/photos/${num}`)
//       .then(response => response.json());
//   } 

//   getPost(5)
//   .then(data=> console.log(data))



// const nameM = {
//     name: 'Rodion',
//     lastName: 'Romanov',
//     hobby: {
//         eat: true,
//         sleep: true,
//         rave: false,
//         repeat: true,
//     },
//     hi: "hello",
// };

// const url = `https://jsonplaceholder.typicode.com/posts`;

// const settings = {
//     method: "POST",
//     body: JSON.stringify(nameM),
//     headers: {
//         "Content-type":"application/json"
//     },
// };
// fetch(url, settings)
// .then(response => response.json())
// .then(data => console.log(data))


// const url = `https://jsonplaceholder.typicode.com/posts/1`;

// const settings = {
//     method: "DELETE"
// };
// fetch(url, settings)
// .then(response => response.json())
// .then(data => {
//     console.log(data);
//     data.id = 100;
//     console.log(data);
// });



// const body = document.body,
//     wrap = document.createElement("form"),
//     text = document.createElement('h2'),
//     input = document.createElement('input'),
//     btn = document.createElement('input');

// body.append(wrap);
// text.textContent = "Enter your password";
// wrap.append(input, btn, text);
// btn.setAttribute("type", "submit");

// wrap.addEventListener("submit", pushLocal);

// function pushLocal() {
//     localStorage.setItem('txt', input.value);
//     getLocal();
// }

// function getLocal() {
//     text.textContent = localStorage.getItem('txt');
// }

// getLocal();


/*
  Написать функцию fetchCountryData, которая использует
  API_URL + текущее значение input для составления запроса.
  
  Формат полного url таков:
    https://restcountries.eu/rest/v2/name/имя-страны
    
  С помощью fetch сделать запрос по составленому адресу. 
  Обязательно обработать вариант с ошибкой запроса используя catch. 
  
  Результат запроса вывести в поле result в формате:
    Country name: имя страны
    Capital: столица
    Main currency: название денежной единицы
    Flag: флаг страны
  
  Все необходимые данные есть в ответе от API.
  
  PS: при отправке формы перезагружается страница,
  решите эту задачу вспомнив о том, как остановить
  поведение по умолчанию.
*/

const input = document.querySelector("input");
const form = document.querySelector(".search-form");
const result = document.querySelector(".result");

form.addEventListener("submit", fetchCountryData);

/*
  @param {FormEvent} evt
*/
function fetchCountryData(evt) {
    evt.preventDefault();
fetch(`https://restcountries.eu/rest/v2/name/${input.value}`)
.then(res => res.json())
.then(data => {
    console.log(data);
    const country = data.reduce((acc, el)=> acc + `<p>Country name:${el.name}</p><p>Capital: ${el.capital}</p><p>Main currency: ${el.currencies[0].code}</p><p>Flag: <img style="width:300px" src="${el.flag}"></p>`,'') ;
    result.innerHTML = country;
    
})
.catch(result.innerHTML= `<p>Netu Takoi Strani</p>`);
}
