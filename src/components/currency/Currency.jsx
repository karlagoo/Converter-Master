import React, { useEffect, useState } from "react";
import CurrencyRow from "./CurrencyRow";

const BASE_URL =
  "https://v6.exchangerate-api.com/v6/656b9ae6e8d9526066234d8b/latest/USD";

function Currency() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  console.log(currencyOptions)


  useEffect(() => {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
      console.log(data.base_code)
    })
  }, [])

  return (
    <div>
      <h2>Currency</h2>
      <CurrencyRow />
      <div className="equals">=</div>
      <CurrencyRow />
    </div>
  );
}

export default Currency;
