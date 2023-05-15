const romanNumerals = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
]

const convertToRoman = (n) => {
    if (n === 0) return ''
    for (let i = 0; i < romanNumerals['length']; i++) {
        if (n >= romanNumerals[i][0]) {
            return romanNumerals[i][1] + convertToRoman(n - romanNumerals[i][0])
        }
    }
}

console.log(convertToRoman(123))