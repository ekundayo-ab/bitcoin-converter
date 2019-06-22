import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { headerAndSegment } from '../../styles/shared'
import SegmentHeader from '../UI/SegmentHeader';
import CurrencyCard from '../UI/CurrencyCard';

const ResultsView = ({ history }) => {
  const [results, setResults] = useState([])

  useEffect(() => {
    setResults(history.location.state.currenciesInBTC)
  }, [history, results, results.length])

  return (
    <StyledResults className="ui raised very padded text container segment">
      <SegmentHeader
        icon="calculator"
        title="1 BTC converted to currencies below"
      />

      <div className="ui hidden divider"></div>

      <div className="ui four stackable cards">
        {
          results.map(result =>
            <CurrencyCard
              key={result.code}
              name={result.name}
              code={result.code}
              price={result.price}
              symbol={result.symbol}
            />
          )
        }

      </div>

      <div className="ui hidden divider"></div>
      <Link to="/currencies" className="ui fluid massive button">Set Currencies</Link>
    </StyledResults>
  )
}

const StyledResults = styled.div`
  ${headerAndSegment}
`;

export default ResultsView
