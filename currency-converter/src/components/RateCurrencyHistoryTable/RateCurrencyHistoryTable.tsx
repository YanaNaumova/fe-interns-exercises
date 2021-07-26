import React from 'react';
import {Table} from 'antd';
import './RateCurrencyHistoryTable.css';

interface IRateHistoryProps {
  currencies: Record<string, Record<string, number>>
  historyCurrencies: string;
}

export const RateCurrencyHistoryTable = (props: IRateHistoryProps) => {
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
        value: `${props.currencies[ratesKey][props.historyCurrencies] ? props.currencies[ratesKey][props.historyCurrencies] : '0.00'}`,
      })
  })

  return (
    <div>
      <Table columns={columns} dataSource={data} size="middle"/>
    </div>
  )
}