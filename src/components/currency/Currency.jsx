import React, { useEffect, useState } from "react";
import CurrencyRow from "./CurrencyRow";

const BASE_URL = `https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_API_KEY}/latest/USD`;

function Currency() {
  // const [currencyOptions, setCurrencyOptions] = useState([]);
  // useEffect(() => {
  //   const getCurrencyType = async () => {
  //     const api = await fetch(
  //       `https://v6.exchangerate-api.com/v6/${process.env.REACT_APP_API_KEY}/latest/USD`
  //     );

  //     const data = await api.json();

  //     JSON.stringify(data.conversion_rates);
  //     setCurrencyOptions(data.conversion_rates);
  //     console.log(data)
  //     //setCurrencyOptions(data)
  //   }
  //     getCurrencyType();
  // },[])


  
  const [currencyOptions, setCurrencyOptions] = useState({});
  //console.log(currencyOptions)

  useEffect(() => {
    fetch(BASE_URL)
    .then(res => res.json())
    .then(data => {
      setCurrencyOptions(data.conversion_rates);
      //console.log()

    })
  }, [])

  return (
    <div>
      <h2>Currency</h2>
      <CurrencyRow currencyOptions={currencyOptions} />
      <h2>=</h2>
      <CurrencyRow currencyOptions={currencyOptions} />
    </div>
  );
}

export default Currency;
