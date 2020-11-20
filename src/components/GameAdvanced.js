import React from 'react'
import {NavLink} from 'react-router-dom'
import HeaderAdvanced from './HeaderAdvanced'
import ModalAdvanced from './ModalAdvanced'
import Rules from './Rules'

export default function GameAdvanced(props) {
  return (
    <div className="gameComponentAdv">
      <ModalAdvanced modal={props.modal} />
      <HeaderAdvanced state={props.state}/>
      <div className="gameContainerAdv">
        <NavLink to="/gameplayAdvanced">
          <div onClick={()=>{props.playerPick('paper')}} className="outerCircleAdv outerCirclePosAdv paperCircleAdv paperCirclePosAdv">
            <div className="innerCircleAdv innerPaperCircleAdv"></div>
          </div>
        </NavLink>

        <NavLink to="/gameplayAdvanced">
          <div onClick={()=>{props.playerPick('scissor')}} className="outerCircleAdv outerCirclePosAdv scissorsCircleAdv scissorsCirclePosAdv">
            <div className="innerCircleAdv innerScissorCircleAdv"></div>
          </div>
        </NavLink>
        <NavLink to="/gameplayAdvanced">
          <div onClick={()=>{props.playerPick('rock')}} className="outerCircleAdv outerCirclePosAdv rockCircleAdv rockCirclePosAdv">
            <div className="innerCircleAdv innerRockCircleAdv"></div>
          </div>
        </NavLink>
        <NavLink to="/gameplayAdvanced">
          <div onClick={()=>{props.playerPick('lizard')}} className="outerCircleAdv outerCirclePosAdv lizardCircleAdv lizardCirclePosAdv">
            <div className="innerCircleAdv innerLizardCircleAdv"></div>
          </div>
        </NavLink>
        <NavLink to="/gameplayAdvanced">
          <div onClick={()=>{props.playerPick('spock')}} className="outerCircleAdv outerCirclePosAdv spockCircleAdv spockCirclePosAdv">
            <div className="innerCircleAdv innerSpockCircleAdv"></div>
          </div>
        </NavLink>
      </div>
      <Rules modal={props.modal} />
    </div>
  )
}