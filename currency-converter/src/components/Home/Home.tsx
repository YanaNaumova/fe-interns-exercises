import React, {useEffect, useState} from 'react'
import {BaseCurrencySelector} from "../BaseCurrencySelector/BaseCurrencySelector";
import {RateCurrencyTable} from "../RateCurrencyTable/RateCurrencyTable";

export const Home = () => {

  const changeStatus = (responseFromApi: Response) => {
    if (!responseFromApi.ok) {
      throw new Error(responseFromApi.statusText);
    }

    return responseFromApi;
  }

  const [currencies, setCurrencies] = useState<Record<string, number>>({});
  const [baseCurrencies, setBaseCurrencies] = useState<string>('EUR');

  useEffect(() => {
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?from=${baseCurrencies}`)
      .then(changeStatus)
      .then(response => response.json())
      .then(json => {
        setCurrencies(json.rates)
      })
      .catch(error => {

        return Promise.reject()
      })
  }, [baseCurrencies]);

  return (
    <>
      <BaseCurrencySelector currencies={currencies} setBaseCurrencies={setBaseCurrencies}/>
      <RateCurrencyTable currencies={currencies}/>
    </>
  )
}
