import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { headerAndSegment } from '../../styles/shared'
import SegmentHeader from '../UI/SegmentHeader';

const NotFoundView = () => {
  return (
    <StyledNotFound className="ui raised very padded text container segment">
      <SegmentHeader icon="bitcoin" title="Page not found" />

      <Link to="/currencies" className="ui fluid massive button">Set Currencies</Link>
    </StyledNotFound>
  )
}

const StyledNotFound = styled.div`
  ${headerAndSegment}
`;

export default NotFoundView;
