function factorial(n) {
    if (n < 0) {
        throw new Error("Liczba nie może być mniejsza od zera.");
    }

    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
console.log(factorial(10)); // Output: 3628800