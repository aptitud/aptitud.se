import React from 'react'
import SocialIcons from './SocialIcons'
import Image from './Image'

export default () => (
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
