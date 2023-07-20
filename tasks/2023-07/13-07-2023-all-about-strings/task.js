const allAboutStrings = (str) => {
    const length = str.length
    const first = str[0]
    const last = str[length - 1]
    const mid = length % 2 === 0
        ? str.slice(length / 2 - 1, length / 2 + 1)
        : str[Math.floor(length / 2)]
    const index = [...str].indexOf(str[1], 2)

    return [length, first, last, mid, index > -1 ? `@ index ${index}` : `not found`]
}

console.log(allAboutStrings("LASA"))