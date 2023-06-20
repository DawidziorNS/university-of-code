const totalDistance = (y, x, h) => h + h / y * x

console.log(totalDistance(0.2, 0.4, 100.0))
console.log(totalDistance(0.3, 0.2, 25.0))
console.log(totalDistance(0.1, 0.1, 6.0))