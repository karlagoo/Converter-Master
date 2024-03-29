import React, { useState } from "react";
import './temperatures.css'

function Temperatures() {
  const [input, setInput] = useState([]);
  const fahrenheitTemp = document.getElementById("fahrenheit");
  const celciusTemp = document.getElementById("celcius");

  var convert = function () {
    //console.log("button Clicked!")
    if (fahrenheitTemp.checked) {
      console.log('fahrenheit checked!')
    }
  };

  return (
    <div>
      <form action="">
        <h1>Master Converter</h1>
        <h2 className="section_subtitle">Temperatures</h2>
        <div>
          <input type="number" className="text_box" id="text_box" />
          <br />

          <label htmlFor="fahrenheit">Celcius → Fahrenheit</label>
          <input type="radio" name="temp_select" id="fahrenheit" />
          <br />

          <label htmlFor="celcius">Fahrenheit → Celcius</label>
          <input type="radio" name="temp_select" id="celcius" />
          <br />

          <button type="button" onClick={convert}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Temperatures;
