import React, {useEffect, useState} from 'react';
import {Select} from 'antd';
import "../../index.css";
import "antd/dist/antd.css";
import './BaseCurrencySelector.css';

const {Option} = Select;

const status = (responseFromApi: Response) => {
    if (!responseFromApi.ok) {
        throw new Error(responseFromApi.statusText);
    }

    return responseFromApi;
    console.log(responseFromApi)
}

export const BaseCurrencySelector = () => {
    const handleChange = (value: string) => {
        console.log(value);
    }

    const [currencies, setCurrencies] = useState<Record<string, number>>({});
    const [baseCurrencies, setBaseCurrencies] = useState<string>('EUR');

    useEffect(() => {
        fetch(`http://data.fixer.io/api/latest?access_key=1fb3925f0accbb455a20ff47481756f0`)
            .then(status)
            .then(response => response.json())
            .then(json => {
                setCurrencies(json.rates)
                setBaseCurrencies(json.base)
            })
            .catch(error => {

                return Promise.reject()
            })
    }, []);

    return (
        <div>
            <span className="baseLabelHome">Base:</span>
            <Select className="baseSelectHome"
                    defaultValue={baseCurrencies}
                    onChange={handleChange}
            >
                {
                    Object.keys(currencies).map(currencyKey => {

                        return (
                            <Option value={currencyKey}>{`${currencyKey} `}</Option>
                        )
                    })
                }
            </Select>
        </div>
    )
}

//${currencies[currencyKey].
//@ts-ignore
//