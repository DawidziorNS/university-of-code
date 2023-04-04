const countVowels = (word) => [...word.toLowerCase()].reduce((acc, item) => ['a', 'e', 'o', 'u', 'i'].includes(item) ? acc + 1 : acc, 0)

const countVowels2 = (word) => word.split('').filter((x) => 'aeiouAEIOU'.includes(x)).length

const countVowels3 = (word) => [...word].filter((x) => 'aeiouAEIOU'.includes(x)).length


console.log(countVowels('Sonny'))
console.log(countVowels('PAPAFAM'))
console.log(countVowels('Prediction'))

console.log(countVowels2('Sonny'))
console.log(countVowels2('PAPAFAM'))
console.log(countVowels2('Prediction'))

console.log(countVowels3('Sonny'))
console.log(countVowels3('PAPAFAM'))
console.log(countVowels3('Prediction'))