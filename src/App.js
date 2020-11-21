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

  // Opens and closes the 'Rules' modal
  modal = () => {
    const modal = document.querySelector('.modalComponent')
    const wrapper = document.querySelector('.ModalWrapper')
    const mode = document.querySelector('.modeComponent')
    if (this.state.modalOpen === false) {
      modal.classList.remove('modalClose')
      modal.classList.add('modalOpen')
      wrapper.classList.remove('ModalWrapperOff')
      wrapper.classList.add('ModalWrapperOn')
      mode.classList.remove('ModalWrapperOff')
      mode.classList.add('ModalWrapperOn')
      this.setState({
        modalOpen: true
      })
    } else {
      modal.classList.remove('modalOpen')
      modal.classList.add('modalClose')
      wrapper.classList.remove('ModalWrapperOn')
      wrapper.classList.add('ModalWrapperOff')
      mode.classList.remove('ModalWrapperOn')
      mode.classList.add('ModalWrapperOff')
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

  //Player pick circle animation
  pressButton = (element1, element2) => {
    document.querySelector(element1).classList.add(element2)
    document.querySelector(element1).style.boxShadow = "inset 0 -4px 1px 1px rgba(0,0,0,0.3)"
  }

  //Records player and computer's chosen items into state 
  playersPick = (item) => {
    //Randomly picks a number between 1 and 3 (or 5 if in advanced mode)
    let value = Math.floor((Math.random() * this.state.gameMode) + 1)
    
    //This sets player's item into state
    this.setState({playerPick: item})

    //Determines computers item based on the random number picked earlier in the function.
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
    //places default placeholder circle on the game interface
    document.querySelector('.outerPlayerCircle').classList.add('outerCircle')
    document.querySelector('.innerPlayerCircle').classList.add('innerCircle')
    //determines players interface styling based on their chosen item
    //outer circle dictates color
    //inner circle determines icon
    switch (this.state.playerPick) {
      default:
        document.querySelector('.outerPlayerCircle').classList.add('outerCircle')
        document.querySelector('.innerPlayerCircle').classList.add('innerCircle')
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
    //places default placeholder circle on the game interface
    document.querySelector('.outerComputerCircle').classList.add('outerCircle')
    document.querySelector('.innerComputerCircle').classList.add('innerCircle')
    //determines computers interface styling based on their chosen item
    //outer circle dictates color
    //inner circle determines icon
    switch (this.state.computerPick) {
      default:
        document.querySelector('.outerComputerCircle').classList.add('outerCircle')
        document.querySelector('.innerComputerCircle').classList.add('innerCircle')
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
    //Turns on the results message container
    document.querySelector('.resultsContainer').classList.remove('resultsHide')
    document.querySelector('.resultsContainer').classList.add('resultsShow')

    //Logic in determining whether player loses
    if (  (this.state.playerPick === "paper" && (this.state.computerPick === "scissor" || this.state.computerPick === "lizard") ) ||
          (this.state.playerPick === "scissor" && (this.state.computerPick === "spock" || this.state.computerPick === "rock") ) ||
          (this.state.playerPick === "rock" && (this.state.computerPick === "paper" || this.state.computerPick === "spock") ) ||
          (this.state.playerPick === "lizard" && (this.state.computerPick === "rock" || this.state.computerPick === "scissor") ) ||
          (this.state.playerPick === "spock" && (this.state.computerPick === "lizard" || this.state.computerPick === "paper") ) ) {
      this.setState({
        score: this.state.score - 1,
        status: "YOU LOSE"
      })
      //Turns on the winner spotlight for computer
      document.querySelector('.computerResultsRingContainer').classList.remove('ringsOff')
      document.querySelector('.computerResultsRingContainer').classList.add('ringsOn')
      //Logic in determining whether player wins
    } else if ( (this.state.playerPick === "paper" && (this.state.computerPick === "rock" || this.state.computerPick === "spock") ) ||
                (this.state.playerPick === "scissor" && (this.state.computerPick === "paper" || this.state.computerPick === "lizard") ) ||
                (this.state.playerPick === "rock" && (this.state.computerPick === "lizard"|| this.state.computerPick === "scissor") ) || 
                (this.state.playerPick === "lizard" && (this.state.computerPick === "spock"|| this.state.computerPick === "paper") ) || 
                (this.state.playerPick === "spock" && (this.state.computerPick === "scissor"|| this.state.computerPick === "rock") ) ) {
      this.setState({
        score: this.state.score + 1,
        status: "YOU WIN"
      })
      //Turns on the winner spotlight for player
      document.querySelector('.playerResultsRingContainer').classList.remove('ringsOff')
      document.querySelector('.playerResultsRingContainer').classList.add('ringsOn')
    } else {
      //Logic in determining a tie
      this.setState({
        status: "IT'S A TIE"
      })
    }
  }

  //Settings for the timing on how the game plays out after player picks item
  loadItems = () => {
    setTimeout(this.loadPlayerMove, 500)     //Places players chosen item to interface after .5s delay
    setTimeout(this.loadComputerMove, 500)   //Places computers chosen item to interface after .5s delay
    setTimeout(this.findWinner, 1000)        //Determines winner after another .5s delay
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <GameMode changeGameMode={this.changeGameMode} />
          <Switch>
            <Route exact path='/' render={()=> <GameNormal state={this.state}
                                                           modal={this.modal}
                                                           pressButton={this.pressButton}
                                                           playersPick={this.playersPick} />}/>
            <Route exact path='/advancedMode' render={()=> <GameAdvanced state={this.state}
                                                                         modal={this.modal} 
                                                                         pressButton={this.pressButton}
                                                                         playersPick={this.playersPick} />}/>
            <Route path='/gameplay' render={()=> <GamePlay  state={this.state}
                                                            modal={this.modal}
                                                            loadItems={this.loadItems} />}/>
            <Route path='/gameplayAdvanced' render={()=> <GamePlayAdvanced state={this.state}
                                                                           modal={this.modal}
                                                                           loadItems={this.loadItems} />}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}