const progressDays = (arr) => arr.reduce((acc, elem, index) => elem > arr[index - 1] ? acc + 1 : acc, 0)

console.log(progressDays([3, 4, 1, 2]))
console.log(progressDays([10, 11, 12, 9, 10]))
console.log(progressDays([6, 5, 4, 3, 2, 9]))
console.log(progressDays([9, 9]))