function legendre(p, n, i = 1) {
    if (n % p ** i == n) {
        return 0
    }

    return parseInt(n / p ** i) + legendre(p, n, i + 1)
}

console.log(legendre(3, 50))