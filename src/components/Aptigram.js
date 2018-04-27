import React from 'react'
import Section from './Section'
import Container from './Container'

const InstagramImage = ({ caption, location, url }) => (
  <div className="polariod">
    <a href="http://www.instagram.com/aptitud_sthlm/" title={caption}>
      <img src={url} />
      <span className="location">{location}</span>
    </a>
  </div>
)

export default ({ posts }) => (
  <Section
    css={`
      background-color: #784e90;
    `}
  >
    <Container>
      <Section.Header degree={2}>Aptigram</Section.Header>
      <div className="polaroids">
        {posts.map(x => <InstagramImage key={x.id} {...x} />)}
      </div>
    </Container>
  </Section>
)
