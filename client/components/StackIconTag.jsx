import React from 'react'

export default function StackIconTag({ name, Icon }) {
  return (
    <span className="stack-tag">
      {Icon}
      {name}
    </span>
  )
}
