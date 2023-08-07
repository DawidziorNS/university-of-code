const bomb = (str) => str.toLowerCase()
    .includes("bomb") ? "Duck!!!" : "There is no bomb, relax"

console.log(bomb("There is a bomb."))
console.log(bomb("This goes boom!!!"))