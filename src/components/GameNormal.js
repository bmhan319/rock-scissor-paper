import React from 'react'
import {NavLink} from 'react-router-dom'

export default function GameNormal(props) {
  return (
    <div className="gameComponent">
      <NavLink to="/gameplay">
        <div onClick={()=>{props.playerPick('paper')}} className="outerCircle outerCirclePos paperCircle paperCirclePos">
          <div className="innerCircle innerPaperCircle"></div>
        </div>
      </NavLink>

      <NavLink to="/gameplay">
        <div onClick={()=>{props.playerPick('scissor')}} className="outerCircle outerCirclePos scissorsCircle scissorsCirclePos">
          <div className="innerCircle innerScissorCircle"></div>
        </div>
      </NavLink>
      <NavLink to="/gameplay">
        <div onClick={()=>{props.playerPick('rock')}} className="outerCircle outerCirclePos rockCircle rockCirclePos">
          <div className="innerCircle innerRockCircle"></div>
        </div>
      </NavLink>
    </div>
  )
}


