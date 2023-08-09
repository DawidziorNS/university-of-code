const oneOddOneEven = (num) => {
    const array = [...`${num}`]
    return array.some(digit => digit % 2 === 0) && array.some(digit => digit % 2 === 1)
}

console.log(oneOddOneEven(12))
console.log(oneOddOneEven(55))
console.log(oneOddOneEven(22))