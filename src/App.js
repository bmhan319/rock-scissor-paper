import React, { Component } from 'react'
import Header from './components/Header'
import Game from './components/Game'
import './css/header.css'
import './css/game.css'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Game />
        <div>Ruler</div>
      </div>
    )
  }
}