import { DatePicker, Space } from 'antd';


const { RangePicker } = DatePicker;

export function DataP(){
    return(
        <Space direction="vertical" size={12}>
            <RangePicker />
        </Space>

    )
}

