const readline = require('readline-sync');

const givenStr = readline.question("Please input your sentence: ")
let individualWords = givenStr.replace(/,/gi, "").split(" ");
const groupWordMap = groupWord(individualWords);
console.log(groupWordMap);

function groupWord(individualWords) {
    let wordMap = new Map();

    for (const word of individualWords) {
        if (!wordMap.has(word)) {
            wordMap.set(word, 1)
        } else {
            wordMap.set(word, wordMap.get(word) + 1);
        }
    }
    return wordMap;
}