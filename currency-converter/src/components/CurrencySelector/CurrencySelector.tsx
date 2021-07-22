import React, {useEffect, useState} from 'react';
import {Select} from 'antd';
import "../../index.css";
import "antd/dist/antd.css";
import './CurrencySelector.css'

const {Option} = Select;

export const CurrencySelector=()=> {

    const [amount, setAmount] = useState<number>(0);
    const handleChange1 = (value: string) => {
        setBaseCurrencies(value)
    }
    const handleChange2 = (value: string) => {
        setHistoriCurrencies(value)
    }
    const inputChange=(event:any) => {

        setAmount(event.target.value);
    }
console.log(typeof amount)
    const changeStatus = (responseFromApi: Response) => {
        if (!responseFromApi.ok) {
            throw new Error(responseFromApi.statusText);
        }

        return responseFromApi;
    }

    const [currencies, setCurrencies] = useState<Record<string, number>>({});
    const [currency, setCurrency] = useState<Record<string, number>>({});
    const [baseCurrencies, setBaseCurrencies] = useState<string>('EUR');
    const [historyCurrencies, setHistoriCurrencies] = useState<string>('USD');

    useEffect(() => {
        const host = 'api.frankfurter.app';
        const currencyValue = baseCurrencies;
        fetch(`https://${host}/latest?from=${currencyValue}`)
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
        const host = 'api.frankfurter.app';
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
    const result=(currency[historyCurrencies]*amount).toFixed(2);

    return (
        <>
            <label> <span className="base">From:</span>
                <Select className="select"
                        defaultValue='EUR'
                        onChange={handleChange1}
                >
                    {
                        Object.keys(currencies).map(currencyKey => {

                            return (
                                <Option value={currencyKey}>{`${currencyKey} `}</Option>
                            )
                        })
                    }
                </Select>
            </label>
            <label> <span className="base">To:</span>
                <Select
                    defaultValue="USD"
                    onChange={handleChange2}
                >
                    {
                        Object.keys(currencies).map(currencyKey => {

                            return (
                                <Option value={currencyKey}>{`${currencyKey} `}</Option>
                            )
                        })
                    }
                </Select>
            </label>
            <label> <span className="base">Amount </span>
                <input className="inputAmount" type="text" onChange={inputChange}/><br/>
            </label>
            <label className="result">Result: <span className="base">{result}</span>
            </label>
        </>
    )
}