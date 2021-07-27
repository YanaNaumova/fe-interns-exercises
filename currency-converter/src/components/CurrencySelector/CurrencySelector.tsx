import React, {useEffect, useState} from 'react';
import {Select} from 'antd';
import "antd/dist/antd.css";
import './CurrencySelector.css'

const {Option} = Select;

export const CurrencySelector = () => {
  const [amount, setAmount] = useState<number|string>();
  const [currencies, setCurrencies] = useState<Record<string, number>>({});
  const [currency, setCurrency] = useState<Record<string, number>>({});
  const [baseCurrencies, setBaseCurrencies] = useState<string>('EUR');
  const [historyCurrencies, setHistoryCurrencies] = useState<string>('USD');

  const handleBaseCurrenciesChange = (value: string) => {
    setBaseCurrencies(value)
  }

  const handleHistoryCurrenciesChange = (value: string) => {
    setHistoryCurrencies(value)
  }

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
  }

  const changeStatus = (responseFromApi: Response) => {
    if (!responseFromApi.ok) {
      throw new Error(responseFromApi.statusText);
    }

    return responseFromApi;
  }

  const host = 'api.frankfurter.app';

  useEffect(() => {
    fetch(`https://${host}/latest?from=${baseCurrencies}`)
      .then(changeStatus)
      .then(response => response.json())
      .then(json => {
        setCurrencies(json.rates)
      })
      .catch(error => {

        return Promise.reject()
      })

  }, [baseCurrencies, historyCurrencies]);

  useEffect(() => {
    fetch(`https://${host}/latest?from=${baseCurrencies}&to=${historyCurrencies}`)
      .then(changeStatus)
      .then(response => response.json())
      .then(json => {
        setCurrency(json.rates)
      })
      .catch(error => {

        return Promise.reject()
      })
  }, [baseCurrencies, historyCurrencies]);

  let result:number|string;

  if(amount===undefined){
      result=0;
  }else {
    result = (currency[historyCurrencies] * Number(amount)).toFixed(2);
  }

  return (
    <>
      <label> <span id='form' className="base">From:</span>
        <Select className="select"
                defaultValue='EUR'
                onChange={handleBaseCurrenciesChange}
        >
          {
            Object.keys(currencies).map((currencyKey, index) =>(
              <Option
                key={index}
                value={currencyKey}>
                {`${currencyKey} `}
              </Option>
            ))
          }
        </Select>
      </label>
      <label> <span id='to' className="base">To:</span>
        <Select
          defaultValue="USD"
          onChange={handleHistoryCurrenciesChange}
        >
          {
            Object.keys(currencies).map((currencyKey, index) => (
              <Option
                key={index}
                value={currencyKey}>
                {`${currencyKey} `}
              </Option>
            ))}
        </Select>
      </label>
      <label> <span id='amount' className="base">Amount </span>
        <input
          min={0}
          className="inputAmount"
          type="number"
          onChange={inputChange}
          placeholder={'0'}
          value={amount}/><br/>
      </label>
      <label id='labelResult' className="result">Result: <span  id='result' className="base">{result}</span>
      </label>
    </>
  )
}