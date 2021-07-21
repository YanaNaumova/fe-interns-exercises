import React from 'react';
import {Table} from 'antd';
import './RateCurrencyHistoryTable.css';

export const RateCurrencyHistoryTable=()=> {
    const columns = [
        {
            title: 'Date story by this',
            dataIndex: 'name',
        },
        {
            title: 'Rate',
            dataIndex: 'age',
        },
    ];

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
        },
    ];

    return (
        <div>
            <Table columns={columns} dataSource={data} size="middle"/>
        </div>
    )
}