import React, {useEffect, useState} from 'react';
import {Table} from 'antd';

function status(res: any) {
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    return res;
}

export function Table1() {
    function handleChange(value: string) {
        console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
    }

    const [rates, setRates] = useState<Record<string, number>>({});


    useEffect(() => {
        fetch(`http://data.fixer.io/api/latest?access_key=1fb3925f0accbb455a20ff47481756f0`)
            .then(status)
            .then(res => res.json())
            .then(json => {
                setRates(json.rates)

            })
            .catch(error => {
                return Promise.reject()
            })
    }, []);


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
    const data = Object.keys(rates).map((ratesKey,index) => {
        return (

            {
                key: `${index}`,
                rate: `${ratesKey}`,
                value: `${(rates[ratesKey]).toFixed(4)}`,
            }
        )
    })

    return (
        <div>
            <Table columns={columns} dataSource={data} size="middle"/>
        </div>
    )
}