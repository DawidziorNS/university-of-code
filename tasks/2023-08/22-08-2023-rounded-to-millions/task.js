const millionsRounding = (a) => a.map((x) => [x[0], Math.round(x[1] / 1e6) * 1e6])

console.log(millionsRounding([
    ["Nice", 942208],
    ["Abu Dhabi", 1482816],
    ["Naples", 2186853],
    ["Vatican City", 572]
]))