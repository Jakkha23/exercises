// om a är mellan 8 och 16 = true

function isLagom(a) {
    if (8<a && a<16) {
        // && betyder "och"
        return true
    }
    else {
        return false
    }
}

console.log(isLagom(35))
console.log(isLagom(12))
console.log(isLagom(15))
console.log(isLagom(2324))
console.log(isLagom(231))