const evenOnly = a => a.filter((x, i) => x % 2 === 0 && i % 2 === 0)

console.log(evenOnly([1, 3, 2, 6, 4, 8]))