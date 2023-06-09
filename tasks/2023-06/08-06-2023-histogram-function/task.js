const histogram = (arr, char) => arr.map(elem => char.repeat(elem)).join('\n')

console.log(histogram([1, 3, 4], "#"))