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
  render() {
    return (
      <div className="App">
        <Modal />
        <GameMode />
        <Header />
        <GameNormal />
        <Rules />

      </div>
    )
  }
}