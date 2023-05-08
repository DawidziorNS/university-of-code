const colorPatternTimes = (cols) => cols.length * 2 + cols.slice(1).filter((c, i) => c !== cols[i]).length

console.log(colorPatternTimes(["Red"]))

console.log(colorPatternTimes(["Blue", "Red", "Red"]))