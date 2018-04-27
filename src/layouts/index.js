import React from 'react'
import Helmet from 'react-helmet'
import Logo from '../components/Logo'
import Favicon from '../images/favicon/favicon.png'

export default ({ children }) => (
  <main>
    <Helmet
      title="Aptitud"
      meta={[
        { name: 'description', content: 'Jävlaranamma, glädje & transparens ' },
        { name: 'keywords', content: 'aptitud' },
      ]}
    >
      <link rel="icon" href={Favicon} />
      <style type="text/css">{`
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
    `}</style>
    </Helmet>
    <Logo />
    {children()}
  </main>
)
