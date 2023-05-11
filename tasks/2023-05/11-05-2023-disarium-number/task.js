const isDisarium = n => {
    const array = [...`${n}`]
    return n === array.reduce((acc, current, i) => current ** (i + 1) + acc, 0)
}

console.log(isDisarium(135))
console.log(isDisarium(222))