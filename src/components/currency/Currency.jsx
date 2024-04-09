import React from "react";
import CurrencyRow from "./CurrencyRow";

function Currency() {
  return (
    <div>
      <h2>Currency</h2>
      <CurrencyRow />
      <div>=</div>
      <CurrencyRow />
    </div>
  );
}

export default Currency;
