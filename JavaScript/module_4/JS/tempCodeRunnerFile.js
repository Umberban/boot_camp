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

  function Cashier(name, productDatabase,) {
    this.name = name;
    this.productDatabase = productDatabase;
    this.customerMoney = 0;
    this.getCustomerMoney =  (value) => this.customerMoney = value;
    this.totalPrice = 0;
    
    this.countTotalPrice = function (order) {
        let show;
        let sum = 0;
        for (let key in order){
           show =  order[key] * productDatabase[key];
           sum = sum += show   
        }
        // console.log (this.totalPrice)
        return sum

    }

  }
  
  
  const mango = new Cashier('Mango', products);

  console.log(mango.name); // Mango
console.log(mango.productDatabase); // ссылка на базу данных продуктов (объект products)
console.log(mango.customerMoney); // 0
const totalPrice = mango.countTotalPrice(order);
console.log(mango.countTotalPrice(order))