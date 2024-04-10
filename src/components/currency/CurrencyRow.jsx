import React from 'react';
import './currency.css';

function CurrencyRow(props) {
  const {
    currencyOptions
  } = props
  console.log(props)

  return (
    <div>
        <input className='input' type="number" name="currencyValue" id="" />
        <select>
          {currencyOptions?.map(option => {
            <option value={option}>{option}</option>
          })}
            
        </select>
    </div>
  )
}

export default CurrencyRow