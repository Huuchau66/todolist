import React from 'react'

function Header({header}) {
  return (
       <h1 className="title">
        {header.title}
        <span>{header.content}</span>
      </h1>
  )
}

export default Header
