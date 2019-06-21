import React from 'react'
import styled from 'styled-components';

import { headerAndSegment } from '../styles/shared'
import currencies from '../data/currencies';
import SegmentHeader from './SegmentHeader';

const Currency = () => {
  return (
    <StyledCurrency className="ui raised very padded text container segment">
      <SegmentHeader
        icon="money bill alternate"
        title="Hello, Ekundayo! select any currency(ies)
        to convert from today's Bitcoin value."
      />

      <form className="ui massive form">
        <div className="currencies">
          {
            currencies.map(currency => {
              return <div className="field rbc checkbox" key={currency.code}>
                <input type="checkbox" name="currencies" id={currency.code} />
                <label htmlFor={currency.code}>
                  <i className={`${currency.name.toLowerCase()} flag`}></i>
                  {currency.name} - {currency.code} ({currency.symbol})
                </label>
              </div>
            })
          }
        </div>

        <button type="button" className="ui fluid massive button">See Conversions</button>
      </form>
    </StyledCurrency>
  )
}

const StyledCurrency = styled.div`
  ${headerAndSegment}

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
