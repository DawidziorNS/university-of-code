const positiveDominant = a => new Set(a.filter(x => x > 0)).size > new Set(a.filter(x => x < 0)).size

console.log(positiveDominant([1, 1, 1, 1, -3, -4]))
console.log(positiveDominant([1, 2, 3, 4, -3, -4]))
console.log(positiveDominant([0, -4, -1]))