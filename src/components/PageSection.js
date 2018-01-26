import React from 'react'
import Image from './Image'
import Section from './Section'

const PageSection = ({ id, content: { header, content, image }, fellows }) => {
  return (
    <Section id={id} heading={header}>
      <p
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
      {image && (
        <div
          css={`
            text-align: center;
          `}
        >
          <Image
            css={`
              max-width: 100%;
              height: auto;
            `}
            src={image}
          />
        </div>
      )}
    </Section>
  )
}

export default PageSection
