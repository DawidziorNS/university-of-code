function emojify(str) {
    let [first, mid, last] = str.split(' ')

    let emojify = {
        smile: ':D',
        grin: ':)',
        sad: ':(',
        mad: ':P'
    }

    return `Make me ${emojify[last]}`
}

function alternate_emojify(str) {
    str = str.replace(/smile/g, ':D')
    str = str.replace(/grin/g, ':)')
    str = str.replace(/sad/g, ':(')
    str = str.replace(/mad/g, ':P')

    return str
}

console.log(emojify("Make me smile"))
console.log(emojify("Make me grin"))
console.log(emojify("Make me sad"))
console.log(emojify("Make me mad"))

console.log(alternate_emojify("Make me smile"))
console.log(alternate_emojify("Make me grin"))
console.log(alternate_emojify("Make me sad"))
console.log(alternate_emojify("Make me mad"))