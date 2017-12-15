import React from 'react'

const Image = ({ path, ...props }) => (
  <img src={require(`../images/${path}`)} {...props} />
)

export const SectionImage = ({ className, ...props }) => (
  <ResponsiveImage {...props} className={`section-img ${className}`} />
)

export const ResponsiveImage = props => (
  <Image {...props} className="responsive-img" />
)

Image.Section = SectionImage
Image.Responsive = ResponsiveImage

export default Image
