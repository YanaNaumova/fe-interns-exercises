import React from 'react';
import {Select} from 'antd';
import "./index.css";
import "antd/dist/antd.css";
import {DataP} from "./DataPicker";

const {Option} = Select;

interface IValue {
    value: string
    label: string;
}

export function Selected2() {
    function handleChange(value: string) {
        console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
    }

    const defaultValue = 'jack'
    return (
        <>
            <label> <span className="base">Base:</span>
        <Select className="select"
            defaultValue={defaultValue}
            style={{width: 120}}
            onChange={handleChange}
        >
            <Option value="jack">Jack (100)</Option>
            <Option value="lucy">Lucy (101)</Option>
        </Select>
            </label>
            <label > <span className="base">History of:</span>
    <Select
        defaultValue={defaultValue}
        style={{width: 120}}
        onChange={handleChange}
    >
        <Option value="jack">Jack (100)</Option>
        <Option value="lucy">Lucy (101)</Option>
    </Select>
            </label>
            <label><span className="base">Data range::</span>
                <DataP/>
            </label>
        </>
    )
}