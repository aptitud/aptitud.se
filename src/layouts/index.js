import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Image from '../components/Image'

import './index.css'

const NavBar = () => (
  <div className="navbar">
    <nav>
      <div className="nav-wrapper">
        <a href="#" data-activates="mobile-nav" className="button-collapse">
          <i className="material-icons">menu</i>
        </a>
        <a href="#" className="brand-logo">
          <Image path="aptitudlogo_pinnedheader.png" />
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <a href="#about">Enklare</a>
          </li>
          <li>
            <a href="#aptitud-day">Roligare</a>
          </li>
          <li>
            <a href="#fellows">Gladare</a>
          </li>
          <li>
            <a href="#aptigram">Aptigram</a>
          </li>
          <li>
            <a href="#contact">Hitta oss</a>
          </li>
        </ul>
        <ul className="side-nav" id="mobile-nav">
          <li className="about">
            <a href="#about">Enklare</a>
          </li>
          <li className="aptitud-day">
            <a href="#aptitud-day">Roligare</a>
          </li>
          <li className="fellows">
            <a href="#fellows">Gladare</a>
          </li>
          <li className="aptigram">
            <a href="#aptigram">Aptigram</a>
          </li>
          <li className="contact">
            <a href="#contact">Hitta oss</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)

const Logo = () => (
  <section id="logo" className="expanded">
    <div className="container row">
      <div className="col s12">
        <Image.Responsive path="aptitudlogo.png" />
      </div>

      <div className="col s12 links center-align">
        <a
          href="http://www.linkedin.com/company/2660293"
          target="new"
          title="LinkedIn"
        >
          <Image path="linkedin.png" alt="LinkedIn" />
        </a>
        <a href="http://twitter.com/Aptitud_Sthlm" target="new" title="Twitter">
          <Image path="twitter.png" alt="Twitter" />
        </a>
        <a
          href="http://www.facebook.com/aptitudsthlm"
          target="new"
          title="Facebook"
        >
          <Image path="fb.png" alt="Facebook" />
        </a>
        <a href="http://aptitud.eventbrite.com" target="new" title="EventBrite">
          <Image path="eventbrite.png" alt="EventBrite" />
        </a>
        <a
          href="http://www.youtube.com/aptitudsthlm"
          target="new"
          title="YouTube"
        >
          <Image path="youtube.png" alt="YouTube" />
        </a>
      </div>
    </div>
  </section>
)

const Hero = () => (
  <div className="parallax-container">
    <div className="parallax">
      <Image path="aptibilder.png" />
    </div>
  </div>
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
    <Hero />
    <Logo />
    <NavBar />
    {children()}
  </main>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
