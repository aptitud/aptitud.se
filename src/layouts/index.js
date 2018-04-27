import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Image from '../components/Image'
import SocialIcons from '../components/SocialIcons'

import './index.css'

const Logo = () => (
  <section
    css={`
      background-color: #ee6e73;
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 100vh;

      > img {
        max-width: 60%;
        margin: 40px auto 10px;
        display: block;
      }
    `}
  >
    <Image src="aptitudlogo.png" />
    <SocialIcons
      css={`
        width: 50%;
        margin: 40px auto;
      `}
    />
  </section>
)

const TemplateWrapper = ({ children }) => (
  <main>
    <Helmet
      title="Aptitud"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Logo />
    {children()}
  </main>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
