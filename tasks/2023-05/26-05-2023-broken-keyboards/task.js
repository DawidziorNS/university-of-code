const findBrokenKeys = (a, b) => [...new Set([...a].map((elem, index) => elem === b[index] ? null : elem)
    .filter(elem => elem !== null))]

console.log(findBrokenKeys('happy birthday', 'hawwy birthday'))
console.log(findBrokenKeys('starry night', 'starrq light'))