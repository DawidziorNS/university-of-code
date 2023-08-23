const getMiddle = (word) => {
    const wordLength = word.length
    return wordLength % 2 !== 0 ? word[Math.floor(wordLength / 2)] : word[wordLength / 2 - 1] + word[wordLength / 2]
}

console.log(getMiddle("test"))
console.log(getMiddle("testing"))
console.log(getMiddle("middle"))
console.log(getMiddle("A"))