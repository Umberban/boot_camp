'use stircts'

// const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
// let attempts = 3;
// let input;

// do {
//     input = prompt('Enter Number');
//     for (let value of passwords) {
        
//         if (input === value) {
//             alert('Wellcome');
//             break;
//         } else if (input === null) {
//             alert ("goodbye");
//             break;

//         } else {
//             attempts -= 1;
//             alert(`Try outs = ${attempts}`)
//         }
//     }
// } while (attempts === null);

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;
let inputPassword;
do {
  inputPassword = prompt('Enter password: ');
  if (passwords.includes(inputPassword)) {
    alert('Добро пожаловать!');
    break;
  }
  else if (inputPassword !== null) {
    attempts -= 1;
    if(attempts > 0){
      alert(`Неверный пароль, у вас осталось ${attempts} попыток`);
    }
    else {
      alert('У вас закончились попытки, аккаунт заблокирован!');
    }
  }
} while (attempts > 0 && inputPassword !== null);



