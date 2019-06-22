import React, { useState } from 'react'
import styled from 'styled-components';

import { headerAndSegment, message } from '../../styles/shared'
import predefinedCurrencies from '../../core/currencies';
import { useErrorSetter } from '../../core/hooks';
import SegmentHeader from '../UI/SegmentHeader';
import { convertToSelectedCurrencies } from '../../core/api';

const CurrencyView = ({ history }) => {
  const [currencies, setCurrencies] = useState([])
  const [currenciesError, setCurrenciesError] = useErrorSetter(!!currencies.length)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!currencies.length) {
      setCurrenciesError(true)
      return
    }

    setLoading(true)
    const currenciesInBTC = await convertToSelectedCurrencies(currencies)
    history.push('/results', { currenciesInBTC })
  }

  const handleChange = (event, code) => {
    event.persist()

    setCurrencies(existingCurrencies => {
      if (event.target && event.target.checked) {
        return [...existingCurrencies, code]
      }

      return [...existingCurrencies.filter(currency => currency !== code)]
    })
  }

  const rbc = localStorage.rbc ? JSON.parse(localStorage.rbc) : ''

  return (
    <StyledCurrency className="ui raised very padded text container segment">
      <SegmentHeader
        icon="money bill alternate"
        title={`Hello, ${rbc && rbc.name ? rbc.name + '!' : ''} select any currency(ies)
        to convert from today's Bitcoin value.`}
      />

      <div className="ui hidden divider"></div>

      <form onSubmit={handleSubmit} className="ui massive form">
        <div className="currencies">
          {
            predefinedCurrencies.map(currency =>
              <div className="field rbc checkbox" key={currency.code}>
                <input
                  type="checkbox"
                  name="currencies"
                  id={currency.code}
                  onChange={(evt) => handleChange(evt, currency.code)}
                />
                <label htmlFor={currency.code}>
                  <i className={`${currency.name.toLowerCase()} flag`}></i>
                  {currency.name} - {currency.code} ({currency.symbol})
                </label>
              </div>)
          }
        </div>
        { currenciesError &&
          <div className="ui big negative message">
            At least one currency should be chosen!
          </div>
        }

        <button type="submit" disabled={loading} className={`ui fluid massive button ${loading && 'loading'}`}>
          See Conversions
        </button>
      </form>
    </StyledCurrency>
  )
}

const StyledCurrency = styled.div`
  ${headerAndSegment}
  ${message}
  .ui.form .field {
    margin-bottom: 0;
  }

  .currencies {
    position: relative;
    height: 300px;
    overflow: scroll;
    border: 1px solid rgba(34,36,38,.15);
    color: rgba(0,0,0,.87);
    padding: 20px;
    border-radius: .28571429rem;
    margin-bottom: 1em;
  }
`;

export default CurrencyView
