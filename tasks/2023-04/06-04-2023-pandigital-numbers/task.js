const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const isPandigital = (num) => numbers.every(elem => [...`${num}`].includes(elem))

console.log(isPandigital(1234567890))
console.log(isPandigital(123456788))
console.log(isPandigital(9876543210))