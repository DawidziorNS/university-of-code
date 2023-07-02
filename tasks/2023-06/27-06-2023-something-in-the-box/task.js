const inBox = (arr) => arr.some(str => str.includes('*'))

console.log(inBox([
    "###",
    "#*#",
    "###"
]))