import React from 'react'
import Section from './Section'
import Image from './Image'
import Container from './Container'

export default ({ content: { header, content, image } }) => (
  <Section bgColor="#7a9752">
    <Container>
      <Section.Header rotate={-2}>Roligare</Section.Header>
      <Section.Text text={content} />
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
