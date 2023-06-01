const canFind = (bigrams, words) => bigrams.every(bigram => words.some(word => word.includes(bigram)))

console.log(canFind(["at", "be", "th", "au"], ["beautiful", "the", "hat"]))
console.log(canFind(["ay", "be", "ta", "cu"], ["maybe", "beta", "abet", "course"]))
console.log(canFind(["ay", "be", "ta", "cu"], []))