//av någon anledning fungerade inte
//functionen före jag ändrade "if(a = "Tanja")"" till "if(a === "tanja")"
function isTanja(a) {
    if (a === "Tanja") {
        return "true"
    }
    else {
        return "false"
    }
}

console.log(isTanja("Tanja"))