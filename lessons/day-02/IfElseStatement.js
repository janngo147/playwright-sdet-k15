const readline = require('readline-sync');

// let myName = readline.question('Your name: ');
// let myAge= readline.question('Your age: ');
// console.log(`${myName}, ${myAge}`);

// let nextYearAge = Number(myAge) + 1;
// console.log(nextYearAge);

let arriveTime = readline.question('arriveTime: ');
let isHeOnTime = (arriveTime == 7);

if (isHeOnTime) {
    console.log('Let\'s talk!')
} else {
    console.log('Write a letter!');
}

if (!isHeOnTime) {
    console.log('Write a letter!');
} else {
    console.log('Let\'s talk!')
}

let msg = isHeOnTime ? 'Let\'s talk!' : 'Write a letter!';
console.log(msg);