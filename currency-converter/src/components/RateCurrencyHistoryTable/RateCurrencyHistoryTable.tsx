import React from 'react';
import {Table} from 'antd';
import './RateCurrencyHistoryTable.css';

export const RateCurrencyHistoryTable = (props: any) => {
    const columns = [
        {
            title: 'Date',
            dataIndex: 'rate',
        },
        {
            title: 'Rate',
            dataIndex: 'value',
        },
    ];

    const data = Object.keys(props.currencies).map((ratesKey, index) => {

        return (
            {
                key: `${index}`,
                rate: `${ratesKey}`,
                value: `${props.currencies[ratesKey][props.historyCurrencies]}`,
            }
        )
    })

    return (
        <div>
            <Table columns={columns} dataSource={data} size="middle"/>
        </div>
    )
}