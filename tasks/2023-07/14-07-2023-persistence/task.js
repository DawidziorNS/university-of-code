const additivePersistence = (n) => {
    let count = 0

    while(String(n).length > 1) {
        n = [...String(n)].reduce((a, b) => +a + +b)
        count++
    }
    return count
}

const multiplicativePersistence = (n) => {
    let count = 0

    while(String(n).length > 1) {
        n = [...String(n)].reduce((a, b) => +a * +b)
        count++
    }
    return count
}

console.log(additivePersistence(5789))
console.log(multiplicativePersistence(6788))