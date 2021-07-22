import React from 'react';
import {Select} from 'antd';
import "../../index.css";
import "antd/dist/antd.css";
import {DataP} from "../DataPicker/DataPicker";
import './HistoryCurrencySelector.css'

const {Option} = Select;

export const HistoryCurrencySelector = (props: any) => {

    const handleChange1 = (value: string) => {
        props.setBaseCurrencies(value)
    }
    const handleChange2 = (value: string) => {
        props.setHistoriCurrencies(value)
    }
    const defaultValue = 'EUR';

    return (
        <>
            <label> <span className="base">Base:</span>
                <Select className="select"
                        defaultValue={defaultValue}
                        onChange={handleChange1}
                >
                    {
                        Object.keys(props.currenciesFoSelect).map(currencyKey => {

                            return (
                                <Option value={currencyKey}>{`${currencyKey} `}</Option>
                            )
                        })
                    }
                </Select>
            </label>
            <label> <span className="base">History of:</span>
                <Select
                    defaultValue="USD"
                    onChange={handleChange2}
                >
                    {
                        Object.keys(props.currenciesFoSelect).map(currencyKey => {

                            return (
                                <Option value={currencyKey}>{`${currencyKey} `}</Option>
                            )
                        })
                    }
                </Select>
            </label>
            <label><span className="base">Data range:</span>
                <DataP setDateStart={props.setDateStart} setDateEnd={props.setDateEnd}/>
            </label>
        </>
    )
}