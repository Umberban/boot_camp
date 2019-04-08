const filterFromArray = function(mas, ...num) {
let arr = mas.slice();
    for(let i of num){
        if(arr.includes(i)){
        arr.splice(arr.indexOf(i),1);
        }
    }
  return arr;
}; 

// Вызовы функции для проверки
console.log(
  filterFromArray([1, 2, 3, 4, 5], 2, 4)
); // [1, 3, 5]

console.log(
  filterFromArray([12, 4, 3, 8, 17], 3, 29, 18, 4)
); // [12, 8, 17]