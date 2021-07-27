import React, {useEffect, useState} from 'react'
import {HistoryCurrencySelector} from "../HistoryCurrencySelector/HistoryCurrencySelector";
import {RateCurrencyHistoryTable} from "../RateCurrencyHistoryTable/RateCurrencyHistoryTable";
import moment from "moment";
import {ChartContainer} from "../Graphics/Graphics";

export const History = () => {
  const changeStatus = (responseFromApi: Response) => {
    if (!responseFromApi.ok) {
      throw new Error(responseFromApi.statusText);
    }

    return responseFromApi;
  }
  const newDateStr = moment(new Date())
    .format("YYYY-MM-DD")
    .toString();

  const [currencies, setCurrencies] = useState<Record<string, Record<string, number>>>({});
  const [currenciesFoSelect, setCurrenciesFoSelect] = useState<Record<string, number>>({});
  const [baseCurrencies, setBaseCurrencies] = useState<string>('EUR');
  const [historyCurrencies, setHistoryCurrencies] = useState<string>('USD');
  const [dateStart, setDateStart] = useState<string>(newDateStr);
  const [dateEnd, setDateEnd] = useState<string>(`${newDateStr}`);

  const host = 'api.frankfurter.app';
  useEffect(() => {
    fetch(`https://${host}/latest?from=${baseCurrencies}`)
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
    if (!dateStart || !dateEnd) {
      setCurrencies({});
      return;
    }
    let newStartDate = dateStart;
    if (newStartDate === dateEnd) {
      newStartDate = moment(Date.parse(dateStart))
        .subtract(3, 'days')
        .format("YYYY-MM-DD")
        .toString();
    }
    fetch(`https://${host}/${newStartDate}..${dateEnd}?from=${baseCurrencies}&to=${historyCurrencies}`)
      .then(changeStatus)
      .then(response => response.json())
      .then(json => {
        setCurrencies(json.rates)
      })
      .catch(error => {
        return Promise.reject();
      });
  }, [baseCurrencies, dateStart, dateEnd, historyCurrencies]);

  return (
    <>
      <HistoryCurrencySelector
        currenciesFoSelect={currenciesFoSelect}
        setBaseCurrencies={setBaseCurrencies}
        setDateStart={setDateStart}
        setDateEnd={setDateEnd}
        setHistoryCurrencies={setHistoryCurrencies}/>
      <RateCurrencyHistoryTable
        currencies={currencies}
        historyCurrencies={historyCurrencies}/>
      <ChartContainer currencies={currencies}
                      historyCurrencies={historyCurrencies}/>
    </>

  )
}
