const xo = (str) => [...str].filter(char => 'x' === char.toLowerCase()).length === [...str].filter(char => 'o' === char.toLowerCase()).length

console.log(xo("ooxx"))
console.log(xo("xooxx"))
console.log(xo("ooxXm"))
console.log(xo("pppzz"))
console.log(xo("zzoo"))