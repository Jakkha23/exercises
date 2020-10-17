//age check


//om a<65 -> young
//om a>65 -> old
function checkAge(a) {
    if (a<65) {
        return "young"
    } 
    else {
        return "old"
    }
}

//(checkAge(Ålder))
console.log(checkAge(66))