import {DatePicker, Space} from 'antd';
import React from "react";
import moment, {Moment} from "moment";

const {RangePicker} = DatePicker;


var jun = moment("2014-06-01");

interface IPropsDataP{
    setDateStart: (value: string) => void;
    setDateEnd: (value: string) => void;
}


export const DataP = (props: IPropsDataP) => {
    const handleChange = (e:any) => {
        console.log(e)
        const hh = e[0].format("YYYY-MM-DD");
        const lh = e[1].format("YYYY-MM-DD");

        props.setDateStart(hh)
        props.setDateEnd(lh)
    }

    return (
        <Space direction="vertical" size={12}>
            <RangePicker  onChange={handleChange}/>
        </Space>
    )
};
//Record<string,Moment>



