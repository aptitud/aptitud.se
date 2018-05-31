import React from 'react'
import { injectGlobal } from 'emotion'
import Jenthill from '../fonts/Jenthill.ttf.woff'

injectGlobal`
  body {
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    margin: 0;
  }
  @font-face {
    font-family: 'Jenthill';
    src: url(${Jenthill});
  }
  a {
    color: #039be5;
    text-decoration: none;
  }
  p {
    word-break: break-word;
  }
  h3 {
    margin: 0;
    font-weight: 300;
    font-size: 2rem;
    @media only screen and (max-width: 992px) {
      font-size: 1.5rem;
    }
    @media only screen and (max-width: 480px) {
      font-size: 1.2rem;
    }
  }
`

export default ({ children }) => children()
