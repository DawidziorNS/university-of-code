const orderedMatrix = (a, b) => Array(a).fill(Array(b).fill(1))
    .map((x, i) => x.map((y, j) => y + j + i * b))

console.log(orderedMatrix(1, 2))
console.log(orderedMatrix(5, 5))