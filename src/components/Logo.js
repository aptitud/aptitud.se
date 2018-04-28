import React from 'react'
import SocialIcons from './SocialIcons'
import Image from './Image'
import Logo from '../images/logo.png'

export default ({ socialIcons }) => (
  <section
    css={`
      background-color: #ee6e73;
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-height: 100vh;

      > img {
        max-width: 80%;
        margin: 40px auto 10px;
        display: block;
      }
    `}
  >
    <Image src={Logo} />
    <SocialIcons
      socialIcons={socialIcons}
      css={`
        width: 80%;
        margin: 60px auto 0 auto;
      `}
    />
  </section>
)
