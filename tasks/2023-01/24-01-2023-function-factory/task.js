const makePlusFunction = baseNum => num => baseNum + num

const plusTwo = makePlusFunction(2)
const plusFive = makePlusFunction(5)

console.log(plusTwo(3))
console.log(plusFive(3))

console.log(makePlusFunction(3)(4))

console.log(plusFive(plusTwo(plusFive(plusTwo(1)))))