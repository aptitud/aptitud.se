import React from 'react'

export default ({ src, ...props }) => {
  const isAbsolutePath = /\/\//.test(src)

  return (
    <img src={isAbsolutePath ? src : require(`../images/${src}`)} {...props} />
  )
}
