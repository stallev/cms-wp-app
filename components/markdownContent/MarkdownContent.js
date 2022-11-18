import React from 'react'

const MarkdownContent = ({ content }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: content }}></div>
  )
}

export default MarkdownContent
