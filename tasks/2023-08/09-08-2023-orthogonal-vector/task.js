const isOrthogonal = (vector1, vector2) => vector1.reduce((sum, val, index) => sum + val * vector2[index], 0) === 0

console.log(isOrthogonal([1, 2], [2, -1]))
console.log(isOrthogonal([3, -1], [7, 5]))