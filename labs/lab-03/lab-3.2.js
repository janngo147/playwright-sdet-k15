const intArr = [1, 2, 3, 4, 5];
let minNum = intArr[0];
let maxNum = intArr[0];

for (let index = 0; index < intArr.length; index++) {
    if (intArr[index] < minNum) {
        minNum = intArr[index];
    }
    if (intArr[index] > maxNum) {
        maxNum = intArr[index];
    }
}
console.log(`Minimum number is: ${minNum}\nMaximum number is: ${maxNum}`);