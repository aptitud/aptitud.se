import React from 'react'
import Section from './Section'
import Image from './Image'
import Container from './Container'

export default ({ content: { header, content, image } }) => (
  <Section bgColor="#1e859a">
    <Container>
      <Section.Header rotate={1}>{header}</Section.Header>
      <Section.Text text={content} />
      <Image
        alt="About logo"
        css={`
          display: block;
          width: 50%;
          margin: 50px auto;
        `}
        src={image}
      />
    </Container>
  </Section>
)
