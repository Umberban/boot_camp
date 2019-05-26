'use strict';

import "./style.css";
import "./test.scss";

import {add, multi,plus} from "./double";



console.log(add(1,2,3,4,5,6));
console.log(multi(2));


// console.log(add.add(1,2,3,4,5,6));

// console.log(add.multi(2,2,2));

const btn = document.querySelector(".btn");
btn.addEventListener('click', plus);