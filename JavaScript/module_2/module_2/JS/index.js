'use stricts'

let input;
const numbers =[];
let total = 0;

do {
  input = Number(prompt ('Enter Number'));
  if (input !== 0) {
    numbers.push(input);
  }
  console.log (input);
  console.log (numbers);
}
while (input);

if (numbers.length !== 0) {
  for (const value of numbers) {
    total +=value
  }
};
console.log ('The sum is:' + total);