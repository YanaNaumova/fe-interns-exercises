import React from 'react'
import {BaseCurrencySelector} from "../BaseCurrencySelector/BaseCurrencySelector";
import {RateCurrencyTable} from "../RateCurrencyTable/RateCurrencyTable";

export const Home=()=> (
        <>
            <BaseCurrencySelector/>
            <RateCurrencyTable/>
        </>
    )
