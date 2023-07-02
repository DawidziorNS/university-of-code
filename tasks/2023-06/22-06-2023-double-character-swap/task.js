const doubleSwap = (str, a, b) => str.replace(RegExp(`[${a + b}]`, 'g'), m => (m === a ? b : a))

console.log(doubleSwap("mamma mia", "m", "a"))