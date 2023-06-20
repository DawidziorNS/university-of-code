const isPrime = num => {
    for (let i = 2; i < num; i += 1) {
        if (num % i === 0) {
            return false
        }
        return num > 1
    }
}

const primeInRange = (low, high) => {
    for (let num = low; num <= high; num += 1) {
        if (isPrime(num)) {
            return true
        }
        return false
    }
}

console.log(primeInRange(3, 5))
console.log(primeInRange(62, 66))