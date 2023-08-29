const valueInTree = (tree, val) => tree.flat(Infinity).includes(val)

const lst1 = [3, [7, [1, null, null], [8, null, null]], [5, null, [4, null, null]]]

console.log(valueInTree(lst1, 7))