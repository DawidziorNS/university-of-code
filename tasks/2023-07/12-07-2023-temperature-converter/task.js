const convert = (deg) => {
    if (!deg.endsWith('°C') && !deg.endsWith('°F')) return 'Error'

    return deg.endsWith('°C') ?
        `${Math.round((parseInt(deg) * 9) / 5 + 32)}°F` :
        `${Math.round(((parseInt(deg) - 32) * 5) / 9)}°C`
}

console.log(convert('0°C'))
console.log(convert('35°C'))
console.log(convert('69°F'))