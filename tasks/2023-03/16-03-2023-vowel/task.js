const uncesor = (str, vowels) => {
    const arr = vowels.split('')
    return str.replace(/\*/g, () => arr.shift())
}

console.log(uncesor('*PP*RC*S*', "UEAE"))