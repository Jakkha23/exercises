
//.length räknar antal tecken
//
function isLong(String) {
    if (String.length < 18) {
        return "short"
    }
    if (String.length > 18) {
        return "long"
    }
}

// "kort" är färre än 18 tecken och borde returnera "short" i 
// terminalen vid kommandot "node 19/script,.js"
console.log(isLong("kort"))