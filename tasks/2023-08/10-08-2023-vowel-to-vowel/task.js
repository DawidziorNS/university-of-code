const vowelLinks = (str) => /[aeiou] [aeiou]/.test(str)

console.log(vowelLinks("a very large appliance"))
console.log(vowelLinks("a sudden applause"))