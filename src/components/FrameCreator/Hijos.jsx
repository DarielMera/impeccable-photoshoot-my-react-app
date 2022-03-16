import React from 'react'

export default function Hijos(props) {
    console.log(props.children)
  return (
    <div>testing{props.children}</div>

  )
}
