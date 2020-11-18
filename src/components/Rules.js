import React from 'react'

export default function Rules(props) {
  return (
    <div className="rulesComponent">
      <button onClick={props.modal} className="rulesButton" type="button">RULES</button>
    </div>
  )
}
