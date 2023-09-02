const spaceMessage = (str) => {
    if (str.includes('[')) {
        return spaceMessage(str.replace(/\[(\d+)([^[\]]+)\]/g, (_, n, s) => s.repeat(n)))
    }

    return str
}

console.log(spaceMessage("ABCD"))
console.log(spaceMessage("AB[3CD]"))