const specialReverse = (sentence, letter) => sentence.split(' ')
    .map(word => word.includes(letter)
        ? word.split('').reverse().join('')
        : word)
    .join(' ')

console.log(specialReverse("word searches are super fun", 's'))