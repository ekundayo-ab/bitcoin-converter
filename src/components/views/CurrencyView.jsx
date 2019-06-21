import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components';

import { headerAndSegment, message } from '../../styles/shared'
import predefinedCurrencies from '../../core/currencies';
import SegmentHeader from '../UI/SegmentHeader';

const Currency = ({ history }) => {
  const [currencies, setCurrencies] = useState([])
  const [currenciesError, setCurrenciesError] = useState(false)

  const isFirstRun = useRef(true);

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!currencies.length) {
      setCurrenciesError(true)
      return
    }

    history.push('/results')
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

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    console.log(currencies)
    if (!currencies.length) { setCurrenciesError(true) }
    if (currencies.length && currenciesError) { setCurrenciesError(false) }
  }, [currencies, currenciesError])

  const rbc = localStorage.rbc ? JSON.parse(localStorage.rbc) : ''

  return (
    <StyledCurrency className="ui raised very padded text container segment">
      <SegmentHeader
        icon="money bill alternate"
        title={`Hello, ${rbc && rbc.name ? rbc.name + '!' : ''} select any currency(ies)
        to convert from today's Bitcoin value.`}
      />

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

        <button type="submit" className="ui fluid massive button">See Conversions</button>
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

export default Currency