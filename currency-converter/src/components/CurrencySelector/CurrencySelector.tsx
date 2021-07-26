import React, {useEffect, useState} from 'react';
import {Select} from 'antd';
import "antd/dist/antd.css";
import './CurrencySelector.css'

const {Option} = Select;

export const CurrencySelector = () => {
  const [amount, setAmount] = useState<string>('');
  const handleChange1 = (value: string) => {
    setBaseCurrencies(value)
  }

  const handleChange2 = (value: string) => {
    setHistoryCurrencies(value)
  }

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);

  }

  const changeStatus = (responseFromApi: Response) => {
    if (!responseFromApi.ok) {
      throw new Error(responseFromApi.statusText);
    }

    return responseFromApi;
  }

  const [currencies, setCurrencies] = useState<Record<string, number>>({});
  const [currency, setCurrency] = useState<Record<string, number>>({});
  const [baseCurrencies, setBaseCurrencies] = useState<string>('EUR');
  const [historyCurrencies, setHistoryCurrencies] = useState<string>('USD');

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

  const result = (currency[historyCurrencies] * Number(amount)).toFixed(2);

  return (
    <>
      <label> <span className="base">From:</span>
        <Select className="select"
                defaultValue='EUR'
                onChange={handleChange1}
        >
          {
            Object.keys(currencies).map((currencyKey,index)=> <Option key={index} value={currencyKey}>{`${currencyKey} `}</Option>)
          }
        </Select>
      </label>
      <label> <span className="base">To:</span>
        <Select
          defaultValue="USD"
          onChange={handleChange2}
        >
          {
            Object.keys(currencies).map((currencyKey,index )=> <Option key={index} value={currencyKey}>{`${currencyKey} `}</Option>)
          }
        </Select>
      </label>
      <label> <span className="base">Amount </span>
        <input min={0} className="inputAmount" type="number" onChange={inputChange} value={amount}/><br/>
      </label>
      <label className="result">Result: <span className="base">{result}</span>
      </label>
    </>
  )
}