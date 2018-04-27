import React from 'react'

const Image = ({ src, ...props }) => {
  const isAbsolutePath = /\/\//.test(src)

  return (
    <img src={isAbsolutePath ? src : require(`../images/${src}`)} {...props} />
  )
}

const Link = ({ href, title, src }) => (
  <a href={href} target="new" title={title}>
    <Image src={src} alt={title} />
  </a>
)

Image.Link = Link

export default Image
