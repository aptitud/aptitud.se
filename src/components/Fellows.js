import React from 'react'
import Section from './Section'
import Fellow from './Fellow'

const Fellows = ({ content: { header, content }, fellows }) => {
  return (
    <Section id="fellows" heading={header}>
      <p
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
      <div id="fellow-list" className="row">
        {fellows.map(fellow => <Fellow key={fellow.name} {...fellow} />)}
      </div>
    </Section>
  )
}

export default Fellows
