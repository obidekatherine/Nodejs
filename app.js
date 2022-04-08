/*const amount = 20;

if(amount > 10) {
  console.log('You need more money');
} else {
  console.log('You have enough money');
}

console.log(`Hello World! My first node code!`);*/

//intervals
/*setInterval(() => {
  console.log('Hello World!');
}, 1000);*/

//Modules
//CommonJS, every file is a module by default
//Modules - Encapsulated Code (only share minimum)

const name = require('./1-modules');
const sayName = require('./2-modules');

//console.log(name);

sayName(name.place);