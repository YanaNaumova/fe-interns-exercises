import React, {useEffect, useState} from 'react';
import {Select} from 'antd';
import "../../index.css";
import "antd/dist/antd.css";
import './BaseCurrencySelector.css';

const {Option} = Select;
interface IBaseCurrencyProps {
    setBaseCurrencies:(value:string) => void;
    currencies:Record<string, number>;
}

export const BaseCurrencySelector = (props:IBaseCurrencyProps) => {

    const handleChange = (value: string) => {
        props.setBaseCurrencies(value)
    }

    return (
        <div>
            <span className="baseLabelHome">Base:</span>
            <Select className="baseSelectHome"
                    defaultValue='EUR'
                    onChange={handleChange}
            >
                {
                    Object.keys(props.currencies).map(currencyKey => {

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