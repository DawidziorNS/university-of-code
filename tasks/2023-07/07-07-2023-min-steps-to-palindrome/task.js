const minPalindromeSteps = (str) => {
    let rev = [...str].reverse().join('')
    let i = str.length
    while (!str.endsWith(rev.slice(0, i))) i--
    return str.length - 1
}

console.log(minPalindromeSteps("pole"))