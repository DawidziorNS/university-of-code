function mean(num) {
    return [...String(num)].reduce((a, c) => a + + c, 0) / String(num).length
}

console.log(mean(123))