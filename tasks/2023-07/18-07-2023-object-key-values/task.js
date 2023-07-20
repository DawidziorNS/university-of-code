const keysAndValues = (obj) => {
    const keys = Object.keys(obj)
    return [keys, keys.map(key => obj[key])]
}

console.log(keysAndValues({a: 1, b: 2, c: 3}))