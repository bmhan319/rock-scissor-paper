import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import GameMode from './components/GameMode'
import GameNormal from './components/GameNormal'
import GameAdvanced from './components/GameAdvanced'
import GamePlay from './components/GamePlay'
import GamePlayAdvanced from './components/GamePlayAdvanced'
import './css/gameMode.css'
import './css/modal.css'
import './css/header.css'
import './css/headerAdvanced.css'
import './css/gameNormal.css'
import './css/gameAdvanced.css'
import './css/gamePlay.css'
import './css/gameInterface.css'
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

  // Opens and closes the Rules modal
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

  //Sets the game mode to normal or advanced by having the parameter be either 3 or 5
  changeGameMode = (num) => {
    this.setState({
      gameMode: num
    })
  }

  //Records player and computers chosen items into state 
  playerPick = (item) => {
    //Randomly picks a number between 1 and 3 (or 5 if in advanced mode)
    let value = Math.floor((Math.random() * this.state.gameMode) + 1)
    
    //This sets player's item into state
    this.setState({playerPick: item})

    switch (value) {
      default:
        this.setState({computerPick: ''})
        break
      case 1:
        this.setState({computerPick: 'paper'})
        break
      case 2:
        this.setState({computerPick: 'scissor'})
        break
      case 3:
        this.setState({computerPick: 'rock'})
        break
      case 4:
        this.setState({computerPick: 'lizard'})
        break
      case 5:
        this.setState({computerPick: 'spock'})
        break
    }
  }

  //Loading player's pick to the interface
  loadPlayerMove = () => {
    document.querySelector('.outerPlayerCircle').classList.add('outerCircle')
    document.querySelector('.innerPlayerCircle').classList.add('innerCircle')
    switch (this.state.playerPick) {
      default:
        document.querySelector('.outerPlayerCircle').classList.add('')
        document.querySelector('.innerPlayerCircle').classList.add('')
        break
      case 'paper':
        document.querySelector('.outerPlayerCircle').classList.add('paperCircle')
        document.querySelector('.innerPlayerCircle').classList.add('innerPaperCircle')
        break
      case 'scissor':
        document.querySelector('.outerPlayerCircle').classList.add('scissorsCircle')
        document.querySelector('.innerPlayerCircle').classList.add('innerScissorCircle')
        break
      case 'rock':
        document.querySelector('.outerPlayerCircle').classList.add('rockCircle')
        document.querySelector('.innerPlayerCircle').classList.add('innerRockCircle')
        break
      case 'lizard':
        document.querySelector('.outerPlayerCircle').classList.add('lizardCircleAdv')
        document.querySelector('.innerPlayerCircle').classList.add('innerLizardCircleAdv')
        break
      case 'spock':
        document.querySelector('.outerPlayerCircle').classList.add('spockCircleAdv')
        document.querySelector('.innerPlayerCircle').classList.add('innerSpockCircleAdv')
        break
    }
  }

  //Loading computer's pick to the interface
  loadComputerMove = () => {
    document.querySelector('.outerComputerCircle').classList.add('outerCircle')
    document.querySelector('.innerComputerCircle').classList.add('innerCircle')
    switch (this.state.computerPick) {
      default:
        document.querySelector('.outerComputerCircle').classList.add('')
        document.querySelector('.innerComputerCircle').classList.add('')
        break
      case 'paper':
        document.querySelector('.outerComputerCircle').classList.add('paperCircle')
        document.querySelector('.innerComputerCircle').classList.add('innerPaperCircle')
        break
      case 'scissor':
        document.querySelector('.outerComputerCircle').classList.add('scissorsCircle')
        document.querySelector('.innerComputerCircle').classList.add('innerScissorCircle')
        break
      case 'rock':
        document.querySelector('.outerComputerCircle').classList.add('rockCircle')
        document.querySelector('.innerComputerCircle').classList.add('innerRockCircle')
        break
      case 'lizard':
        document.querySelector('.outerComputerCircle').classList.add('lizardCircleAdv')
        document.querySelector('.innerComputerCircle').classList.add('innerLizardCircleAdv')
        break
      case 'spock':
        document.querySelector('.outerComputerCircle').classList.add('spockCircleAdv')
        document.querySelector('.innerComputerCircle').classList.add('innerSpockCircleAdv')
        break
    }
  }

  //Determining the winner
  findWinner = () => {
    document.querySelector('.playerResultsRingContainer').classList.remove('ringsOff')
    document.querySelector('.playerResultsRingContainer').classList.add('ringsOn')
    document.querySelector('.resultsContainer').classList.remove('resultsHide')
    document.querySelector('.resultsContainer').classList.add('resultsShow')
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

  //Settings for the timing on how the game plays out after player picks item
  loadItems = () => {
    this.loadPlayerMove()
    setTimeout( this.loadComputerMove,500 )
    setTimeout( this.findWinner, 1000)
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <GameMode changeGameMode={this.changeGameMode} />
          <Switch>
            <Route exact path='/' render={()=> <GameNormal state={this.state}
                                                           modal={this.modal}
                                                           playerPick={this.playerPick} />}/>
            <Route exact path='/advancedMode' render={()=> <GameAdvanced state={this.state}
                                                                         modal={this.modal} 
                                                                         playerPick={this.playerPick} />}/>
            <Route path='/gameplay' render={()=> <GamePlay  state={this.state}
                                                            modal={this.modal}
                                                            findWinner={this.findWinner}
                                                            loadPlayerMove={this.loadPlayerMove}
                                                            loadComputerMove={this.loadComputerMove}
                                                            loadItems={this.loadItems} />}/>
            <Route path='/gameplayAdvanced' render={()=> <GamePlayAdvanced state={this.state}
                                                                           modal={this.modal}
                                                                           findWinner={this.findWinner}
                                                                           loadPlayerMove={this.loadPlayerMove}
                                                                           loadComputerMove={this.loadComputerMove}
                                                                           loadItems={this.loadItems} />}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}