'use strict';

const hulk = [
    {
        img: "https://images.pexels.com/photos/2121202/pexels-photo-2121202.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "Bruse",
        about: "HULK CRUSH",
        work: "AVENGER",
        done: true,
    },
    {
        img: "https://images.pexels.com/photos/2145931/pexels-photo-2145931.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "JACK",
        about: "HULK CRUSH",
        work: "AVENGER",
        done: true,

    },
    {
        img: "https://images.pexels.com/photos/2174610/pexels-photo-2174610.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "DOT",
        about: "HULK CRUSH",
        work: "AVENGER",
        done: false,

    },
    {
        img: "https://images.pexels.com/photos/2146386/pexels-photo-2146386.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "LOOP",
        about: "HULK CRUSH",
        work: "AVENGER",
        done: true,

    },
    {
        img: "https://images.pexels.com/photos/2172156/pexels-photo-2172156.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        name: "HERO",
        about: "HULK CRUSH",
        work: "AVENGER",
        done: false,

    }
];

const box = document.querySelector("#box").innerHTML.trim(),
    list = document.querySelector('.list'),
    compile = Handlebars.compile(box),
    result = compile(hulk);

    list.insertAdjacentHTML("afterbegin", result);

    // hulk.forEach(el => list.insertAdjacentHTML('afterbegin', compile(el)));
    
    //===========================================================

    
    let form = document.querySelector(".js-form");
let btnFilter = document.querySelector("button[type='submit']");
let btnClear = document.querySelector("button[type='reset']");

let filter = { size: [], color: [], release_date: [] };

function clear() {
  filter = { size: [], color: [], release_date: [] }
}

form.addEventListener('click', (event) => {
  if (event.target.type !== 'checkbox') return;

  const checkbox = event.target;

  if (filter[checkbox.name].includes(checkbox.value)) {
    filter[checkbox.name] = filter[checkbox.name].filter(item => item !== checkbox.value);
  } else {
    filter[checkbox.name].push(checkbox.value);
  }
});

btnFilter.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('filter', filter);

  const filterToUse = Object.keys(filter).filter(filterKey => filter[filterKey].length);

  const laptopsList = laptops.filter(laptop => filterToUse.every(filterToUseKey => filter[filterToUseKey].includes(String(laptop[filterToUseKey]))));

  console.log('result', laptopsList);
});

btnClear.addEventListener('click', clear);