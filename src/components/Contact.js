import React from 'react'
import Section from './Section'
import Image from './Image'
import SocialIcons from './SocialIcons'
import styled from 'react-emotion'
import Container from './Container'

const Card = styled.div`
  color: #000;
  padding: 40px;
  white-space: pre;
  margin: 0 auto 20px auto;
  width: 100%;
  background-color: #eee;

  h3 {
    font-weight: 300;
    margin: 0;
    font-size: 2em;
  }

  p {
    margin: 0;
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 1000px) {
    width: 50%;
    padding: 20px;

    h3 {
      font-size: 1.2em;
    }
  }
`

export default ({
  content: { header, postalAddress, visitingAddress, image },
}) => (
  <Section bgColor="#febe10">
    <Container>
      <Section.Header rotate={1}>{header}</Section.Header>
      <div
        css={`
          display: flex;
          justify-content: space-evenly;
          margin: 0 auto;

          > img {
            max-width: 100%;
            margin-bottom: 50px;
          }

          @media only screen and (max-width: 1000px) {
            justify-content: center;
            flex-direction: column;
          }
        `}
      >
        <Image src={image.file.url} />
        <div>
          <Card
            dangerouslySetInnerHTML={{
              __html: visitingAddress.childMarkdownRemark.html,
            }}
          />
          <Card
            dangerouslySetInnerHTML={{
              __html: postalAddress.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
      <SocialIcons
        css={`
          width: 50%;
          margin: 40px auto;
        `}
      />
    </Container>
  </Section>
)
