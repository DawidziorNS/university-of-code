const elementSum = (arr) => arr.reduce((a, b) => a + (typeof b === 'number' ? b : 0), 0)

console.log(elementSum([false, true, "123", 1, 2, 3, 4, 5]))