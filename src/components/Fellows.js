import React from 'react'
import Section from './Section'
import Fellow from './Fellow'
import Container from './Container'

export default ({ content: { header, content }, fellows }) => (
  <Section
    css={`
      background-color: #f63;
    `}
  >
    <Container>
      <Section.Header degree={7}>{header}</Section.Header>
      <Section.Text
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
      <div
        css={`
          color: #000;
          @media only screen and (min-width: 601px) {
            column-count: 2;
          }

          @media only screen and (min-width: 901px) {
            column-count: 3;
          }

          @media only screen and (min-width: 1200px) {
            column-count: 4;
            max-width: 1200px;
            margin: 0 auto;
          }
        `}
      >
        {fellows.map(fellow => <Fellow key={fellow.name} {...fellow} />)}
      </div>
    </Container>
  </Section>
)
