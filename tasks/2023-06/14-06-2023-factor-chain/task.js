const factorChain = numbers => numbers.reduce((acc, elem, index, arr) => elem % arr[index - 1] === 0 , true)

console.log(factorChain([3, 6, 12, 36]))
console.log(factorChain([1, 2, 4, 8, 16, 32]))
console.log(factorChain([10, 1]))