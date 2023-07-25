const vowels = /[aeiouy]/i

const firstVowel = (word) => [...word].findIndex((char) => vowels.test(char))

console.log(firstVowel("apple"))
console.log(firstVowel("STRAWBERRY"))