import React from 'react'
import Image from './Image'
import styled from 'react-emotion'

const Wrapper = styled.div`
  text-align: center;
  img {
    max-height: 50px;
  }
`

export default props => (
  <Wrapper {...props}>
    <Image.Link
      src="linkedin.png"
      title="LinkedIn"
      href="http://www.linkedin.com/company/2660293"
    />
    <Image.Link
      src="twitter.png"
      title="Twitter"
      href="http://twitter.com/Aptitud_Sthlm"
    />
    <Image.Link
      src="fb.png"
      title="Facebook"
      href="http://www.facebook.com/aptitudsthlm"
    />
    <Image.Link
      src="eventbrite.png"
      title="EventBrite"
      href="http://aptitud.eventbrite.com"
    />
    <Image.Link
      src="youtube.png"
      title="YouTube"
      href="http://www.youtube.com/aptitudsthlm"
    />
  </Wrapper>
)
