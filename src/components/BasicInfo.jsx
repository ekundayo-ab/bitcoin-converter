import React from 'react'
import styled from 'styled-components';

import { headerAndSegment } from '../styles/shared'
import SegmentHeader from './SegmentHeader';

const BasicInfo = () => {
  return (
    <StyledBasicInfo className="ui raised very padded text container segment">
      <SegmentHeader icon="user" title="What is your name?" />

      <form className="ui massive form">
        <div className="field">
          <input placeholder="Name" type="text" />
        </div>

        <button type="button" className="ui fluid massive button"> Next</button>
      </form>
    </StyledBasicInfo>
  )
}

const StyledBasicInfo = styled.div`
  ${headerAndSegment}
`;

export default BasicInfo
