import React from 'react';
import {Table} from 'antd';
import './RateCurrencyTable.css';

interface IRateCurrencyProps {
  currencies: Record<string, number>
}

export const RateCurrencyTable = (props: IRateCurrencyProps) => {
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