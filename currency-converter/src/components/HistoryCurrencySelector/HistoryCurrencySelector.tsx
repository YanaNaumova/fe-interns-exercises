import React from 'react';
import {Select} from 'antd';
import "../../index.css";
import "antd/dist/antd.css";
import {DataP} from "../DataPicker/DataPicker";
import './HistoryCurrencySelector.css'

const {Option} = Select;

export const HistoryCurrencySelector=()=> {
    const handleChange=(value: string)=> {console.log(value)}

    const defaultValue = 'jack';

    return (
        <>
            <label> <span className="base">Base:</span>
                <Select className="select"
                        defaultValue={defaultValue}
                        onChange={handleChange}
                >
                    <Option value="jack">Jack (100)</Option>
                    <Option value="lucy">Lucy (101)</Option>
                </Select>
            </label>
            <label> <span className="base">History of:</span>
                <Select
                    defaultValue={defaultValue}
                    onChange={handleChange}
                >
                    <Option value="jack">Jack (100)</Option>
                    <Option value="lucy">Lucy (101)</Option>
                </Select>
            </label>
            <label><span className="base">Data range:</span>
                <DataP/>
            </label>
        </>
    )
}