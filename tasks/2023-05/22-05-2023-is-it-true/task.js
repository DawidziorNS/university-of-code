const isTrue = (str) => eval(str.replace(/=/g, '=='))

console.log(isTrue("2=3"))
console.log(isTrue("2=2"))
console.log(isTrue("2>3"))
console.log(isTrue("2<3"))