import React from 'react'
import {NavLink} from 'react-router-dom'

export default function GameMode() {
  return (
    <div className="modeComponent">
      <NavLink className="mode modeNormal" to="/">Normal</NavLink>
      <NavLink className="mode modeAdvanced" to="/advancedMode">Advanced</NavLink>
    </div>
  )
}
