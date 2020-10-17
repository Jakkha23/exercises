const a = "bruh"
const b = "bruh"

function stringChecker(a, b) {
    if(a===b) {
        return "true"
    }
    else {
        return "false"
    }
}

//skulle kunna ta bort "const a =" och "const b =" 
//där uppe och byta ut dessa "a, b" till två strings
console.log(stringChecker(a, b))