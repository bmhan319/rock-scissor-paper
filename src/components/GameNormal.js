import React from 'react'
import {NavLink} from 'react-router-dom'
import Header from './Header'
import Modal from './Modal'
import Rules from './Rules'

export default function GameNormal(props) {
  return (
    <div className="gameComponent">
      <Modal modal={props.modal} />
      <div className="ModalWrapper ModalWrapperOff">
        <Header state={props.state}/>
        <div className="gameContainer bgTriangle">
          <NavLink to="/gameplay">
            <div onClick={()=>{props.playersPick('paper')}} className="outerCircle outerCirclePos paperCircle paperCirclePos">
              <div className="innerCircle innerPaperCircle"></div>
            </div>
          </NavLink>

          <NavLink to="/gameplay">
            <div onClick={()=>{props.playersPick('scissor')}} className="outerCircle outerCirclePos scissorsCircle scissorsCirclePos">
              <div className="innerCircle innerScissorCircle"></div>
            </div>
          </NavLink>
          <NavLink to="/gameplay">
            <div onClick={()=>{props.playersPick('rock')}} className="outerCircle outerCirclePos rockCircle rockCirclePos">
              <div className="innerCircle innerRockCircle"></div>
            </div>
          </NavLink>
        </div>
        <Rules modal={props.modal} />
      </div>
    </div>
  )
}


