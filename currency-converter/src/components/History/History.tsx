import React from 'react'
import {HistoryCurrencySelector} from "../HistoryCurrencySelector/HistoryCurrencySelector";
import {RateCurrencyHistoryTable} from "../RateCurrencyHistoryTable/RateCurrencyHistoryTable";

export const History=()=> (
        <>
            <HistoryCurrencySelector/>
            <RateCurrencyHistoryTable/>
        </>
    )
