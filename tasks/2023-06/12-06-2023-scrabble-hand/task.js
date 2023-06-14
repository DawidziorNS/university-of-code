const maximumScore = (tileHand) => tileHand.reduce((p, c) => p + c.score, 0)

console.log(maximumScore([
    {title: 'N', score: 1},
    {title: 'K', score: 5},
    {title: 'Z', score: 10},
    {title: 'X', score: 8},
    {title: 'D', score: 2},
    {title: 'A', score: 1},
    {title: 'E', score: 1}
]))