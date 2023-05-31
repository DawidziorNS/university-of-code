const findBrokenKeys = (a, b) => [...new Set([...a].map((elem, index) => elem === b[index] ? null : elem)
    .filter(elem => elem !== null))]

const findBrokenKeys_alternate = (a, b) => [...new Set([...a].filter((a, index) => a !== b[index]))]

console.log(findBrokenKeys('happy birthday', 'hawwy birthday'))
console.log(findBrokenKeys('starry night', 'starrq light'))

console.log(findBrokenKeys_alternate('happy birthday', 'hawwy birthday'))
console.log(findBrokenKeys_alternate('starry night', 'starrq light'))