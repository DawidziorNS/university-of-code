const isTrue = (str) => {

    const regex = /(\d+)\s*([+\-*/=<>]+)\s*(\d+)/;

    const match = str.match(regex);

    const firstNumber = parseInt(match[1]);
    const operator = match[2] === '=' ? '==' : match[2];
    const secondNumber = parseInt(match[3]);

    return eval(`${firstNumber} ${operator} ${secondNumber}`)
}

console.log(isTrue("2=3"))
console.log(isTrue("2=2"))
console.log(isTrue("2>3"))
console.log(isTrue("2<3"))