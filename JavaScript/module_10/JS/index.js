'use strict';

/*
  Написать приложение для работы с REST сервисом, 
  все функции делают запрос и возвращают Promise 
  с которым потом можно работать. 
  
  Реализовать следующий функционал:
  - функция getAllUsers() - должна вернуть текущий список всех пользователей в БД.
  
  - функция getUserById(id) - должна вернуть пользователя с переданным id.
  
  - функция addUser(name, age) - должна записывать в БД юзера с полями name и age.
  
  - функция removeUser(id) - должна удалять из БД юзера по указанному id.
  
  - функция updateUser(id, user) - должна обновлять данные пользователя по id. 
    user это объект с новыми полями name и age.
  Документацию по бэкенду и пример использования прочитайте 
  в документации https://github.com/trostinsky/users-api#users-api.
  Сделать минимальный графический интерфейс в виде панели с полями и кнопками. 
  А так же панелью для вывода результатов операций с бэкендом.
*/
const body = document.body;
class Req {
  constructor(){
    this.form = document.createElement('form');
    this.inputName = document.createElement('input');
    this.inputAge = document.createElement('input');
    this.btnGet = document.createElement('input');
    this.btnGetId = document.createElement('input');
    this.btnDelete = document.createElement('input');
    this.btnAdd = document.createElement('input');
    this.btnUpdate = document.createElement('input');
    this.reset = document.createElement('button');
    this.result = document.createElement('div');
    this.createElement = this.createElement.bind(this);
    this.getAllUsers = this.getAllUsers.bind(this);
    this.createUsersList = this.createUsersList.bind(this);
    this.getUserById = this.getUserById.bind(this);
    this.showUserInfo = this.showUserInfo.bind(this);
    this.addUser = this.addUser.bind(this);
    this.successAdd = this.successAdd.bind(this);
    this.removeUser = this.removeUser.bind(this);
    this.successDelete = this.successDelete.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.successUpdate = this.successUpdate.bind(this);
    this.listner = this.listner.bind(this);
    window.addEventListener("DOMContentLoaded", this.createElement)
    
  }
  

  
 createElement(){
this.inputName.placeholder = "Enter name";
this.inputAge.placeholder = "Enter Age";
this.btnGet.setAttribute("type", "submit");
this.btnGet.value = "Get Users";
this.btnGetId.setAttribute("type", "submit");
this.btnGetId.value = "Get Users by Id";
this.btnDelete.setAttribute("type", "submit");
this.btnDelete.value = "Delete User By Id";
this.btnAdd.setAttribute("type", "submit");
this.btnAdd.value = "Add Users";
this.btnUpdate.setAttribute("type", "submit");
this.btnUpdate.value = "Update User";
this.reset.textContent = "Reset";
body.append(this.form, this.result);
this.form.append(this.inputName, this.inputAge, this.btnGet, this.btnGetId, this.btnDelete, this.btnAdd, this.btnUpdate, this.reset);

this.form.addEventListener('click', this.listner);
}
getAllUsers() {
  fetch('https://test-users-api.herokuapp.com/users/')
    .then(res => res.json())
    .then(data => this.createUsersList(data.data));
}
createUsersList(arr) {
  let table = document.createElement('table');
  this.result.append(table);

  let tr1 = document.createElement('tr');
  table.append(tr1);

  let td1 = document.createElement('th');
  td1.textContent = 'ID';

  let td2 = document.createElement('th');
  td2.textContent = 'NAME';

  let td3 = document.createElement('th');
  td3.textContent = 'AGE';

  tr1.append(td1, td2, td3);
  for (let el of arr) {
    let tr2 = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.style.width ="400px";
    td1.style.textAlign = "center";
    td1.textContent = el.id;

    let td2 = document.createElement('td');
    td2.style.width = "300px";
    td2.style.textAlign = "center";
    td2.textContent = el.name;

    let td3 = document.createElement('td');
    td3.style.width = "300px";
    td3.style.textAlign = "center";
    td3.textContent = el.age;

    tr2.append(td1, td2, td3);
    table.append(tr2);
  }
}

getUserById() {
  event.preventDefault();
  this.result.innerHTML = "";
  fetch(`https://test-users-api.herokuapp.com/users/${this.inputName.value}`)
    .then(res => res.json())
    .then(data => this.showUserInfo(data.data))
    .catch(() => this.result.innerHTML = "Thet user doesent exist");
}

showUserInfo(obj) {
  if (obj.length > 0) {
    this.result.innerHTML = "Enter valid ID";
  } else {
    const wrap = document.createElement('div');
    const id = document.createElement('p');
    const name = document.createElement('p');
    const age = document.createElement('p');

    id.textContent = `ID ${obj.id}`;
    name.textContent = `NAME ${obj.name}`;
    age.textContent = `AGE ${obj.id}`;

    this.result.append(wrap);
    wrap.append(id, name, age);
  }
}

addUser() {
//   event.preventDefault();
  let obj = {
      name: this.inputName.value,
      age: this.inputAge.value,
  };
  fetch('https://test-users-api.herokuapp.com/users/', {
          method: 'POST',
          body: JSON.stringify(obj),
          headers: {
              "Content-type": "application/json; charset=UTF-8"
          }
      })
      .then(response => response.json())
      .then(data => this.successAdd(data))
      .catch(error => console.log('ERROR' + error));
}

successAdd(data) {
  if (data.status == 500) {
      console.log(data);
      this.result.textContent = 'Введите валидное имя пользователя(имя) и валидный возраст(число)!';
  } else {
      console.log(data);
      this.result.textContent = 'Пользователь успешно добавлен!';
  }
}

removeUser() {
    event.preventDefault();
    fetch(`https://test-users-api.herokuapp.com/users/${this.inputName.value}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then((data) => this.successDelete(data))
        .catch(error => console.log('ERROR' + error));
}

successDelete(data) {
  if (data.data === null || data.status === 500 || data.status === 404) {
      console.log(data.data);
      this.result.textContent = 'Пользователя с таким ID не существует!';
  } else {
      console.log(data);
      this.result.textContent = 'Пользователь успешно удален!';
  }
}

updateUser() {
  event.preventDefault();
  let userAge = Math.floor(Math.random() * 100);
  let obj = {
      name: this.inputName.value,
      age: userAge,
  };
  fetch(`https://test-users-api.herokuapp.com/users/${this.inputAge.value}`, {
          method: 'PUT',
          body: JSON.stringify(obj),
          headers: {
              "Content-type": "application/json; charset=UTF-8"
          }
      })
      .then(resolve => resolve.json())
      .then(data => this.successUpdate(data))
      .catch(error => console.log('ERROR' + error));
}

successUpdate(data) {
  if (data.status === 404) {
      console.log(data.data);
      this.result.textContent = 'Пользователя с таким ID не существует!';
  } else {
      console.log(data);
      this.result.textContent = 'Данные пользователя успешно изменены!';
  }
}


listner({target}){
  event.preventDefault();
  if(target.value === "Get Users"){
    this.getAllUsers();
  }else if(target.value === "Get Users by Id"){
    this.getUserById();
  }else if(target.value === "Delete User By Id"){
    this.removeUser();
  }else if(target.value === 'Update User'){
    this.updateUser();
  }else if (target.value === "Add Users"){
    this.addUser();
  }else{
    if(target.textContent === "Reset") location.reload();
  }
}

}

const request = new Req();


