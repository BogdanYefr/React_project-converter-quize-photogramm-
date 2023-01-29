const defaultCurrencies = ["UAH", "USD", "EUR"];

const ConverterBlock = ({
  value,
  currency,
  onChangeValue,
  onChangeCurrency,
}) => (
  <div className="block">
    <ul className="currencies">
      {defaultCurrencies.map((cur) => (
        <li
          onClick={() => onChangeCurrency(cur)}
          className={currency === cur ? "active" : ""}
          key={cur}
        >
          {cur}
        </li>
      ))}
    </ul>
    <input
      onChange={(e) => onChangeValue(e.target.value)}
      value={value}
      type="number"
      step='1'
      min='0'
      placeholder={0}
    />
  </div>
);

export default ConverterBlock;
