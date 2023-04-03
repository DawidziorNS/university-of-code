const countVowels = (word) => [...word.toLowerCase()].reduce((acc, item) => ['a', 'e', 'o', 'u', 'i'].includes(item) ? acc + 1 : acc, 0)

console.log(countVowels('Sonny'))
console.log(countVowels('PAPAFAM'))
console.log(countVowels('Prediction'))