let num = +prompt("Enter first  number:");
function san() {
    if (num % 2 == 0) {
        return "- Жуп сан"
    } else {
        return  " - Так сан"
    }
}

console.log (num + san());
alert(num + san());

