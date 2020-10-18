console.log("k")
const password = "Jakob"
let userinput = prompt("enter password")

if (userinput === password) {
    alert("welcome coolman22")
}
while(userinput !== password) {
    userinput = prompt("wrong password")
}