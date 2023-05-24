const uniqueSort = (arr) => [...new Set(arr)].sort((a, b) => a - b)

console.log(uniqueSort([1, 2, 3, 4]))
console.log(uniqueSort([4, 3, 3, 1]))
console.log(uniqueSort([1, 4, 4, 4, 4, 4, 99, 2, 0]))