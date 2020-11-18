import React from 'react'

export default function GameNormal(props) {
  return (
    <div className="gameComponent">
      <div onClick={()=>{props.playerPick('paper')}} className="outerCircle paperCircle">
        <div className="innerCircle innerPaperCircle"></div>
      </div>
      
      <div onClick={()=>{props.playerPick('scissor')}} className="outerCircle scissorsCircle">
        <div className="innerCircle innerScissorCircle"></div>
      </div>

      <div onClick={()=>{props.playerPick('rock')}} className="outerCircle rockCircle">
        <div className="innerCircle innerRockCircle"></div>
      </div>
    </div>
  )
}


