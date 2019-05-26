"use strict";

// function add(...arg){
//     return arg.reduce((acc, el) => acc + el , 0);

// }

// function multi(num){
//     return num * 10;
// }

// export default {add, multi};

export  function add(...arg){
    return arg.reduce((acc, el) => acc + el , 0);

}

export function multi(num){
    return num * 10;
}


export function plus(){
 alert("FUCK");
}