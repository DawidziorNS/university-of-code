const numbers = Array.from({ length: 10 }, (_, index) => index + 1);

const missingNum = (arr) => numbers.filter(elem => !arr.includes(elem)).at(0)

console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]))
