const readline = require('node:readline');
var msg = 'Hello World';
console.log(msg);

let a = 5;

let b = 6;


let c = a + b;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
rl.question(`What's your name?`, name => {
    console.log(`Hi ${name}!`);
    rl.close();
  });