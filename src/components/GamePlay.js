import React, { Component } from 'react'

export default class GamePlay extends Component {
  render() {
    return (
      <div className="gamePlayComponent">
        <div className="gamePlayContainer">
          <div className="playerPickContainer">
            <div className="itemContainer">
              <div className="outerPlayerCircle">
                <div className="innerPlayerCircle"></div>
              </div>
            </div>
            <p className="itemPickedText">YOU PICKED</p>
          </div>
          <div className="computerPickContainer">
            <div className="itemContainer">
              <div className="outerPlayerCircle">
                <div className="innerPlayerCircle"></div>
              </div>
            </div>
            <p className="itemPickedText">THE HOUSE PICKED</p>
          </div>
        </div>
      </div>
    )
  }
}
