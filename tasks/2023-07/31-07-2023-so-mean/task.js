const mean = (arr) => Number((arr.reduce((a, b) => a + b) / arr.length).toFixed(2))

console.log(mean([2, 3, 2, 3]))