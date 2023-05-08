const reverseAndNot = (n) => +([...`${n}`].reverse().join('') + n)

console.log(reverseAndNot(518))