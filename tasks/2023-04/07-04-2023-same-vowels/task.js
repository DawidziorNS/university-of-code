function sameVowelGroup(w) {
    const keys = w[0]
        .match(/[aouie]/gi)
        .sort()
        .join('') || []

    return w.filter((word) =>
        word.match(/[aouie]/gi).every((letter) => keys.indexOf(letter) !== -1)
    )
}

console.log(sameVowelGroup(['toe', 'ocelot', 'maniac']))