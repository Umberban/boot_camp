'use strict'

const autorizeLog = prompt('Enter your login');
const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
const canseled = 'Отменено пользователем!';
const wrongLog = 'Доступ запрещен, неверный логин!';
const helloWorld = 'Добро пожаловать!';
const wrongPas = 'Доступ запрещен, неверный пароль!';


if (autorizeLog === null) {
    alert (canseled);
 } else if(autorizeLog === adminLogin) {
    let autorizePass = prompt ('Enter your password');
    if (autorizePass === null) {
        alert (canseled);
    } else if (autorizePass === adminPassword) {
        alert (helloWorld);
    } else {
        alert (wrongPas);
    }
 } else {
    alert (wrongLog);
 };



