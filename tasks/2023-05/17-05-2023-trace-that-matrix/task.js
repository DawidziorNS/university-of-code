const trace = (arr) => arr.reduce((acc, elem, idx) => acc + elem[idx], 0)

console.log(trace([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]]
))

console.log(trace([
    [1, 4,],
    [4, 1]]
))