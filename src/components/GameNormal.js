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
          <NavLink to="/gameplay" 
                   className="outerCircle outerCirclePos paperCircle paperCirclePos"
                   onMouseDown={()=>{props.pressButton('.paperCircle', 'outerCirclePress')}} 
                   onClick={()=>{props.playersPick('paper')}} >
              <div className="innerCircle innerPaperCircle"></div>
          </NavLink>
          <NavLink to="/gameplay" 
                   className="outerCircle outerCirclePos scissorsCircle scissorsCirclePos"
                   onMouseDown={()=>{props.pressButton('.scissorsCircle', 'outerCirclePress')}} 
                   onClick={()=>{props.playersPick('scissor')}} >
              <div className="innerCircle innerScissorCircle"></div>
          </NavLink>
          <NavLink to="/gameplay" 
                   className="outerCircle outerCirclePos rockCircle rockCirclePos"
                   onMouseDown={()=>{props.pressButton('.rockCircle', 'outerCirclePress')}} 
                   onClick={()=>{props.playersPick('rock')}} >
              <div className="innerCircle innerRockCircle"></div>
          </NavLink>
        </div>
        <Rules modal={props.modal} />
      </div>
    </div>
  )
}


