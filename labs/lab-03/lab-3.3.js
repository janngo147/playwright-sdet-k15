// const listNum = [12, 34, 1, 16, 28];
// console.log(listNum.sort(function (a, b) { return a - b }));

const listNum = [12, 34, 1, 16, 28];
let unsortedPosition = listNum.length - 1;
for (; unsortedPosition > 0; unsortedPosition--) {
    for (let index = 0; index < unsortedPosition; index++) {
        const leftNum = listNum[index];
        const rightNum = listNum[index + 1];
        if (leftNum > rightNum) {
            let temp = leftNum;
            listNum[index] = rightNum
            listNum[index + 1] = temp;
        }
    }
}
console.log(listNum);