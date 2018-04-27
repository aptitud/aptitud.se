import React from 'react'
import styled from 'react-emotion'

const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 50px;
  border-top: 10px solid #fff;
  min-height: 100vh;
`

const Header = styled.h2`
  margin-top: 20px;
  text-align: center;
  text-transform: lowercase;
  font-family: sans-serif;
  font-size: 80px;
  text-shadow: 0 7px 0 rgba(0, 0, 0, 0.15);
  -webkit-font-smoothing: initial;
  transform: rotate(${props => props.degree}deg);
`

const Text = styled.div`
  font-size: 1.68rem;
  font-weight: 200;
`

Section.Header = Header
Section.Text = Text

export default Section
