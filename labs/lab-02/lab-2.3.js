/**
 * < 18.5: Underweight
 * 18.5 –> 24.9: Normal weight
 * 25 –> 29.9: Overweight
 * BMI of 30 or greater: Obesity
 */
const readline = require('readline-sync');
let currentHeight = Number(readline.question('Height of user (m):  '));
let currentWeight = Number(readline.question('Weight of user (kg):  '));

const currentBMI = (currentWeight / (currentHeight ** 2)).toFixed(1);
console.log(`Current BMI = ${currentBMI}`);

const standardBMI = 24.9;
const standardWeight = (currentHeight ** 2) * standardBMI;

if (currentBMI < 18.5) {
    console.log(`Underweight. You should gain at least ${(standardWeight - currentWeight).toFixed(1)} (kg).`);
}
else if (currentBMI <= standardBMI) {
    console.log('Normal weight. You are doing good job.');
}
else if (currentBMI <= 29.9) {
    console.log(`Overweight. You should decrease at least ${(currentWeight - standardWeight).toFixed(1)} (kg).`);
}
else if (currentBMI >= 30) {
    console.log(`Obesity. You should eat more healthy food and do exercise regularly to lose at least ${(currentWeight - standardWeight).toFixed(1)} (kg).`);
}
else {
    console.log('Data type is incorrect')
}