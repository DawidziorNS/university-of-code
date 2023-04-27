function clone(arr) {
    arr.push(arr)
    return arr
}

const fixedClone = (arr) => arr.push(...arr)

const arr = [1, 2, 3]
const arrFixed = [1, 2, 3]

clone(arr)
fixedClone(arrFixed)

console.log(arr)
console.log(arrFixed)