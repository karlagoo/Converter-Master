import React from 'react'

function temperatures() {

  function convert() {
    console.log('button Clicked')
  }

  return (
    <div>
      <form action="">
        <h1>Master Converter</h1>
        <h2 className="section_subtitle">Temperatures</h2>
        <div>
          <input type="number" className="text_box" id="text_box" value={0} />
          <br />

          <label htmlFor="fahrenheit">Celcius → Fahrenheit</label>
          <input type="radio" name="temp_select" id="fahrenheit" />
          <br />

          <label htmlFor="celcius">Fahrenheit → Celcius</label>
          <input type="radio" name="temp_select" id="celcius" /><br />

          <button type='button' onClick={convert()}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default temperatures