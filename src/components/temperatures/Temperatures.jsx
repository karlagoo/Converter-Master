import React, { useState } from "react";
import './temperatures.css'

function Temperatures() {
  const [metric, setMetric] = useState([]);
  const [input, setInput] = useState([]);
  const [result, setResult] = useState([])

  const handleRadioChange = (value) => {
    setMetric(value)
  }

  var convert = function () {
    if(metric === "fahrenheit"){
      let temp = Number(input);
      temp = temp * 9/5 + 32;

    } else if (metric === "celcius") {
      let temp = Number(input);
      temp = (temp - 32) * (5 / 9);
    }
  };

  return (
    <div>
      <form action="">
        <h1>Master Converter</h1>
        <h2 className="section_subtitle">Temperatures</h2>
        <div>
          <input
            type="number"
            className="text_box"
            id="text_box"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <br />

          <label htmlFor="fahrenheit">Celcius → Fahrenheit</label>
          <input
            type="radio"
            name="temp_select"
            id="fahrenheit"
            value={"fahrenheit"}
            checked={metric === "fahrenheit"}
            onChange={() => handleRadioChange("fahrenheit")}
          />
          <br />

          <label htmlFor="celcius">Fahrenheit → Celcius</label>
          <input
            type="radio"
            name="temp_select"
            id="celcius"
            value={"celcius"}
            checked={metric === "celcius"}
            onChange={() => handleRadioChange("celcius")}
          />
          <br />

          <button type="button" onClick={convert}>
            Submit
          </button>

          <p
            id="result"
            className="result_box"
          >{result}</p>
        </div>
      </form>
    </div>
  );
}

export default Temperatures;
