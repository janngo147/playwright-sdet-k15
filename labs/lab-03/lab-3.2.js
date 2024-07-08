let intArr = [1, 2, 3, 4, 5];
let minNum = intArr[0];
let maxNum = intArr[0];

for (let index = 0; index < intArr.length; index++) {
    if (minNum > intArr[index]) {
        minNum = intArr[index];
    }
    if (maxNum < intArr[index]) {
        maxNum = intArr[index];
    }
}
console.log(`Minimum number is: ${minNum}\nMaximum number is: ${maxNum}`);