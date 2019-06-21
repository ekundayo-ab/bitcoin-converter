import React, { useState, useLayoutEffect } from 'react'
import styled from 'styled-components';

import { headerAndSegment, message } from '../../styles/shared'
import SegmentHeader from '../UI/SegmentHeader';
import { useErrorSetter } from '../../core/hooks';

const BasicInfo = ({ history }) => {
  useLayoutEffect(()=> {
    const liteDB = JSON.parse(localStorage.getItem('rbc'))
    if (liteDB && liteDB.name) {
      history.push('/currencies');
    }
  },[history, history.location.pathname]);

  const [name, setName] = useState('')
  const [nameError, setNameError] = useErrorSetter(!!name)

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!name) {
      setNameError(true)
      return
    }

    localStorage.setItem('rbc', JSON.stringify({ name }))
    history.push('/currencies')
  }

  return (
    <StyledBasicInfo className="ui raised very padded text container segment">
      <SegmentHeader icon="user" title="What is your name?" />
      
      <div className="ui hidden divider"></div>

      <form onSubmit={handleSubmit} className="ui massive form">
        <div className={`ui field fluid input ${nameError && 'error'}`}>
          <input
            name="name"
            placeholder="Name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        {nameError && <div className="ui big negative message">Name is required!</div>}

        <button type="submit" className="ui fluid massive button"> Next</button>
      </form>
    </StyledBasicInfo>
  )
}

const StyledBasicInfo = styled.div`
  ${headerAndSegment}
  ${message}
`;

export default BasicInfo
