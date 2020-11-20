import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import HeaderAdvanced from './HeaderAdvanced'
import ModalAdvanced from './ModalAdvanced'
import Rules from './Rules'

export default class GamePlay extends Component {
  loadItems = () => {
    this.loadPlayerMove()
    setTimeout( this.loadComputerMove,500 )
    setTimeout( this.props.findWinnerAdv, 1000)
  }

  loadPlayerMove = () => {
    document.querySelector('.outerPlayerCircleAdv').classList.add('outerCircle')
    document.querySelector('.innerPlayerCircleAdv').classList.add('innerCircle')

    if (this.props.state.playerPick === "paper") {
      document.querySelector('.outerPlayerCircleAdv').classList.add('paperCircle')
      document.querySelector('.innerPlayerCircleAdv').classList.add('innerPaperCircle')
    } else if (this.props.state.playerPick === "scissor") {
      document.querySelector('.outerPlayerCircleAdv').classList.add('scissorsCircle')
      document.querySelector('.innerPlayerCircleAdv').classList.add('innerScissorCircle')
    } else if (this.props.state.playerPick === "rock") {
      document.querySelector('.outerPlayerCircleAdv').classList.add('rockCircle')
      document.querySelector('.innerPlayerCircleAdv').classList.add('innerRockCircle')
    } else if (this.props.state.playerPick === "lizard") {
      document.querySelector('.outerPlayerCircleAdv').classList.add('lizardCircleAdv')
      document.querySelector('.innerPlayerCircleAdv').classList.add('innerLizardCircleAdv')
    } else if (this.props.state.playerPick === "spock") {
      document.querySelector('.outerPlayerCircleAdv').classList.add('spockCircleAdv')
      document.querySelector('.innerPlayerCircleAdv').classList.add('innerSpockCircleAdv')
    }
  }

  loadComputerMove = () => {
    document.querySelector('.outerComputerCircleAdv').classList.add('outerCircle')
    document.querySelector('.innerComputerCircleAdv').classList.add('innerCircle')
    if (this.props.state.computerPick === "paper") {
      document.querySelector('.outerComputerCircleAdv').classList.add('paperCircle')
      document.querySelector('.innerComputerCircleAdv').classList.add('innerPaperCircle')
    } else if (this.props.state.computerPick === "scissor") {
      document.querySelector('.outerComputerCircleAdv').classList.add('scissorsCircle')
      document.querySelector('.innerComputerCircleAdv').classList.add('innerScissorCircle')
    } else if (this.props.state.computerPick === "rock") {
      document.querySelector('.outerComputerCircleAdv').classList.add('rockCircle')
      document.querySelector('.innerComputerCircleAdv').classList.add('innerRockCircle')
    } else if (this.props.state.computerPick === "lizard") {
      document.querySelector('.outerComputerCircleAdv').classList.add('lizardCircleAdv')
      document.querySelector('.innerComputerCircleAdv').classList.add('innerLizardCircleAdv')
    } else if (this.props.state.computerPick === "spock") {
      document.querySelector('.outerComputerCircleAdv').classList.add('spockCircleAdv')
      document.querySelector('.innerComputerCircleAdv').classList.add('innerSpockCircleAdv')
    }
  }

  

  componentDidMount() {
    this.loadItems()
  }

  render() {
    return (
      <div className="gamePlayComponentAdv">
        <ModalAdvanced modal={this.props.modal} />
        <HeaderAdvanced state={this.props.state}/>
        <div className="gamePlayOuterContainerAdv">
          <div className="gamePlayContainerAdv">
            <div className="playerPickContainerAdv">
              <div className="itemContainerAdv">
                <div className="outerPlayerCircleAdv">
                  <div className="innerPlayerCircleAdv"></div>
                </div>
              </div>
              <p className="itemPickedTextAdv">YOU PICKED</p>

              <div className="playerResultsRingContainerAdv ringsOffAdv">
                <div className="playerResultsRingsAdv playerResultsOuterRingAdv"></div>
                <div className="playerResultsRingsAdv playerResultsMidRingAdv"></div>
                <div className="playerResultsRingsAdv playerResultsInnerRingAdv"></div> 
              </div>

            </div>
            <div className="computerPickContainerAdv">
              <div className="itemContainerAdv">
                <div className="outerComputerCircleAdv">
                  <div className="innerComputerCircleAdv"></div>
                </div>
              </div>
              <p className="itemPickedTextAdv">THE HOUSE PICKED</p>
            </div>
          </div>
        </div>

        <div className="resultsContainerAdv resultsHideAdv">
          <div className="winnerContainerAdv">
            <h2 className="whoWonAdv">{this.props.state.status}</h2>
          </div>
          <div className="playAgainContainerAdv">
            <NavLink to="/advancedMode">
              <button className="playAgainAdv" type="button">PLAY AGAIN</button>
            </NavLink>
          </div>
        </div>
        <Rules modal={this.props.modal} />
      </div>
    )
  }
}