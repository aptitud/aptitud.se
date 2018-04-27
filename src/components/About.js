import React from 'react'
import Section from './Section'
import Image from './Image'
import Container from './Container'

export default ({ content: { header, content, image } }) => (
  <Section
    css={`
      background-color: #1e859a;
    `}
  >
    <Container>
      <Section.Header degree={1}>{header}</Section.Header>
      <Section.Text
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
      <Image
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
