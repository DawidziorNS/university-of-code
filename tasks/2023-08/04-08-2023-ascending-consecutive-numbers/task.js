const chunk = (str, size) => {
    const result = []

    for (let i = 0; i < str.length; i += size) {
        result.push(str.slice(i, i + size))
    }

    return result
}

const ascending = (str) => Array.from({
    length: str.length / 2
}, (_, i) => chunk(str, i + 1)).some(
    (nums) => nums.slice(1).every((num, i) => nums[i] - num === -1)
)

console.log(ascending("121316"))
console.log(ascending("123412351236"))
