'use strict'

// const sharm = 15;
// const hurgada = 25;
// const taba = 6;
// const num = prompt ('Сколько мест Вам нужно ?', 1);
// const numSeats = Number(num);

// let Miss = "Ошибка ввода";
// let sorry = "Нам очень жаль, приходите еще!";

// let IsValidInput = num !== null && !Number.isNaN(numSeats);


// if (IsValidInput) {
//      switch (numSeats) {
//          case sharm:
//          const sharmSeat = confirm ('Есть место в группе sharm');
//          if (numSeat = 15 || numSeat > 6) {
//             console.log (sharmSeat);

//          } else if (!sharmSeat) {
//             alert ('Нам очень жаль, приходите еще!');

//          } else {
//             alert ('Приятного путешествия в группе sharm');
//          }
//          break;

//          case hurgada:
//          const hurgadaSeat = confirm ('Есть место в группе hurgada');
//          if (numSeat = 25 || numSeat > 15) {
//             console.log (hurgadaSeat);
//          } else if (hurgadaSeat) {
//            alert ('Приятного путешествия в группе hurgada')

//         } else {
//             alert ('Нам очень жаль, приходите еще!')
//         }
//          break;

//          case taba:
//          const tabaSeat = confirm ('Есть место в группе taba');
//          if (numSeat = 6 || numSeat < 6) {
//             console.log (tabaSeat);
         
//         } else if (tabaSeat = 1) {
//             alert ('Приятного путешествия в группе taba')

//          } else {
//              alert ('Нам очень жаль, приходите еще!')
//          }
//          break;
         
//          default:
//          alert ('Извините, столько мест нет ни в одной группе!');
//      }
// }


// const sharm = 15;
// const hurgada = 25;
// const taba = 6;

// const requiredPlaces = prompt ('Enter number of places');

// if(Number.isInteger (+requiredPlaces) && +requiredPlaces > 0) {
//     if (requiredPlaces <= sharm) {
//         if (confirm ('do you want to stay in sharm')) {
//             alert ('Welcome to sharm');
//         }else {
//             alert ('Sorry , come again latter');
//         }

//     } else if (requiredPlaces <= hurgada){
//         if (confirm ('do you want to stay in hurgada')) {
//             alert ('Welcome to hurgada');
//         }else {
//             alert ('Sorry , come again latter');
//         }
//     }else if (requiredPlaces <= taba) {
//         if (confirm ('do you want to stay in taba')) {
//             alert ('Welcome to taba');
//         }else {
//             alert ('Sorry , come again latter');
//         }
//     }else {
//         alert ("Not enogth places !!!");
//     }
// } else if (!requiredPlaces) {
//     alert ('Нам очень жаль, приходите еще!');
// }


const sharm = 15;
const hurgada = 25;
const taba = 6;
let hotel = "";
const requiredPlaces = prompt ('Enter number of places');


if(Number.isInteger (+requiredPlaces) && +requiredPlaces > 0) {
    if (requiredPlaces <= taba) {
       hotel = 'taba';
    } else if (requiredPlaces <= sharm){
        hotel = 'sharm'; 
    }else if (requiredPlaces <= hurgada) {
        hotel ='hurgada';
    }else {
        alert ("Not enogth places !!!");
    };
    if (confirm (`do you want to stay in ${hotel}`)) {
        alert (`Welcome to ${hotel}`);
    }else {
        alert ('Sorry , come again latter');
    }
} else if (!requiredPlaces) {
    alert ('Нам очень жаль, приходите еще!');
}