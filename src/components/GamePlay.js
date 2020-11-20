import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import Header from './Header'
import Modal from './Modal'
import GameInterface from './GameInterface'
import Rules from './Rules'

export default class GamePlay extends Component {
  componentDidMount() {
    this.props.loadItems()
  }

  render() {
    return (
      <div className="gamePlayComponent">
        <Modal modal={this.props.modal} />
        <Header state={this.props.state}/>
        <GameInterface />
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
        <Rules modal={this.props.modal} />
      </div>
    )
  }
}
