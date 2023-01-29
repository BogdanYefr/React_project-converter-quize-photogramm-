import React from 'react';
import { ConverterBlock } from '../components/ConverterBlock';


function ConverterPage () {
const [fromCurrency, setFromCurrency] = React.useState('UAH')
const [toCurrency, setToCurrency] = React.useState('USD')
const [fromPrice, setFromPrice] = React.useState(0);
const [toPrice, setToPrice] = React.useState(1);


const [rates, setRates] = React.useState({'UAH': 40.8, 'USD': 1, 'EUR': 0.97});

const onChangeFromPrice = (value) => {
  const price = value / rates[fromCurrency];
  const result = price * rates[toCurrency];
  setFromPrice(value);
  setToPrice(result.toFixed(2));
}

const onChangeToPrice = (value) => {
  const result = (rates[fromCurrency] / rates[toCurrency]) * value;
  setFromPrice(result.toFixed(2));
  setToPrice(value);
}

React.useEffect(() => {
  onChangeFromPrice(fromPrice);
}, [fromCurrency]);

React.useEffect(() => {
  onChangeToPrice(toPrice);
}, [toCurrency]);


  return (
    <div className="converterApp">
      <ConverterBlock 
        value={fromPrice} 
        currency={fromCurrency} 
        onChangeCurrency={setFromCurrency} 
        onChangeValue={onChangeFromPrice} 
      />
      <ConverterBlock 
        value={toPrice} 
        currency={toCurrency} 
        onChangeCurrency={setToCurrency} 
        onChangeValue={onChangeToPrice} 
      />
     
    </div>
  );
}

export default ConverterPage;