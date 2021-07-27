import React from 'react';
import {Select} from 'antd';
import "antd/dist/antd.css";
import {DataP} from "../DataPicker/DataPicker";
import './HistoryCurrencySelector.css'

const {Option} = Select;

interface IHistoryCurrencyProps {
  currenciesFoSelect: Record<string, number>;
  setBaseCurrencies: (value: string) => void;
  setDateStart: (value: string) => void;
  setDateEnd: (value: string) => void;
  setHistoryCurrencies: (value: string) => void;
}

export const HistoryCurrencySelector: React.FC<IHistoryCurrencyProps> = (
  {
    currenciesFoSelect,
    setBaseCurrencies,
    setDateStart,
    setDateEnd,
    setHistoryCurrencies,
  }) => {
  const handleBaseCurrencyChange = (value: string) => {
    setBaseCurrencies(value)
  }

  const handleHistoryCurrencyChange = (value: string) => {
    setHistoryCurrencies(value)
  }

  const defaultValue = 'EUR';

  return (
    <>
      <label> <span className="base">Base:</span>
        <Select className="select"
                defaultValue={defaultValue}
                onChange={handleBaseCurrencyChange}
        >
          {
            Object.keys(currenciesFoSelect).map((currencyKey, index) => <Option key={index}
                                                                                value={currencyKey}>{`${currencyKey} `}</Option>)
          }
        </Select>
      </label>
      <label> <span className="base">History of:</span>
        <Select
          defaultValue="USD"
          onChange={handleHistoryCurrencyChange}
        >
          {
            Object.keys(currenciesFoSelect).map((currencyKey, index) => <Option key={index}
                                                                                value={currencyKey}>{`${currencyKey} `}</Option>)
          }
        </Select>
      </label>
      <label><span className="base">Data range:</span>
        <DataP setDateStart={setDateStart} setDateEnd={setDateEnd}/>
      </label>
    </>
  )
}