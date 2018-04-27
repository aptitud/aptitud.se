import React from 'react'
import Section from './Section'
import Container from './Container'
import styled from 'react-emotion'

const Posts = styled.div`
  text-align: center;
  max-width: 90%;
  margin: 0 auto;

  a {
    transition: transform 0.15s linear;
    box-shadow: 0 3px 10px 2px rgba(0, 0, 0, 0.5);
    background-color: #fff;
    display: block;
    width: auto;
    font-family: 'Gloria Hallelujah', cursive;
    text-decoration: none;
    text-align: left;
    color: #333;
    font-size: 1em;
    line-height: 1.4em;
    transform: rotate(-2deg);
    padding: 10px 10px 15px;
    max-width: 200px;
  }

  a:hover {
    transform: scale(1.25) !important;
    position: relative;
    z-index: 5;
  }
`

const InstagramImage = ({ caption, location, url }) => (
  <div
    css={`
      display: inline-block;
      :nth-child(even) a {
        transform: rotate(2deg);
      }
      :nth-child(5n) a {
        transform: rotate(5deg);
      }
    `}
  >
    <a href="http://www.instagram.com/aptitud_sthlm/" title={caption}>
      <img
        css={`
          max-width: 200px;
        `}
        src={url}
      />
      <span
        css={`
          display: block;
          font-size: 10px;
          padding-bottom: 5px;
        `}
      >
        {location}
      </span>
      <div>{caption}</div>
    </a>
  </div>
)

export default ({ posts }) => (
  <Section bgColor="#784e90">
    <Section.Header rotate={2}>Aptigram</Section.Header>
    <Posts>{posts.map(x => <InstagramImage key={x.id} {...x} />)}</Posts>
  </Section>
)
