import axios from 'axios';
import definedCurrencies from './currencies';
const crypto = require('crypto')

const timestamp = () => Math.floor((new Date().getTime()) / 1000, 10)
const payload = `${timestamp()}.${process.env.REACT_APP_PUBLIC_KEY}`

const digestValue = crypto.createHmac('sha256', process.env.REACT_APP_SECRET_KEY)
                      .update(payload)
                      .digest('hex');
const signature = `${payload}.${digestValue}`

const apiClient = axios.create({
  baseURL: 'https://apiv2.bitcoinaverage.com/',
  headers: {'X-Signature': signature }
});

export const convertToSelectedCurrencies = async (selectedCurrencies) => {
  const rates = await fetchGlobalExchangeRates()
  const usdPrice = await fetchConversionForUSD()

  const currenciesInBTC = []
  selectedCurrencies.forEach(currency => {
    const currencyDetails = definedCurrencies.find(curr => curr.code === currency)

    if (currencyDetails) {
      const { code, name, symbol } = currencyDetails
      currenciesInBTC.push(
        {
          code,
          name,
          symbol,
          price: Number(Number(rates[code].rate) * usdPrice).toFixed(2)
        }
      )
    }
  })

  return currenciesInBTC
}

export const fetchGlobalExchangeRates = () => {
  return apiClient.get('constants/exchangerates/global')
    .then(response => response.data.rates)
}

export const fetchConversionForUSD = () => {
  return apiClient.get('convert/global?from=BTC&to=USD&amount=1')
    .then(response => response.data.price)
}
