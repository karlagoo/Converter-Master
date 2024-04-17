import React from 'react';
import './currency.css';

function CurrencyRow(props) {
  const {
    currencyOptions
  } = props
  //console.log(`This is the data ${Object.keys(currencyOptions)}`)

  return (
    <div>
      {/* <p>{currencyOptions}</p> */}

      <input className="input" type="number" name="currencyValue" id="" />
      <select>
        {Object.keys(currencyOptions).map((option) => (
          <option value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CurrencyRow