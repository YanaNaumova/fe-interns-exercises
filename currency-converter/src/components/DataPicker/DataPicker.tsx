import {DatePicker, Space} from 'antd';

const {RangePicker} = DatePicker;

export const DataP = (props: any) => {
    const handleChange = (e: any) => {

        const hh = e[0].format("YYYY-MM-DD");
        const lh = e[1].format("YYYY-MM-DD");

        props.setDateStart(hh)
        props.setDateEnd(lh)
    }

    return (
        <Space direction="vertical" size={12}>
            <RangePicker onChange={handleChange}/>
        </Space>
    )
};



