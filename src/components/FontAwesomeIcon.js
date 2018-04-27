import React from 'react'

const FontAwesomeIcon = ({ icon }) => (
  <i
    css={`
      font-size: 1.5em;
    `}
    className={`fa fa-fw fa-${icon}`}
  />
)

const Link = ({ icon, href, ...props }) => (
  <a href={href} target="_blank" {...props}>
    <FontAwesomeIcon icon={icon} />
  </a>
)

FontAwesomeIcon.Link = Link

export default FontAwesomeIcon
