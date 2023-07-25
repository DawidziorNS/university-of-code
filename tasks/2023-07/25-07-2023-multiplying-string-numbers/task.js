const multiplyNums = (...nums) => nums.reduce((acc, num) => acc * num, 1)

console.log(multiplyNums("2", "3"))
console.log(multiplyNums("1", "2", "3", "4"))