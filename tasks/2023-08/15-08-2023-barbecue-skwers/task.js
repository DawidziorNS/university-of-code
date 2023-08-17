const bbqSkwers = (grill) => {
    let non = grill.filter(x => x.includes('x')).length
    return [grill.length - non, non]
}

console.log(bbqSkwers(
    ["--xx--x--xx--",
        "--o---o--oo--",
        "--xx--x--ox--",
        "--xx--x--ox--"]
))