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
                   className="outerCircleAdv outerCirclePos scissorsCircle scissorsCircleAdv scissorsCirclePosAdv"
                   onMouseDown={()=>{props.pressButton('.scissorsCircleAdv', 'outerCirclePressAdv')}} 
                   onClick={()=>{props.playersPick('scissor')}} > 
            <div className="innerCircle innerCircleAdv innerScissorCircle">1</div>
          </NavLink>

          <NavLink to="/gameplayAdvanced"
                   className="outerCircleAdv outerCirclePos paperCircle paperCircleAdv paperCirclePosAdv"
                   onMouseDown={()=>{props.pressButton('.paperCircleAdv', 'outerCirclePressAdv')}} 
                   onClick={()=>{props.playersPick('paper')}} > 
              <div className="innerCircle innerCircleAdv innerPaperCircle">2</div>
          </NavLink>

          <NavLink to="/gameplayAdvanced"
                   className="outerCircleAdv outerCirclePos rockCircle rockCircleAdv rockCirclePosAdv"
                   onMouseDown={()=>{props.pressButton('.rockCircleAdv', 'outerCirclePressAdv')}} 
                   onClick={()=>{props.playersPick('rock')}} > 
              <div className="innerCircle innerCircleAdv innerRockCircle">3</div>
          </NavLink>
          <NavLink to="/gameplayAdvanced"
                   className="outerCircleAdv outerCirclePos lizardCircleAdv lizardCirclePosAdv"
                   onMouseDown={()=>{props.pressButton('.lizardCircleAdv', 'outerCirclePressAdv')}} 
                   onClick={()=>{props.playersPick('lizard')}} > 
              <div className="innerCircle innerCircleAdv innerLizardCircleAdv">4</div>
          </NavLink>
          <NavLink to="/gameplayAdvanced"
                   className="outerCircleAdv outerCirclePos spockCircleAdv spockCirclePosAdv"
                   onMouseDown={()=>{props.pressButton('.spockCircleAdv', 'outerCirclePressAdv')}} 
                   onClick={()=>{props.playersPick('spock')}} > 
              <div className="innerCircle innerCircleAdv innerSpockCircleAdv">5</div>
          </NavLink>
        </div>
        <Rules modal={props.modal} />
      </div>
    </div>
  )
}