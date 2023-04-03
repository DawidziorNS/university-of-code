const toBoolArray = (word) => [...word].map((i) => Boolean(i.charCodeAt() % 2))

console.log(toBoolArray("loves"))