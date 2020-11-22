import React from 'react'
import {NavLink} from 'react-router-dom'
import HeaderAdvanced from './HeaderAdvanced'
import ModalAdvanced from './ModalAdvanced'
import Rules from './Rules'

export default function GameAdvanced(props) {
  return (
    <div className="gameComponent">
      <ModalAdvanced modal={props.modal} />
      <div className="ModalWrapper ModalWrapperOff">
        <HeaderAdvanced state={props.state}/>
        <div className="gameContainer bgPentagon">
          <NavLink to="/gameplayAdvanced"
                 onMouseDown={()=>{props.pressButton('.scissorsCircleAdv', 'outerCirclePressAdv')}} 
                 onClick={()=>{props.playersPick('scissor')}} 
                 className="outerCircleAdv outerCirclePos scissorsCircle scissorsCircleAdv scissorsCirclePosAdv">
            <div className="innerCircle innerCircleAdv innerScissorCircle"></div>
          </NavLink>

          <NavLink to="/gameplayAdvanced"
                   onMouseDown={()=>{props.pressButton('.paperCircleAdv', 'outerCirclePressAdv')}} 
                   onClick={()=>{props.playersPick('paper')}} 
                   className="outerCircleAdv outerCirclePos paperCircle paperCircleAdv paperCirclePosAdv">
              <div className="innerCircle innerCircleAdv innerPaperCircle"></div>
          </NavLink>

          <NavLink to="/gameplayAdvanced"
                   onMouseDown={()=>{props.pressButton('.rockCircleAdv', 'outerCirclePressAdv')}} 
                   onClick={()=>{props.playersPick('rock')}} 
                   className="outerCircleAdv outerCirclePos rockCircle rockCircleAdv rockCirclePosAdv">
              <div className="innerCircle innerCircleAdv innerRockCircle"></div>
          </NavLink>
          <NavLink to="/gameplayAdvanced"
                   onMouseDown={()=>{props.pressButton('.lizardCircleAdv', 'outerCirclePressAdv')}} 
                   onClick={()=>{props.playersPick('lizard')}} 
                   className="outerCircleAdv outerCirclePos lizardCircleAdv lizardCirclePosAdv">
              <div className="innerCircle innerCircleAdv innerLizardCircleAdv"></div>
          </NavLink>
          <NavLink to="/gameplayAdvanced"
                   onMouseDown={()=>{props.pressButton('.spockCircleAdv', 'outerCirclePressAdv')}} 
                   onClick={()=>{props.playersPick('spock')}} 
                   className="outerCircleAdv outerCirclePos spockCircleAdv spockCirclePosAdv">
              <div className="innerCircle innerCircleAdv innerSpockCircleAdv"></div>
          </NavLink>
        </div>
        <Rules modal={props.modal} />
      </div>
    </div>
  )
}