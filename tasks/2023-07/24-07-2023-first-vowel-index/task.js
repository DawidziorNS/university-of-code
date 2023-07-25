const vowels = /[aeiouy]/i

const firstVowel = (word) => [...word].findIndex((char) => vowels.test(char))

const alternateFirstVowel = (word) => word.search(vowels)

console.log(firstVowel("apple"))
console.log(firstVowel("STRAWBERRY"))

console.log(alternateFirstVowel("apple"))
console.log(alternateFirstVowel("STRAWBERRY"))