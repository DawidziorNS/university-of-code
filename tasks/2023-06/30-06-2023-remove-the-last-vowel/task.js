const removeLastVowel = (str) => {
    const lastVowel = /([aeiou])(?!.*[aeiou].*)/i
    const arr = str.split(' ').map((x) => x.replace(lastVowel, ''))

    return arr.join(' ')
}

console.log(removeLastVowel('Get busy living or get busy dying.'))