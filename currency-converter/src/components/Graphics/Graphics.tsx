import * as React from 'react';
import { Chart, ChartTitle, ChartSeries, ChartSeriesItem, ChartCategoryAxis, ChartCategoryAxisItem } from '@progress/kendo-react-charts';
import 'hammerjs';
import "./Graphics.css";
import '@progress/kendo-theme-default/dist/all.css';
import moment, {Moment} from "moment";

interface IRateHistoryProps {
  currencies: Record<string, Record<string, number>>
  historyCurrencies: string;
}



export const ChartContainer = (props: IRateHistoryProps) => {
  const data = Object.keys(props.currencies).map((ratesKey, index) => {
    return (
      {
        key: `${index}`,
        value: `${props.currencies[ratesKey][props.historyCurrencies] ? props.currencies[ratesKey][props.historyCurrencies] : '0.00'}`,
      })
  })

  const categories = Object.keys(props.currencies).map((ratesKey, index) => {
    return ratesKey
  })
console.log(categories)
  return(
  <Chart>
      <ChartTitle text="Rate" />
          <ChartCategoryAxis>
                <ChartCategoryAxisItem
                  title={{
                  text: 'Date'
                  }}
                  categories={categories}

                />
          </ChartCategoryAxis>
          <ChartSeries>
              <ChartSeriesItem
                type="line"
                data={data}
              />
          </ChartSeries>
  </Chart>
)};

