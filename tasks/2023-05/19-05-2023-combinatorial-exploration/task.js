const noPermsDigits = (n) => {
    const bigIntN = BigInt(n)
    if (bigIntN === 0 || bigIntN === 1) {
        return 1;
    }

    let factorial = BigInt(1);
    for (let i = 2; i <= n; i++) {
        factorial *= BigInt(i);
    }

    return `${factorial}`.length
}

console.log(noPermsDigits(0))
console.log(noPermsDigits(1))
console.log(noPermsDigits(5))
console.log(noPermsDigits(8))
console.log(noPermsDigits(400))
console.log(noPermsDigits(500))