const budget = (arr) => arr.reduce((acc, i) => acc + i['budget'], 0)

const arr = [
    {
        name: 'John',
        age: 21,
        budget: 23000
    },
    {
        name: 'Steve',
        age: 32,
        budget: 40000
    },
    {
        name: 'Martin',
        age: 16,
        budget: 2700
    }
]

console.log(budget(arr))