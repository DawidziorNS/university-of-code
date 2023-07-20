const filterArray = (arr) => arr.filter(num => Number.isInteger(num))

console.log(filterArray([1, 2, 'a', 'b']))