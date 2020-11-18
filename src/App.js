import React, { Component } from 'react'
import Modal from './components/Modal'
import GameMode from './components/GameMode'
import Header from './components/Header'
import GameNormal from './components/GameNormal'
import GamePlay from './components/GamePlay'
import Rules from './components/Rules'
import './css/modal.css'
import './css/mode.css'
import './css/header.css'
import './css/gameNormal.css'
import './css/gamePlay.css'
import './css/rules.css'

export default class App extends Component {
  state = {
    modalOpen: false,
    playerPick: "",
    computerPick: "",
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

  playerPick = (item) => {
    let value = Math.floor((Math.random() * this.state.gameMode) + 1)

    this.setState({playerPick: item})
    if (value === 1) {
      this.setState({computerPick: 'paper'})
    } else if (value === 2) {
      this.setState({computerPick: 'scissor'})
    } else if (value === 3) {
      this.setState({computerPick: 'rock'})
    }

    console.log(this.state.playerPick)
    console.log(this.state.computerPick)
  }

  render() {
    return (
      <div className="App">
        <Modal modal={this.modal} />
        <GameMode />
        <Header state={this.state}/>
        <GameNormal playerPick={this.playerPick}/>
        <GamePlay />
        <Rules modal={this.modal} />

      </div>
    )
  }
}