import React from 'react';
import {Select} from 'antd';
import "../../index.css";
import "antd/dist/antd.css";
import './CurrencySelector.css'

const {Option} = Select;

export const CurrencySelector=()=> {
    const handleChange=(value: string)=> {console.log(value)}
    const defaultValue = 'jack'

    return (
        <>
            <label> <span className="base">From:</span>
                <Select className="select"
                        defaultValue={defaultValue}
                        onChange={handleChange}
                >
                    <Option value="jack">Jack (100)</Option>
                    <Option value="lucy">Lucy (101)</Option>
                </Select>
            </label>
            <label> <span className="base">To:</span>
                <Select
                    defaultValue={defaultValue}
                    onChange={handleChange}
                >
                    <Option value="jack">Jack (100)</Option>
                    <Option value="lucy">Lucy (101)</Option>
                </Select>
            </label>
            <label> <span className="base">Amount </span>
                <input className="inputAmount" type="text"/><br/>
            </label>
            <label className="result">Result: <span className="base">234 </span>
            </label>
        </>
    )
}