import React from 'react'

const Image = ({ src, ...props }) => <img src={src} {...props} />

const Link = ({ href, title, src }) => (
  <a href={href} target="new" title={title}>
    <Image src={src} alt={title} />
  </a>
)

Image.Link = Link

export default Image
