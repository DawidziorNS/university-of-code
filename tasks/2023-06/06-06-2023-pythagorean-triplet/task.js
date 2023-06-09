const isTriplet = (x1, x2, x3) => {
    const [a, b, c] = [x1, x2, x3].sort((a, b) => a - b)

    return Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)
}

console.log(isTriplet(4, 2, 9))
console.log(isTriplet(3, 4, 5))