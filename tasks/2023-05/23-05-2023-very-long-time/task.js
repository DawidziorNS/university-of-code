const longestTime = (h, m, s) => {
    if (h > m / 60) {
        return h
    } else if (m / 60 > s / 3600) {
        return m
    }
    return s
}

console.log(longestTime(1, 59, 3598))
console.log(longestTime(2, 300, 15000))
console.log(longestTime(15, 955, 59400))