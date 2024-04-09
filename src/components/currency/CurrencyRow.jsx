import React from 'react';
import './currency.css';

function CurrencyRow() {
  return (
    <div>
        <input className='input' type="number" name="currencyValue" id="" />
        <select>
            <option value="Hi">Hi</option>
        </select>
    </div>
  )
}

export default CurrencyRow