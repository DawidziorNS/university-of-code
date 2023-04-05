function palindromes(arr) {
    return arr.reduce(
        (acc, e, index) => acc + (e === arr[index + 2] && e !== arr[index + 1]), 0
    )
}

const alternatePalindromes = (a) => a.filter((_, i) => a[i] === a[i + 2] && a[i + 1] !== a[i]).length

const arr1 = [9,5,9,5,1,1,1]
const arr2 = [5,6,6,7,6,3,9]
const arr3 = [4,4,4,9,9,9,9]

console.log(palindromes(arr1))
console.log(alternatePalindromes(arr1))

console.log(palindromes(arr2))
console.log(alternatePalindromes(arr2))

console.log(palindromes(arr3))
console.log(alternatePalindromes(arr3))