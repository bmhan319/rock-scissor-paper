import React from 'react'

export default function GameNormal() {
  return (
    <div className="gameComponent">
      <div className="outerCircle paperCircle">
        <div className="innerCircle innerPaperCircle"></div>
      </div>
      
      <div className="outerCircle scissorsCircle">
        <div className="innerCircle innerScissorCircle"></div>
      </div>

      <div className="outerCircle rockCircle">
        <div className="innerCircle innerRockCircle"></div>
      </div>
    </div>
  )
}


