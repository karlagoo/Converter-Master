const textBox = document.getElementById("text_box");
const fahrenheitTemp = document.getElementById("fahrenheit");
const celciusTemp = document.getElementById("celcius");
const result = document.getElementById("result");
let temp;

function convert() {
    if (fahrenheitTemp.checked) {
        //console.log("degrees in fahrenheit")
        result.textContent = "You Selected Fahrenheit";
    } else if (celciusTemp.checked) {
       // console.log("degrees in celcius")
        result.textContent = "You Selected Celcius";
    } else {
        result.textContent = "Select a unit";
    }
}