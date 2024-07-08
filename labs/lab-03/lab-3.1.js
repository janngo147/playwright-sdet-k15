let intArray = [1, 2, 3, 4, 5];
let evenNum_count = 0;
let oddNum_count = 0;

for (let index = 0; index < intArray.length; index++) {
    if (intArray[index] % 2 === 0) {
        evenNum_count++;
    }
    else {
        oddNum_count++;
    }
}
console.log(`Even numbers: ${evenNum_count}\nOdd numbers: ${oddNum_count}`);