const capMe = (arr) => arr.map(elem => elem.charAt(0).toUpperCase() + elem.slice(1).toLowerCase())

console.log(capMe(["samuel", "MABELLE", "letitia", "merdith"]))