import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Image from '../components/Image'

import './index.css'

const NavBar = () => (
    <div className="navbar hide-on-med-and-down">
        <nav
            css={`
                border-bottom: 10px solid #fff;
                z-index: 1000;
                left: 0;
                right: 0;
                box-sizing: content-box;
                height: 56px;
                line-height: 56px;
            `}>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">
                    <Image src="aptitudlogo_pinnedheader.png" />
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
            </div>
        </nav>
    </div>
)

const Logo = () => (
    <section
        id="logo"
        className="expanded"
        css={`
            border-bottom: 10px solid #fff;
        `}>
        <div className="container row">
            <div className="col s12">
                <Image.Responsive src="aptitudlogo.png" />
            </div>

            <div className="col s12 links center-align">
                <a
                    href="http://www.linkedin.com/company/2660293"
                    target="new"
                    title="LinkedIn">
                    <Image src="linkedin.png" alt="LinkedIn" />
                </a>
                <a
                    href="http://twitter.com/Aptitud_Sthlm"
                    target="new"
                    title="Twitter">
                    <Image src="twitter.png" alt="Twitter" />
                </a>
                <a
                    href="http://www.facebook.com/aptitudsthlm"
                    target="new"
                    title="Facebook">
                    <Image src="fb.png" alt="Facebook" />
                </a>
                <a
                    href="http://aptitud.eventbrite.com"
                    target="new"
                    title="EventBrite">
                    <Image src="eventbrite.png" alt="EventBrite" />
                </a>
                <a
                    href="http://www.youtube.com/aptitudsthlm"
                    target="new"
                    title="YouTube">
                    <Image src="youtube.png" alt="YouTube" />
                </a>
            </div>
        </div>
    </section>
)

const Hero = () => (
    <div className="parallax-container">
        <div className="parallax">
            <Image src="aptibilder.jpg" />
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
