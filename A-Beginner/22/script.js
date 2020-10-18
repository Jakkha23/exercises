function isOdd(a) {
    return a % 2 !== 0
    // "!==" betyder "ej lika med"
    // om a inte är delbar på två blir resultatet true
}

console.log(isOdd(2))
console.log(isOdd(4))

console.log(isOdd(1))
console.log(isOdd(5))