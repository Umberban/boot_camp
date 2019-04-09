const user = {
    name: "Mango",
    age: 20,
    hobby: "html",
    premium: true
  };

  user.mood = "happy";
  user.hobby = "javascript";
  user.premium = false;

for(let i of Object.keys(user)){
    console.log(`${i} : ${user[i]}`)
}

for(let i of Object.entries(user)){
    console.log(`${i[0]} : ${i[1]}`);
}
