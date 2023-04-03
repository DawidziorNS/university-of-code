const lcm = (n1, n2) => {
    const min = Math.min(n1, n2)
    const max = Math.max(n1, n2)

    let i = max

    while (i % min !== 0) {
        i += max
    }

    return i;
}

console.log(lcm(9, 18))
console.log(lcm(8, 5))