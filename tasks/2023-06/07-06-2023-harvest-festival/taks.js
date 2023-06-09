const plant = (seed, water, fert, temp) => {
    return temp < 20 || temp > 30
        ? ('-'.repeat(water ** 2)) + seed
        : ('-'.repeat(water) + seed.repeat(fert)).repeat(water)
}

console.log(plant("X", 4, 2, 22))