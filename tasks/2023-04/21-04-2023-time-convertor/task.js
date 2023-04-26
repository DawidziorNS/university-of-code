function convertTime(str) {
    let arr = str.match(/\d{2}/g)
    if (str.endsWith('AM')) {
        arr[0] = arr[0] === '12' ? '00' : arr[0]
    } else if (str.endsWith('PM')) {
        arr[0] = arr[0] === '12' ? arr[0] : + arr[0] + 12
    }
    return arr.join(':')
}

console.log(convertTime('07:05:45PM'))
console.log(convertTime('07:05:45AM'))