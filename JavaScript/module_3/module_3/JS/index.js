const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  if (login.length >= 4 && login.length < 16) {
    // console.log('checked for length');
   return  true;
  } else {
   return  false;
  }
};
console.log ( 'Numbers of login -',isLoginValid("jbcfebfqkflqj"))

const isLoginUnique = function (allLogins, login) {
  
  if (allLogins.includes(login)) {
    return false;
    }
    else {
      return true;
  }
  
};
console.log ("New login -", isLoginUnique( logins,'Poly'));

const addLogin = function (allLogins, login) {
  if (!isLoginValid(login)){
    console.log ("Ошибка! Логин должен быть от 4 до 16 символов");
  }else {
      if (isLoginUnique(allLogins, login)) {
          allLogins.push(login);
          console.log('Логин успешно добавлен!');
      }else {
          console.log ('Такой логин уже используется!');
          
      }
  }
};

console.log (addLogin( logins,'Ajax'))