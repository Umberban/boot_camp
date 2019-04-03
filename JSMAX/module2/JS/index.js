'use strict';

// 1) Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
// let arr = ['a', 'b', 'c'];
// let arr2 = [1, 2, 3];

// console.log(arr.concat(arr2));

// 2) Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
// let arr = ['a', 'b', 'c'];

// arr.push(1,2,3);
// console.log(arr);
// 3) Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// console.log(arr1.concat(arr2));


// 4) Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].

// let arr1 = [1, 2, 3];

// arr1.reverse();
// console.log(arr1)

// 5) Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// let arr1 = [1, 2, 3];

// arr1.push(4, 5 ,6);

// console.log(arr1);

// 6) Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

// let arr1 = [1, 2, 3];

// arr1.unshift(4,5,6);
// console.log(arr1);


// 7)  Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.

// :sunglasses: Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.

// let arr = ['js', 'css', 'jq'];

// console.log(arr[0]);
// console.log(arr[2]);


// 9) Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.slice(0,3);
// console.log(newArr);

// 10) Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5]. Скрыть решение.
// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.slice(3);
// console.log(newArr);




// 11) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// let arr = [1, 2, 3, 4, 5];
//  arr.splice(1,2);
// console.log(arr);


// 12)  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4]. Показать решение.

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.splice(1,3);
// console.log(newArr);


// 13) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5]. Показать решение.

// let arr = [1, 2, 3, 4, 5];
// arr.splice(3,0,'a','b','c');
// console.log(arr);


// 14) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']. Показать решение. (edited

// let arr = [1, 2, 3, 4, 5];
// arr.splice(1,0,'a','b');
// arr.splice(6,0,'c');
// arr.splice(8,0,'e');
// console.log(arr);

// // 1) Вибираємо випадкове число (від 0 до довжини масива);
// let arr = ['a','b','c','h','x','b'];
// let rand = Math.floor(Math.random()*arr.length);
// console.log(arr[rand]);
// // 2) Записати в змінну звернення типу масив[індекс];
    // let arr = ['a','b','c','h','x','b'];
    // let i = arr[2];
    // console.log(i);
// // 3) Вивести змінну з пунтку 2 в алерт;
// const animals = ['cat', 'dog', 'horse', 'cow'];
// let index = Math.floor(Math.random()*animals.length);
// // 1) Через prompt вводимо свій варіант тваринки
//     const user = prompt("Enter any animal");
// // 2) Варіант компютера записати в змінну
//     let comp = animals[index];
// // 3) Порівнюємо наш варіант з копютерним
//     if(comp === user){
//         alert('Win');
//     }else{
//         alert(`You Lost ,correct answer is ${comp}`);
//     }
// 3,1) Якщо варіанти співпали тоді виводимо алертом що юзер виграва.
// 3,2) Якщо варіанти не співпали кажемо що користувач програв і виводимо варіант компютера.
// Написати гру Камінь Ножиці Папір.
    let arr = ['Камінь','Ножиці','Папір'];
    let rand = Math.floor(Math.random()*arr.length);
    const comp = arr[rand];
    console.log(comp);
    const user = prompt('Введите  Камінь, Ножиці, Папір');
    if(comp === user){
        alert(`Nichiya, Your answer was ${user}, computer  answer is ${comp} `);
    }else if(comp === arr[0] && user === arr[1] || comp === arr[1] && user === arr[2] || comp === arr[2] && user === arr[0]){
        alert (`POTRACHENO, Your answer was ${user}, computer answer was ${comp} `);
    }else if (comp === arr[1] && user === arr[0] || comp === arr[2] && user === arr[1] || comp === arr[0] && user === arr[2]){
        alert(`WIN, Your answer was ${user}, computer  answer is ${comp}`);
    }else {
        alert('Введите  Камінь, Ножиці, Папір');
    }

// Варіанти вибору потрібно зберігати в масиві
// Користувач вводить свій варіант
// Компютер вибирає свій рандомний варівант з масиву
// Первіряємо вибір користувача і вибір компютера. 
// Опрацювати всі варіанти:
// 1) Варіанти де виграє користувач
// 2) Варіанти де виграє компютер
// 3) Варіанти де виходить нічия.


// // 1) Записуємо в змінну строку з промта
//     let str = prompt('Enter any text','');
// // 2) Зробити строку масивом
//     let arr = str.split(' ');
// // 3) Скопіювати масив
//     let newArr = arr.slice();
// // 4) Реверсимо масив
//     newArr.reverse();
// // 5) З масивів робимо строки
//   let str2 = newArr.join(" ");
// // 6) Порівнюємо дві строки і виводимо результат в консоль;
// console.log(str);
// console.log(str2);


// let logins = ['rew', 'qwewwe', 'apple', 'js', 'row', 'col']

// // 1) Запитати логін
// const login = prompt('Enter your Login');
// // 2) Перевірити чи існує логін в базі
// logins.includes(login)? alert('Такий логін вже існує'):alert("Вітаємо");
// 3) Якщо логін існує вивести алерт ("Такий логін вже існує")
// 4) Якщо логін не існує вивести алерт ("Вітаємо") 



