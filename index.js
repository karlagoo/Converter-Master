const textBox = document.getElementById("text_box");
const fahrenheitTemp = document.getElementById("fahrenheit");
const celciusTemp = document.getElementById("celcius");
const result = document.getElementById("result");
let temp;

function convert() {
    if (fahrenheitTemp.checked) {
        //When we accept user input, its of the string datatype so we typecast Number as a value so we can use it with math
        temp = Number(textBox.value);

        // Now we grab the value and convert it to Fahrenheit
        temp = temp * 9 / 5 + 32;

        //update text content of the result
        result.textContent = temp.toFixed(2) + "° Fahrenheit"

    } else if (celciusTemp.checked) {
        temp = Number(textBox.value);
        temp = (temp - 32) * (5 / 9);
        result.textContent = temp.toFixed(2) + "° Celcius"

    } else {
        result.textContent = "Select a unit";
    }
}

function clearText() {
    //console.log("reset button Clicked");
    result.textContent = "";
}