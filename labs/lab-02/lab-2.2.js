const readline = require('readline-sync');
let num = Number(readline.question('Please input a number:  '));

if (num % 2 === 0) {
    console.log(`${num} is an even number`)
}
else if (num % 2 !== 0) {
    console.log(`${num} is an odd number`)
}
else {
    console.log('Invalid number')
}