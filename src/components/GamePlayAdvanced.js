import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import HeaderAdvanced from './HeaderAdvanced'
import ModalAdvanced from './ModalAdvanced'
import GameInterface from './GameInterface'
import Rules from './Rules'

export default class GamePlay extends Component {
  componentDidMount() {
    this.props.loadItems()
  }

  render() {
    return (
      <div className="gamePlayComponent">
        <ModalAdvanced modal={this.props.modal} />
        <HeaderAdvanced state={this.props.state}/>
        <GameInterface state={this.props.state}/>
        <div className="resultsContainer resultsHide">
          <div className="winnerContainer">
            <h2 className="whoWon">{this.props.state.status}</h2>
          </div>
          <div className="playAgainContainer">
            <NavLink to="/advancedMode">
              <button className="playAgain" type="button">PLAY AGAIN</button>
            </NavLink>
          </div>
        </div>
        <Rules modal={this.props.modal} />
      </div>
    )
  }
}