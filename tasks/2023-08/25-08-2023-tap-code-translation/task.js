const grid = [
    ['A', 'B', 'C', 'D', 'E'],
    ['F', 'G', 'H', 'I', 'J'],
    ['L', 'M', 'N', 'O', 'P'],
    ['Q', 'R', 'S', 'T', 'U'],
    ['V', 'W', 'X', 'Y', 'Z']
]

const tapCode = (text) => {
    if (/[a-z]/gi.test(text)) {
        return text.replace(/k/gi, 'c')
            .split('')
            .map((x, i) => grid.map((y, j) => {
                if (y.indexOf(x.toUpperCase()) !== -1) {
                    return '.'.repeat(j + 1) + " " + ".".repeat(y.indexOf(x.toUpperCase()) * 1 + 1)
                } else {
                    return false
                }
            }).filter(Boolean)).flat(Infinity).join(' ')
    } else {
        return text.replace(/(\.+) (\.+)/gi, x => {
            let t1 = x.split(' ')[0]
            let t2 = x.split(' ')[1]
            return grid[t1.length - 1][t2.length - 1].toLowerCase()
        }).replace(/ /g, '')
    }
}

console.log(tapCode("break"))