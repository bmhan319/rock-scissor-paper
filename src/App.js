import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import GameMode from './components/GameMode'
import GameNormal from './components/GameNormal'
import GameAdvanced from './components/GameAdvanced'
import GamePlay from './components/GamePlay'
import GamePlayAdvanced from './components/GamePlayAdvanced'



import './css/mode.css'
import './css/modal.css'
import './css/header.css'
import './css/headerAdvanced.css'
import './css/gameNormal.css'
import './css/gameAdvanced.css'
import './css/gamePlay.css'
import './css/gamePlayAdvanced.css'
import './css/rules.css'

export default class App extends Component {
  state = {
    modalOpen: false,
    playerPick: "",
    computerPick: "",
    status: "",
    score: 0,
    gameMode: 3
  }

  modal = () => {
    const modal = document.querySelector('.modalComponent')
    if (this.state.modalOpen === false) {
      modal.classList.remove('modalClose')
      modal.classList.add('modalOpen')
      this.setState({
        modalOpen: true
      })
    } else {
      modal.classList.remove('modalOpen')
      modal.classList.add('modalClose')
      this.setState({
        modalOpen: false
      })
    }
  }

  changeGameMode = (num) => {
    this.setState({
      gameMode: num
    })
  }

  playerPick = (item) => {
    let value = Math.floor((Math.random() * this.state.gameMode) + 1)

    this.setState({playerPick: item})

    if (value === 1) {
      this.setState({computerPick: 'paper'})
    } else if (value === 2) {
      this.setState({computerPick: 'scissor'})
    } else if (value === 3) {
      this.setState({computerPick: 'rock'})
    } else if (value === 4) {
      this.setState({computerPick: 'lizard'})
    } else if (value === 5) {
      this.setState({computerPick: 'spock'})
    }
  }

  findWinnerAdv = () => {
    document.querySelector('.playerResultsRingContainerAdv').classList.remove('ringsOffAdv')
    document.querySelector('.playerResultsRingContainerAdv').classList.add('ringsOnAdv')
    document.querySelector('.resultsContainerAdv').classList.remove('resultsHideAdv')
    document.querySelector('.resultsContainerAdv').classList.add('resultsShowAdv')
    if (  (this.state.playerPick === "paper" && (this.state.computerPick === "scissor" || this.state.computerPick === "lizard") ) ||
          (this.state.playerPick === "scissor" && (this.state.computerPick === "spock" || this.state.computerPick === "rock") ) ||
          (this.state.playerPick === "rock" && (this.state.computerPick === "paper" || this.state.computerPick === "spock") ) ||
          (this.state.playerPick === "lizard" && (this.state.computerPick === "rock" || this.state.computerPick === "scissor") ) ||
          (this.state.playerPick === "spock" && (this.state.computerPick === "lizard" || this.state.computerPick === "paper") ) ) {
      this.setState({
        score: this.state.score - 1,
        status: "YOU LOSE"
      })
    } else if ( (this.state.playerPick === "paper" && (this.state.computerPick === "rock" || this.state.computerPick === "spock") ) ||
                (this.state.playerPick === "scissor" && (this.state.computerPick === "paper" || this.state.computerPick === "lizard") ) ||
                (this.state.playerPick === "rock" && (this.state.computerPick === "lizard"|| this.state.computerPick === "scissor") ) || 
                (this.state.playerPick === "lizard" && (this.state.computerPick === "spock"|| this.state.computerPick === "paper") ) || 
                (this.state.playerPick === "spock" && (this.state.computerPick === "scissor"|| this.state.computerPick === "rock") ) ) {
      this.setState({
        score: this.state.score + 1,
        status: "YOU WIN"
      })
    } else {
      this.setState({
        status: "IT'S A TIE"
      })
    }
  }

  findWinner = () => {
    document.querySelector('.playerResultsRingContainer').classList.remove('ringsOff')
    document.querySelector('.playerResultsRingContainer').classList.add('ringsOn')
    document.querySelector('.resultsContainer').classList.remove('resultsHide')
    document.querySelector('.resultsContainer').classList.add('resultsShow')
    if (  (this.state.playerPick === "paper" && this.state.computerPick === "scissor") ||
          (this.state.playerPick === "scissor" && this.state.computerPick === "rock") ||
          (this.state.playerPick === "rock" && this.state.computerPick === "paper") ) {
      this.setState({
        score: this.state.score - 1,
        status: "YOU LOSE"
      })
    } else if ( (this.state.playerPick === "paper" && this.state.computerPick === "rock") ||
                (this.state.playerPick === "scissor" && this.state.computerPick === "paper") ||
                (this.state.playerPick === "rock" && this.state.computerPick === "scissor") ) {
      this.setState({
        score: this.state.score + 1,
        status: "YOU WIN"
      })
    } else {
      this.setState({
        status: "IT'S A TIE"
      })
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <GameMode changeGameMode={this.changeGameMode} />
          <Switch>
            <Route exact path='/' render={()=> <GameNormal playerPick={this.playerPick}
                                                           state={this.state}
                                                           modal={this.modal} />}/>
            <Route exact path='/advancedMode' render={()=> <GameAdvanced playerPick={this.playerPick}
                                                                         state={this.state}
                                                                         modal={this.modal} />}/>
            <Route path='/gameplay' render={()=> <GamePlay state={this.state}
                                                           findWinner={this.findWinner} />}/>
            <Route path='/gameplayAdvanced' render={()=> <GamePlayAdvanced state={this.state}
                                                           findWinnerAdv={this.findWinnerAdv} />}/>
          </Switch>
          
        </div>
        </BrowserRouter>
    )
  }
}