const absoluteSum = (arr) => arr.reduce((acc, item) => acc + Math.abs(item), 0)

console.log(absoluteSum([2, -1, -3, 4, 8]))