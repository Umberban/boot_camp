"use strict";

( num => {
    const arr = [1, 2, 3, 4, 5];
  
    return console.log(arr.reduce((acc,el) => acc + el * num, 0));
  })(2);


  const myFunc = () =>{
      const getName = () => "Sergey";
      const getLastName = () => "Booms";
      return({
          avg:getName,
          getLastName
      });
  };

  console.log(myFunc().getName());


  let a ,b = 10;

  a=b<100?(console.log(a),a=20,b=9):b++

  let foo = {
      value: 10,
  }

  console.log(foo + "3");
  

  console.log(0/function(){});


  console.log(Math.random()
  .toString(36)
  .substring(2, 15));
  