const gerFrequencies = (arr) => arr.reduce((a, b) => ({...a, [b]: a[b] ? a[b] + 1 : 1}), {})

console.log(gerFrequencies(['A', 'A']))
console.log(gerFrequencies(['A', 'B', 'A', 'A', 'A']))
console.log(gerFrequencies(['A', 'B', 'C', 'A', 'A']))