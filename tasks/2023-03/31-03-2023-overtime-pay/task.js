const overTime = ([start, end, hourlyRate, overtimeMultiplier]) => {
    const normalWorkedHours = Math.min(end, 17) - Math.min(start, 17)
    const overtimeWorkedHours = Math.max(end, 17) - Math.max(start, 17)

    return `$${(
        normalWorkedHours * hourlyRate + overtimeWorkedHours * hourlyRate * overtimeMultiplier
    ).toFixed(2)}`
}

console.log(overTime([9, 17, 30, 1.5]))
console.log(overTime([13, 21, 38.6, 1.8]))