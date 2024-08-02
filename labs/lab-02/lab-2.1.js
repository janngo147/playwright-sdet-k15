/**
 * < 18.5: Underweight
 * 18.5 –> 24.9: Normal weight
 * 25 –> 29.9: Overweight
 * BMI of 30 or greater: Obesity
 */
const readline = require('readline-sync');
let currentHeight = Number(readline.question('Height of user (m):  '));
let currentWeight = Number(readline.question('Weight of user (kg):  '));

let currentBMI = currentWeight / Math.pow(currentHeight, 2);

const roundedBMI = currentBMI.toFixed(1);
console.log(`BMI = ${roundedBMI}`);

if (roundedBMI < 18.5) {
    console.log('Underweight');
}
else if (roundedBMI <= 24.9) {
    console.log('Normal weight');
}
else if (roundedBMI <= 29.9) {
    console.log('Overweight');
}
else {
    console.log('Obesity');
}