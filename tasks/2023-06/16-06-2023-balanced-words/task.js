const wordVal = (w) => [...w].reduce((a, v) => a + ' abcdefghijklmnopqrstuvwxyz'.indexOf(v), 0)

const balanced = (word) => wordVal(word.slice(0, word.length >> 1)) === wordVal(word.slice(Math.ceil(word.length / 2)))

console.log(balanced('vegetation'))
console.log(balanced('at'))