import React, {useMemo} from "react";
import Divider from "@mui/material/Divider";
import {LocalizationProvider} from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterLuxon';
import Head from '@docusaurus/Head';
import BrowserOnly from '@docusaurus/BrowserOnly';
import ThemeAdaptor from "../ThemeAdaptor";


function CommonChart({chart: rawChart, noSearch, ...rest}) {
  const chart = useMemo(() => {
    if (typeof rawChart === 'string') {
      return require('../RemoteCharts/' + rawChart + '/index.js').default
    } else {
      return rawChart
    }
  }, [rawChart])

  const {form, query} = chart.useForm({ noSearch })

  const child = React.createElement(chart.Chart, {
    ...query,
    ...rest
  })

  return (
    <LocalizationProvider dateAdapter={DateAdapter}>
      <ThemeAdaptor>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        {form}
        <Divider sx={{my: 2}} />
        {child}
      </ThemeAdaptor>
    </LocalizationProvider>
  )
}

export default function (props) {
  return <BrowserOnly>{() => <CommonChart {...props} />}</BrowserOnly>
}
