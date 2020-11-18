import React, { Component } from 'react'
import GameMode from './components/GameMode'
import Header from './components/Header'
import GameNormal from './components/GameNormal'
import './css/mode.css'
import './css/header.css'
import './css/game.css'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <GameMode />
        <Header />
        <GameNormal />
        <div>Ruler</div>
      </div>
    )
  }
}