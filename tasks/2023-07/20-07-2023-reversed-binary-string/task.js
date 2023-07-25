const reversedBinaryInteger = (n) => parseInt(
    [...n.toString(2)].reverse()
        .join(''), 2
)

console.log(reversedBinaryInteger(10))
console.log(reversedBinaryInteger(12))