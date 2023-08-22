const bandNamesSort = (arr) => {
    const remove = b => b.replace(/^(the|a|an) /i, "")
    return arr.sort((a, b) => remove(a).localeCompare(remove(b)))
}

console.log(bandNamesSort(["The New Yardbirds", "The Beatles", "The Square Roots", "On Friday", "An Irony"]))