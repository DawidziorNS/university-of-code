const equal = (a, b, c) => {
    const size = new Set([a, b, c]).size
    return size === 3 ? 0 : 4 - size
}

console.log(equal(1, 2, 3))
console.log(equal(1, 1, 4))
console.log(equal(4, 4, 4))