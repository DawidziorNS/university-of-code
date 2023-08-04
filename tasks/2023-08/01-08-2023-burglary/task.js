const calculateLosses = (obj) => Object.values(obj)
    .reduce((total, num) => total + num, 0) || "Lucky you!"

console.log(calculateLosses({
    tv: 30,
    skate: 20,
    stereo: 50
}))

console.log(calculateLosses({}))