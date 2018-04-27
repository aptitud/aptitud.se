import React from 'react'
import styled from 'react-emotion'

const Section = styled.section`
  background-color: ${props => props.bgColor};
  padding-top: 20px;
  padding-bottom: 50px;
  border-top: 10px solid #fff;
  min-height: 100vh;
`

const Header = styled.h2`
  margin-top: 20px;
  margin-bottom: 40px;
  text-align: center;
  text-transform: lowercase;
  font-size: 5em;
  font-weight: 400;
  text-shadow: 0 7px 0 rgba(0, 0, 0, 0.15);
  transform: rotate(${props => props.rotate}deg);
`

const Text = ({ text }) => (
  <div
    dangerouslySetInnerHTML={{
      __html: text,
    }}
    css={`
      font-size: 1.68rem;
      font-weight: 200;

      @media only screen and (max-width: 1000px) {
        font-size: 1.4rem;
      }
    `}
  />
)

Section.Header = Header
Section.Text = Text

export default Section
