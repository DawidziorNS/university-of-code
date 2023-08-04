const isSmooth = (sentence) => sentence.match(/\w \w/g)
    .every((pair) => new Set(pair.toLowerCase()).size === 2)

console.log(isSmooth("Marta appreciated deep perpendicular right trapezoids"))
console.log(isSmooth("Marta xppreciated deep perpendicular right trapezoids"))