const sumTwoSmallestNums = (arr) => {
    arr = arr.sort((a, b) => a - b)
        .filter((x) => x > 0)

    return arr[0] + arr[1]
}

console.log(sumTwoSmallestNums([-1, -1, 1, 1]))
console.log(sumTwoSmallestNums([321, 406, -176]))