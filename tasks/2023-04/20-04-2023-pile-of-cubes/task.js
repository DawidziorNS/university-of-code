function cubes(m) {
    const n = (Math.sqrt(Math.sqrt(m) * 8 + 1) - 1) / 2
    return Number.isInteger(n) ? n : null
}

console.log(cubes(16))
console.log(cubes(1071225))
