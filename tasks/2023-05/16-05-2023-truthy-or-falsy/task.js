const allTruthy = (...arr) => arr.every(Boolean)

console.log(allTruthy(true, 1, 2))
console.log(allTruthy(true, true, true))
console.log(allTruthy(true, false, true))
console.log(allTruthy(true, 0, true))
console.log(allTruthy(true, undefined, true))