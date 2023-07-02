const isAutomorphic = (n) => String(Math.pow(n, 2)).endsWith(n)

console.log(isAutomorphic(8))
console.log(isAutomorphic(5))