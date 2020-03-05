import { createGlobalStyle } from 'styled-components';

import * as C from './colors'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; /* 1rem = 10px */
  }

  html,
  body {
    min-width: 100%;
    min-height: 100%;
  }

  body {
    background: ${C.light};
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  body,
  input,
  button {
    font: 1.6rem 'Helvetica Neue', Helvetica, sans-serif;
  }

  li {
    list-style: none;
  }

  hr {
      opacity: 0.2;
      border-color: ${C.light};
      margin: 0 25px;
      color: red;
   }

  button {
    cursor: pointer;
  }
`;
