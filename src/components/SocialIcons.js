import React from 'react'
import Image from './Image'
import styled from 'react-emotion'

const Wrapper = styled.div`
  text-align: center;
  img {
    max-height: 50px;
    margin: 0 5px;
  }
`

export default ({ socialIcons, ...props }) => (
  <Wrapper {...props}>
    {socialIcons.map(socialIcon => (
      <Image.Link
        key={socialIcon.name}
        src={socialIcon.icon.file.url}
        title={socialIcon.name}
        href={socialIcon.link}
      />
    ))}
  </Wrapper>
)
