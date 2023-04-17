const matchLastItem = arr => arr.pop() === arr.join('')

console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"]))
console.log(matchLastItem([1, 1, 1, "11"]))