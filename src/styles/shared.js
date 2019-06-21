import { css } from 'styled-components';

export const headerAndSegment = css`
  &.ui.raised.segment {
    border-radius: 0;
    box-shadow: 0 2px 4px 0 rgba(34,36,38,.3), 0 2px 10px 0 rgba(34,36,38,.3);
    margin-bottom: 2em;
  }

  h2.ui.header {
    color: #605F5E;
  }
`;

export const message = css`
  .ui.message {
    box-shadow: none;
    padding: 0.1em 0;
    margin-top: -0.5em;
    font-size: 1em;
  }
`;
