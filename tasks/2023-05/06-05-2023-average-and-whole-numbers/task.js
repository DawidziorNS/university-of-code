const isWhole = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length % 1 === 0

console.log(isWhole([1, 3]))
console.log(isWhole([1, 2, 3, 4]))