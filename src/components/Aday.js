import React from 'react'
import Section from './Section'
import Image from './Image'
import Container from './Container'

export default ({ content: { header, content, image } }) => (
  <Section
    css={`
      background-color: #7a9752;
    `}
  >
    <Container>
      <Section.Header degree={-2}>Roligare</Section.Header>
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
