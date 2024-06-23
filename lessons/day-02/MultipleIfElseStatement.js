/**
 * <= 18.5: Underweight
 * 18.5 –> 24.9: Normal weight
 * 25 –> 29.9: Overweight
 * BMI of 30 or greater: Obesity
 */
const readline = require('readline-sync');
let userHeight = Number(readline.question('Height of user (m):  '));
let userWeight = Number(readline.question('Weight of user (kg):  '));

let BMI = userWeight / (userHeight * 2);

let roundedBMI = BMI.toFixed(1);
console.log(`BMI = ${roundedBMI}`);

if (roundedBMI <= 18.5) {
    console.log('Underweight. You should gain more weight.');
}
else if (roundedBMI >= 18.5 && roundedBMI <= 24.9) {
    console.log('Normal weight. You are doing good job.');
}
else if (roundedBMI >= 25 && roundedBMI <= 29.9) {
    console.log('Overweight. You should practice more.');
}
else if (roundedBMI >= 30) {
    console.log('Obesity. You should eat more healthier food and do exercise regularly to lose weight.');
}
else {
    console.log('Data is incorrect')
}