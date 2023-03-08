function discountedPrice(price, discount) {
    return price * (100 - discount) * 0.01
}

console.log(discountedPrice(100, 75))