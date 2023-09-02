const zipIt = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return "Sizes don't match!"
    }

    return arr1.map((elem, i) => [elem, arr2[i]])
}

console.log(zipIt(["Elise", "Mary"], ["John", "Rick"]))