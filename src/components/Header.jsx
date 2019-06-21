import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

import routes from '../routes';

const Header = ({ history }) => {
  const selectCurrentRouteTitle = (routePath) => {
    const currentRoute = routes.find(route => route.path === routePath)
    return (currentRoute && currentRoute.title) || 'Sorry! Page does not exist'
  }

  return (
    <StyledHeader className="ui center aligned header">
      <i className="bitcoin icon"></i>
      <div className="content">Bitcoin Converter</div>

      <div className="ui hidden divider"></div>

      <div className="ui horizontal divider">
        <span className="sub header">{selectCurrentRouteTitle(history.location.pathname)}</span>
      </div>

      <div className="ui hidden divider"></div>
      <div className="ui hidden divider"></div>
      <div className="ui hidden divider"></div>
    </StyledHeader>
  )
}

const StyledHeader = styled.h1`
  &.ui.header {
    padding: 20px 0;

    .content, .icon, .sub.header {
      color: #E2E2E2;
      display: inline-block;
    }

    .content {
      text-transform: uppercase;
    }

    .sub.header {
      text-transform: capitalize;
    }
  }
`;

export default withRouter(Header);
