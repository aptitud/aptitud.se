import React from 'react'
import { css } from 'emotion'

const sectionStyle = css`
  padding-top: 20px;
  padding-bottom: 50px;
  border-bottom: 10px solid #fff;
`

const Section = ({ id, heading, children }) => (
  <section className={sectionStyle} id={id}>
    <div className="container row">
      <div className="col s12 flow-text">
        <h2>{heading}</h2>
        {children}
      </div>
    </div>
  </section>
)

export default Section
