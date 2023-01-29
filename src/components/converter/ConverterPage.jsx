import { useEffect, useState } from "react";
import ConverterBlock from "./ConverterBlock";

const ConverterPage = () => {
  const [fromCurrency, setFromCurrency] = useState("UAH");
  const [toCurrency, setToCurrency] = useState("USD");
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);

  const rates = { UAH: 40.8, USD: 1, EUR: 0.97 };

  const onChangeFromPrice = (value) => {
    if (value >= 0) {
      const price = value / rates[fromCurrency];
      const result = price * rates[toCurrency];
      setFromPrice(value);
      setToPrice(result.toFixed(2));
    } 
  };

  const onChangeToPrice = (value) => {
    if (value >= 0) {
      const result = (rates[fromCurrency] / rates[toCurrency]) * value;
      setToPrice(value);
      setFromPrice(result.toFixed(2));
    }
  };

  useEffect(() => {
    onChangeFromPrice(fromPrice);
  }, [fromCurrency]);

  useEffect(() => {
    onChangeToPrice(toPrice);
  }, [toCurrency]);

  return (
    <div className="converterApp">
      <ConverterBlock
        value={toPrice}
        currency={toCurrency}
        onChangeCurrency={setToCurrency}
        onChangeValue={onChangeToPrice}
      />
      <ConverterBlock
        value={fromPrice}
        currency={fromCurrency}
        onChangeCurrency={setFromCurrency}
        onChangeValue={onChangeFromPrice}
      />
    </div>
  );
};

export default ConverterPage;
