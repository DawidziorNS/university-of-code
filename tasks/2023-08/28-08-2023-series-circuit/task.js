const seriesResistance = (arr) => {
    const ohms = arr.reduce((acc, x) => acc + x, 0)
    return `${ohms} ${ohms <= 1 ? "ohm" : "ohms"}`
}

console.log(seriesResistance([1, 5, 6, 3]))
console.log(seriesResistance([0.5, 0.5]))