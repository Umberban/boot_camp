function add(...arg){
    return arg.reduce((acc, el) => acc + el , 0);

}

console.log(add(1,2,3,4,5,6));
