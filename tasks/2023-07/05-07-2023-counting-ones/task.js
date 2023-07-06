const countOnes = (bin) => [...bin.toString(2)].reduce((acc, elem) => elem === '1' ? ++acc : acc , 0)

console.log(countOnes(100))