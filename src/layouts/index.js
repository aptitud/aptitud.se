import React from 'react'
import { injectGlobal } from 'emotion'

injectGlobal`
  body {
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    margin: 0;
  }
  a {
    color: #039be5;
    text-decoration: none;
  }
  h3 {
    margin: 0;
    font-weight: 300;
    font-size: 2rem;
  }
`

export default ({ children }) => children()
