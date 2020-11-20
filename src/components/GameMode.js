import React from 'react'
import {NavLink} from 'react-router-dom'

export default function GameMode(props) {
  return (
    <div className="modeComponent">
      <NavLink className="mode modeNormal" onClick={()=>props.changeGameMode(3)} to="/">Normal</NavLink>
      <NavLink className="mode modeAdvanced" onClick={()=>props.changeGameMode(5)} to="/advancedMode">Advanced</NavLink>
    </div>
  )
}
