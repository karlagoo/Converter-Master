import React, { useEffect, useState } from "react";
import CurrencyRow from "./CurrencyRow";

const BASE_URL = `https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_API_KEY}/latest/USD`;

function Currency() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  //console.log(currencyOptions)

  useEffect(() => {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
      setCurrencyOptions([data.base_code, ...Object.keys(data.conversion_rates)])
    })
  }, [])

  return (
    <div>
      <h2>Currency</h2>
      <CurrencyRow
      currencyOptions= {currencyOptions}
      />
      <h2>=</h2>
      <CurrencyRow />
    </div>
  );
}

export default Currency;
