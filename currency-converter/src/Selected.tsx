import React, {useEffect, useState} from 'react';
import {Select} from 'antd';
import "./index.css";
import "antd/dist/antd.css";

const {Option} = Select;
//
// interface IValue {
//     value: string
//     label: string;
// }

function status(res:any) {
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    return res;
}

export function Selected() {
    function handleChange(value: string) {
        console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
    }

    const [currencies, setCurrencies] = useState<Record<string, number>>({});
    const [baseCurrencies, setBaseCurrencies] =useState<Record<string, string>>({});

    useEffect(() => {
        fetch(`http://data.fixer.io/api/latest?access_key=1fb3925f0accbb455a20ff47481756f0`)
            .then(status)
            .then(res => res.json())
            .then(json => {
                setCurrencies(json.rates)
                setBaseCurrencies(json.base)
           })
            .catch(error => {
                return Promise.reject()
            })
    }, []);

const defaultValue= baseCurrencies.toString();
console.log(baseCurrencies)


    return (
<div>
    <span className="baseLabelHome">Base:</span>
        <Select className="baseSelectHome"

            // defaultValue={defaultValue}
            defaultValue="EUR"
            style={{width: 120}}
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
// toFixed(2)}
//@ts-ignore