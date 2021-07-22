import React, {useEffect, useState,useContext} from 'react';
import {Table} from 'antd';
import './RateCurrencyTable.css';

const status=(responseFromApi: Response) =>{
    if (!responseFromApi.ok) {
        throw new Error(responseFromApi.statusText);
    }

    return responseFromApi;
}

export const RateCurrencyTable=(props:any)=> {
    const columns = [
        {
            title: 'Currency name',
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
                value: `${(props.currencies[ratesKey]).toFixed(4)}`,
            }
        )
    })

    return (
        <div>
            <Table columns={columns} dataSource={data} size="middle"/>
        </div>
    )
}