function palindromeTimestamps(h1, m1, s1, h2, m2, s2) {
    if (h1 > 5 && h1 < 10) {
        return 0
    }
    let ans = Math.round((60 - m1 + m2) / 11 + (h2 - h1 - 1) * 6)

    if (m1 % 11 === 0) {
        ans += 1
    }

    if (m2 % 11 === 0) {
        ans += 1
    }

    return ans
}

console.log(palindromeTimestamps(2, 12, 22, 4, 35, 10))