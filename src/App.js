import React, { Component } from 'react'
import Modal from './components/Modal'
import GameMode from './components/GameMode'
import Header from './components/Header'
import GameNormal from './components/GameNormal'
import Rules from './components/Rules'
import './css/modal.css'
import './css/mode.css'
import './css/header.css'
import './css/gameNormal.css'
import './css/rules.css'

export default class App extends Component {
  state = {
    modalOpen: false
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



  render() {
    return (
      <div className="App">
        <Modal modal={this.modal} />
        <GameMode />
        <Header />
        <GameNormal />
        <Rules modal={this.modal} />

      </div>
    )
  }
}