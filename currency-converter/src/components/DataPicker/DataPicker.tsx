import {DatePicker, Space} from 'antd';
import React from "react";
import moment, {Moment} from "moment";
import {RangeValue} from "rc-picker/lib/interface";

const {RangePicker} = DatePicker;

interface IPropsDataP {
  setDateStart: (value: string) => void;
  setDateEnd: (value: string) => void;
}

export const DataP = (props: IPropsDataP) => {
  const handleChange = (dates: RangeValue<Moment>, dateStrings: [string, string]) => {
    props.setDateStart(dateStrings[0])
    props.setDateEnd(dateStrings[1])
  }

  return (
    <Space direction="vertical" size={12}>
      <RangePicker defaultValue={[moment().subtract(3, "days"), moment()]} onChange={handleChange}/>
    </Space>
  )
};



