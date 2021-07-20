import React from 'react';
import {Select} from 'antd';
import "./index.css";
import "antd/dist/antd.css";

const {Option} = Select;

interface IValue {
    value: string
    label: string;
}

export function Selected3() {
    function handleChange(value: string) {
        console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
    }

    const defaultValue = 'jack'
    return (
        <>
            <label> <span className="base">From:</span>
        <Select className="select"
            defaultValue={defaultValue}
            style={{width: 120}}
            onChange={handleChange}
        >
            <Option value="jack">Jack (100)</Option>
            <Option value="lucy">Lucy (101)</Option>
        </Select>
            </label>
            <label > <span className="base">To:</span>
    <Select
        defaultValue={defaultValue}
        style={{width: 120}}
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