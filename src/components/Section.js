import React from 'react'

const Section = ({ id, heading, children }) => (
  <section id={id}>
    <div className="container row">
      <div className="col s12 flow-text">
        <h2>{heading}</h2>
        {children}
      </div>
    </div>
  </section>
)

export default Section
