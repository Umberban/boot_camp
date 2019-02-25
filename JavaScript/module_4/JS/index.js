"use strict";


const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    cheese: 40,
};

const order = {
    bread: 2,
    milk: 2,
    apples: 1,
    cheese: 1
};

function Cashier(name, productDatabase, ) {
    this.name = name;
    this.productDatabase = productDatabase;
    this.customerMoney = 0;
    this.getCustomerMoney = (value) => this.customerMoney = value;
    this.countTotalPrice = function (order) {
        let show;
        let sum = 0;
        for (let key in order) {
            show = order[key] * productDatabase[key];
            sum = sum += show
        }
        return sum
    }
    this.countChange = function(totalPrice){
       if (this.customerMoney < totalPrice) {
        //    this.onError()
        return null
       } else {
           let change = this.customerMoney - totalPrice;
            
        //    this.onSuccess(change)
        return change
       }
       
    }
    this.onSuccess = (change) => console.log(`Спасибо за покупку, ваша сдача ${change}!`);
    this.onError = () => console.log('Очень жаль, вам не хватает денег на покупки');
    this.reset = () => this.customerMoney = 0;
}


const mango = new Cashier('Mango', products);

console.log(mango.name); // Mango
console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
console.log(mango.customerMoney); // 0
const totalPrice = mango.countTotalPrice(order);
console.log(mango.countTotalPrice(order));

mango.getCustomerMoney(300);

// Проверяем что в поле с деньгами пользователя
console.log(mango.customerMoney); // 300

// Вызываем countChange для подсчета сдачи
const change = mango.countChange(totalPrice);
// Проверяем результат подсчета денег
if(change !== null) {
    // При успешном обслуживании вызываем метод onSuccess
   mango.onSuccess(change); // Спасибо за покупку, ваша сдача 190
 } else {
   // При неудачном обслуживании вызываем метод onError   
   mango.onError(); // Очень жаль, вам не хватает денег на покупки
 }
 

// Проверяем что нам вернул countChange
console.log(change); // 190

mango.reset();

// Проверяем значения после reset
console.log(mango.customerMoney); // 0