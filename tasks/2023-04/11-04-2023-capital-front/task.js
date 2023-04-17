const capFront = s => s.match(/[A-Z]/g).join('') + s.match(/[a-z]/g).join('')

function capFrontAlt(s) {
    const lowerCase = [...s].filter(l => l === l.toLowerCase())
    const upperCase = [...s].filter(l => l === l.toUpperCase())

    return [...upperCase, ...lowerCase].join('')
}

console.log(capFront("hApPy"))
console.log(capFrontAlt("hApPy"))