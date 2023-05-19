const hoursPassed = (t1, t2) => {
    let [h1] = t1.split(':')
    let [h2] = t2.split(':')

    if (t1.endsWith('PM')) h1 = +h1 + 12
    if (t2.endsWith('PM')) h2 = +h2 + 12
    if (t1.endsWith('AM') && h1 == 12) h1 = 0
    if (t2.endsWith('AM') && h2 == 12) h2 = 0

    let diff = h2 - h1

    if (diff < 0) diff += 24

    return diff ? diff + ' hours' : 'No time has passed'

}

console.log(hoursPassed('3:00 AM', '9:00 AM'))
console.log(hoursPassed('2:00 PM', '4:00 PM'))