function error(n) {
    return (
        {
            1: 'Check the fan: e1',
            2: 'Emergency stop: e2',
            3: 'Pump Error: e3',
            4: 'c: e4',
            5: 'Temperature Sensor Error: e5'
        }[n] || 101
    )
}

function alternateError(n) {
    return (
        [',',
            'Check the fan: e1',
            'Emergency stop: e2',
            'Pump Error: e3',
            'c: e4',
            'Temperature Sensor Error: e5'
        ][n] || 101
    )
}

console.log(error(1))
console.log(error(4))
console.log(error(-1000))

console.log(alternateError(1))
console.log(alternateError(4))
console.log(alternateError(-1000))