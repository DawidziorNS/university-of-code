const sortDrinks = (arr) => arr.sort((a,b) => a.price - b.price)

const arr = [
    {name: 'lemonade', price: 50},
    {name: 'lime', price: 10}
]

console.log(sortDrinks(arr))