import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

export default class GamePlay extends Component {
  loadItems = () => {
    this.loadPlayerMove()
    setTimeout( this.loadComputerMove,500 )
    setTimeout( this.props.findWinner, 1000)
  }

  loadPlayerMove = () => {
    document.querySelector('.outerPlayerCircle').classList.add('outerCircle')
    document.querySelector('.innerPlayerCircle').classList.add('innerCircle')

    if (this.props.state.playerPick === "paper") {
      document.querySelector('.outerPlayerCircle').classList.add('paperCircle')
      document.querySelector('.innerPlayerCircle').classList.add('innerPaperCircle')
    } else if (this.props.state.playerPick === "scissor") {
      document.querySelector('.outerPlayerCircle').classList.add('scissorsCircle')
      document.querySelector('.innerPlayerCircle').classList.add('innerScissorCircle')
    } else if (this.props.state.playerPick === "rock") {
      document.querySelector('.outerPlayerCircle').classList.add('rockCircle')
      document.querySelector('.innerPlayerCircle').classList.add('innerRockCircle')
    }
  }

  loadComputerMove = () => {
    document.querySelector('.outerComputerCircle').classList.add('outerCircle')
    document.querySelector('.innerComputerCircle').classList.add('innerCircle')
    if (this.props.state.computerPick === "paper") {
      document.querySelector('.outerComputerCircle').classList.add('paperCircle')
      document.querySelector('.innerComputerCircle').classList.add('innerPaperCircle')
    } else if (this.props.state.computerPick === "scissor") {
      document.querySelector('.outerComputerCircle').classList.add('scissorsCircle')
      document.querySelector('.innerComputerCircle').classList.add('innerScissorCircle')
    } else if (this.props.state.computerPick === "rock") {
      document.querySelector('.outerComputerCircle').classList.add('rockCircle')
      document.querySelector('.innerComputerCircle').classList.add('innerRockCircle')
    }
  }

  

  componentDidMount() {
    this.loadItems()
  }

  render() {
    return (
      <div className="gamePlayComponent">
        <div className="gamePlayContainer">
          <div className="playerPickContainer">
            <div className="itemContainer">
              <div className="outerPlayerCircle">
                <div className="innerPlayerCircle"></div>
              </div>
            </div>
            <p className="itemPickedText">YOU PICKED</p>

            <div className="playerResultsRingContainer ringsOff">
              <div className="playerResultsRings playerResultsOuterRing"></div>
              <div className="playerResultsRings playerResultsMidRing"></div>
              <div className="playerResultsRings playerResultsInnerRing"></div> 
            </div>

          </div>
          <div className="computerPickContainer">
            <div className="itemContainer">
              <div className="outerComputerCircle">
                <div className="innerComputerCircle"></div>
              </div>
            </div>
            <p className="itemPickedText">THE HOUSE PICKED</p>
          </div>
        </div>

        <div className="resultsContainer resultsHide">
          <div className="winnerContainer">
            <h2 className="whoWon">{this.props.state.status}</h2>
          </div>
          <div className="playAgainContainer">
            <NavLink to="/">
              <button className="playAgain" type="button">PLAY AGAIN</button>
            </NavLink>
          </div>
        </div>
      </div>
    )
  }
}
