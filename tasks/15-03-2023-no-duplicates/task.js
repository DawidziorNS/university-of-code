const noDuplicates  = (arr) => [...new Set(arr)]

const noDupicates_altrenate = (arr) => {
    return arr.filter((x, i, a) => a.indexOf(x) === i)
}

console.log(noDuplicates(["Sonny", "Sangha", "Sonny"]))