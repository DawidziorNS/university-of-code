const isRepdigit = n => new Set([...`${n}`]).size === 1

console.log(isRepdigit(777))
console.log(isRepdigit(1001))
console.log(isRepdigit(-11))