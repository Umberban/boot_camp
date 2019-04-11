const filterFromArray = function(mas, ...num) {
let arr = [];
    for(let i of mas){
        if(!num.includes(i)){
        arr.push(i);
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
