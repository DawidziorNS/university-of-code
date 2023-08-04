const nearestChapter = (chapt, page) => Object.entries(chapt)
    .sort(([k, v], [l, w]) => Math.abs(v - page) - Math.abs(w - page) || w - v)[0][0]

console.log(nearestChapter({
        "Chapter 1": 1,
        "Chapter 2": 15,
        "Chapter 3": 37,
    }, 10)
)