function timeToEat_alternate(currentTimeString) {
    let pattern = /(.*)\:(.*)\s/

    let hours = currentTimeString.match(pattern)[1]
    let minutes = currentTimeString.match(pattern)[2]

    let rawtime = parseInt(hours) + minutes / 60
    let timeToEat = rawtime >= 7 ? 19 - rawtime : 7 - rawtime

    let hoursToEat = Math.floor(timeToEat)
    let minutesToEat = Math.round((timeToEat % 1) * 60)

    return [hoursToEat, minutesToEat]

}

console.log(timeToEat_alternate("2:00 p.m."))
console.log(timeToEat_alternate("5:50 a.m."))
console.log(timeToEat_alternate("6:37 p.m."))
console.log(timeToEat_alternate("12:00 a.m."))
console.log(timeToEat_alternate("11:58 p.m."))
console.log(timeToEat_alternate("3:33 p.m."))