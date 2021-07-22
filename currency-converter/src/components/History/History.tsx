import React, {useEffect, useState} from 'react'
import {HistoryCurrencySelector} from "../HistoryCurrencySelector/HistoryCurrencySelector";
import {RateCurrencyHistoryTable} from "../RateCurrencyHistoryTable/RateCurrencyHistoryTable";

export const History = () => {
    const changeStatus = (responseFromApi: Response) => {
        if (!responseFromApi.ok) {
            throw new Error(responseFromApi.statusText);
        }

        return responseFromApi;
    }

    const date = new Date();
    let day: string | number = date.getDate();
    let month: string | number = date.getMonth();
    let year = date.getFullYear();
    if (day < 10) day = "0" + day;
    if (month < 10) month = "0" + month;
    let newdateStr: string = year + '-' + month + '-' + day;
    const [currencies, setCurrencies] = useState<Record<string, number>>({});
    const [currenciesFoSelect, setCurrenciesFoSelect] = useState<Record<string, number>>({});
    const [baseCurrencies, setBaseCurrencies] = useState<string>('EUR');
    const [historyCurrencies, setHistoriCurrencies] = useState<string>('USD');
    const [dateStart, setDateStart] = useState<string>(newdateStr);
    const [dateEnd, setDateEnd] = useState<string>(`${newdateStr}`);

    useEffect(() => {
        const host = 'api.frankfurter.app';
        const currencyValue = baseCurrencies;
        fetch(`https://${host}/latest?from=${currencyValue}`)
            .then(changeStatus)
            .then(response => response.json())
            .then(json => {
                setCurrenciesFoSelect(json.rates)
            })
            .catch(error => {

                return Promise.reject()
            })
    }, [baseCurrencies, historyCurrencies]);

    useEffect(() => {
        const host = 'api.frankfurter.app';
        fetch(`https://${host}/${dateStart}..${dateEnd}?from=${baseCurrencies}&to=${historyCurrencies}`)
            .then(changeStatus)
            .then(response => response.json())
            .then(json => {
                setCurrencies(json.rates)
            })
            .catch(error => {

                return Promise.reject()
            })
    }, [baseCurrencies, dateStart, dateEnd, historyCurrencies]);

    return (

        <>
            <HistoryCurrencySelector currenciesFoSelect={currenciesFoSelect} currencies={currencies}
                                     setBaseCurrencies={setBaseCurrencies} setDateStart={setDateStart}
                                     setDateEnd={setDateEnd} setHistoriCurrencies={setHistoriCurrencies}/>
            <RateCurrencyHistoryTable currencies={currencies} historyCurrencies={historyCurrencies}/>
        </>
    )
}
