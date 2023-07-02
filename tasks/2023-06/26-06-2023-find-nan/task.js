const findNaN = (arr) => arr.findIndex(isNaN)
const findNaNAlternate = (arr) => arr.map(String).indexOf('NaN')

console.log(findNaN([1, 2, NaN, 3]))
console.log(findNaN([1, 2, 3, 4, 5]))

console.log(findNaNAlternate([1, 2, NaN, 3]))
console.log(findNaNAlternate([1, 2, 3, 4, 5]))