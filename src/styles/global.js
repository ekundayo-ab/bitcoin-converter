import { createGlobalStyle } from 'styled-components';
import variables from './variables'

const { brandPrimary, brandWhite, brandGray } = variables.colors

// NOTE: rbc Represents `React Bitcoin Converter` little namespacing here!

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${brandPrimary};
  }

  .ui {
    .button, a {
      background: ${brandPrimary};
      color: ${brandWhite};

      &:hover, &:active, &:focus {
        color: ${brandWhite};
        background: #0a2463e4 !important;
      }
    }

    .button:hover a {
      color: ${brandWhite};
      background: #0a2463e4 !important;
    }

    .form input[type="text"], .form input[type="checkbox"] {
      &:active, &:focus {
        border-color: ${brandPrimary};
      }
    }

    &.text.container {
      max-width: 900px !important;
    }
  }

  .rbc.checkbox {
    /* Checkboxes */
    /* https://codepen.io/aardrian/pen/PmgyaY */
    /* Based on the article here http://adrianroselli.com/2017/05/under-engineered-custom-radio-buttons-and-checkboxen.html */

    input[type=checkbox] {
      position: absolute;
      top: auto;
      overflow: hidden;
      clip: rect(1px 1px 1px 1px); /* IE 6/7 */
      clip: rect(1px, 1px, 1px, 1px);
      width: 1px;
      height: 1px;
      white-space: nowrap; /* https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe */
    }

    input[type=checkbox] + label {
      display: block;
      padding-left: 2em;
      color: ${brandGray};
    }

    input[type=checkbox]:focus + label {
      outline: 1px dotted ${brandGray};
    }

    input[type=checkbox] + label:before {
      content: '';
      background: #fff;
      border: .1em solid ${brandPrimary};
      background-color: rgba(255, 255, 255, .8);
      display: block;
      box-sizing: border-box;
      float: left;
      width: 1em;
      height: 1em;
      margin-left: -1.5em;
      margin-top: .15em;
      vertical-align: top;
      cursor: pointer;
      text-align: center;
      transition: all .1s ease-out;
    }

    input[type=checkbox]:disabled + label {
      color: #ccc;
    }

    input[type=checkbox] + label:before {
      content: '\\2713';
      font-weight: bold;
      text-align: center;
      line-height: 1.15;
      color: rgba(0, 0, 255, 0);
    }

    input[type=checkbox]:checked + label:before {
      color: ${brandPrimary};
      line-height: .75;
    }

    input[type=checkbox]:disabled + label:before {
      color: rgba(255, 255, 255, 0);
    }

    input[type=checkbox]:checked:disabled + label:before {
      color: #bbb;
      text-shadow: .05em 0 0 #bbb, -.05em 0 0 #bbb;
    }

    /* https://codepen.io/aardrian/pen/PmgyaY */
    /* Based on the article here http://adrianroselli.com/2017/05/under-engineered-custom-radio-buttons-and-checkboxen.html */
  }
`
