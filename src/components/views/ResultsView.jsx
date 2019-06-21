import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { headerAndSegment } from '../../styles/shared'
import SegmentHeader from '../UI/SegmentHeader';

const ResultsView = () => {
  return (
    <StyledResults className="ui raised very padded text container segment">
      <SegmentHeader
        icon="calculator"
        title="1 BTC converted to currencies below"
      />

      <div className="ui hidden divider"></div>

      <div className="ui four stackable cards">
        <div className="ui card raised">
          <div className="content">
            <div className="header">$500</div>
            <div className="description">
              U.S. Dollar
            </div>
          </div>
        </div>
        <div className="ui card raised">
          <div className="content">
            <div className="header">¥3600.6</div>
            <div className="description">
              Japanese Yen
            </div>
          </div>
        </div>
        <div className="ui card raised">
          <div className="content">
            <div className="header">₦2500</div>
            <div className="description">
              Nigerian Naira
            </div>
          </div>
        </div>
        <div className="ui card raised">
          <div className="content">
            <div className="header">$500</div>
            <div className="description">
              U.S. Dollar
            </div>
          </div>
        </div>
        <div className="ui card raised">
          <div className="content">
            <div className="header">$500</div>
            <div className="description">
              U.S. Dollar
            </div>
          </div>
        </div>
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
