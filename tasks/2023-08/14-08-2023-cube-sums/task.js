const sumOfCubes = (nums) => nums.reduce((p, c) => p + Math.pow(c, 3), 0)

console.log(sumOfCubes([1, 5, 9]))