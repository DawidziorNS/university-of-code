const sortDescending = (num) => parseInt(num.toString()
    .split('')
    .sort()
    .reverse()
    .join('')
)

console.log(sortDescending(1254859723))