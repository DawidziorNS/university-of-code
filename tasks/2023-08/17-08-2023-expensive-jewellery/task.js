const mostExpensive = (obj) => `The most expensive is ${Object.keys(obj)
    .reduce((a, b) => obj[a] > obj[b] ? a : b)}`

console.log(mostExpensive({
    "Diamond Earrings": 980,
    "Pearl Necklace": 4650,
    "Gold Watch": 250
}))