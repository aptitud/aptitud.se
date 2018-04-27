import React from 'react'
import Section from './Section'
import Image from './Image'
import SocialIcons from './SocialIcons'
import styled from 'react-emotion'
import Container from './Container'

const Card = styled.div`
  color: #000;
  padding: 40px;
  margin: 0 auto 20px auto;
  width: 100%;
  background-color: #eee;

  @media only screen and (max-width: 1000px) {
    width: 50%;
  }

  h3 {
    font-weight: 200;
    text-transform: uppercase;
    margin-top: 0;
    font-size: 24px;
  }
  p {
    font-size: 1.68rem;
    font-weight: 300;
  }
`

class Contact extends React.Component {
  render() {
    return (
      <Section
        css={`
          background-color: #febe10;
        `}
      >
        <Container>
          <Section.Header degree={1}>Kontakt</Section.Header>
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
            <Image src="karta.png" />
            <div>
              <Card>
                <h3>Besöksadress</h3>
                <p>
                  Aptitud
                  <br /> Stora Nygatan 7
                  <br /> 111 27 Stockholm
                </p>

                <a
                  href="https://www.google.se/maps/place/Stora+Nygatan+7,+111+27+Stockholm/@59.3271399,18.0506839,13.81z/data=!4m2!3m1!1s0x465f77e21038bb13:0x7addcf9e0003c278"
                  target="_blank"
                >
                  Visa karta
                </a>
              </Card>
              <Card>
                <h3>Postadress</h3>
                <p>
                  Aptitud
                  <br /> Box 2057
                  <br /> 103 12 Stockholm
                </p>
              </Card>
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
  }
}

export default Contact
