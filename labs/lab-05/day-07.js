// MAP
// const readline = require('readline-sync');

// const givenStr = readline.question("Please input your sentence: ")
// let individualWords = givenStr.replace(/,/gi, "").split(" ");
// const groupWordMap = groupWord(individualWords);
// console.log(groupWordMap);

// function groupWord(individualWords) {
//     let wordMap = new Map();

//     for (const word of individualWords) {
//         if (!wordMap.has(word)) {
//             wordMap.set(word, 1)
//         } else {
//             wordMap.set(word, wordMap.get(word) + 1);
//         }
//     }
//     return wordMap;
// }


// OBJECT
const readline = require('readline-sync');

const givenStr = readline.question("Please input your sentence: ")
const wordCount = groupWords(givenStr)
console.log(wordCount);

function groupWords(givenStr) {
    const words = givenStr.replace(/,/gi, "").split(" ");
    let wordCount = {};
    for (const word of words) {
        if (wordCount[word]) {
            wordCount[word] += 1;
        } else {
            wordCount[word] = 1;
        }
    }
    return wordCount;
};