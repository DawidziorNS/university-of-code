const mapLetters = (str) => Array.from(str).reduce(
    (obj, char, i) => ({...obj, [char]: [...(obj[char] || []), i]}), {}
)

console.log(mapLetters("froggy"))