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
          <NavLink to="/gameplayAdvanced">
            <div onClick={()=>{props.playersPick('paper')}} className="outerCircleAdv outerCirclePos paperCircle paperCirclePosAdv">
              <div className="innerCircle innerCircleAdv innerPaperCircle"></div>
            </div>
          </NavLink>

          <NavLink to="/gameplayAdvanced">
            <div onClick={()=>{props.playersPick('scissor')}} className="outerCircleAdv outerCirclePos scissorsCircle scissorsCirclePosAdv">
              <div className="innerCircle innerCircleAdv innerScissorCircle"></div>
            </div>
          </NavLink>
          <NavLink to="/gameplayAdvanced">
            <div onClick={()=>{props.playersPick('rock')}} className="outerCircleAdv outerCirclePos rockCircle rockCirclePosAdv">
              <div className="innerCircle innerCircleAdv innerRockCircle"></div>
            </div>
          </NavLink>
          <NavLink to="/gameplayAdvanced">
            <div onClick={()=>{props.playersPick('lizard')}} className="outerCircleAdv outerCirclePos lizardCircleAdv lizardCirclePosAdv">
              <div className="innerCircle innerCircleAdv innerLizardCircleAdv"></div>
            </div>
          </NavLink>
          <NavLink to="/gameplayAdvanced">
            <div onClick={()=>{props.playersPick('spock')}} className="outerCircleAdv outerCirclePos spockCircleAdv spockCirclePosAdv">
              <div className="innerCircle innerCircleAdv innerSpockCircleAdv"></div>
            </div>
          </NavLink>
        </div>
        <Rules modal={props.modal} />
      </div>
    </div>
  )
}