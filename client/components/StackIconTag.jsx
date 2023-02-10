import React from 'react'
import { IconContext } from 'react-icons'

export default function StackIconTag({ name, Icon }) {
  return (
    <span className="stack-tag">
      <IconContext.Provider
        value={{ style: { fontSize: '2.5rem', color: '#072ac8' } }}
      >
        {Icon}
      </IconContext.Provider>
      {name}
    </span>
  )
}
