import React from 'react'

const Image = ({ src, ...props }) => {
  const isAbsolutePath = /\/\//.test(src)

  return (
    <img src={isAbsolutePath ? src : require(`../images/${src}`)} {...props} />
  )
}

export const SectionImage = ({ className, ...props }) => (
  <ResponsiveImage {...props} className={`section-img ${className}`} />
)

export const ResponsiveImage = props => (
  <Image {...props} className="responsive-img" />
)

Image.Section = SectionImage
Image.Responsive = ResponsiveImage

export default Image
