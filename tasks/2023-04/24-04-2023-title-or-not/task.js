const checkTitle = (title) => !/\b[a-z]/.test(title)

console.log(checkTitle("PAPAFAM is amazing"))
console.log(checkTitle("PAPAFAM Is Amazing"))