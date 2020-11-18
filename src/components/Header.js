import React from 'react'

export default function Header(props) {
  return (
    <div className="scoreHeader">
      <div className="scoreHeaderInnerContainer">
        <ul className="scoreHeaderTextContainer">
          <li className="scoreHeaderText">ROCK</li>
          <li className="scoreHeaderText">PAPER</li>
          <li className="scoreHeaderText">SCISSORS</li>
        </ul>
      </div>
      <div className="scoreHeaderInnerContainer">
        <ul className="scoreHeaderScoreContainer">
          <li className="scoreHeaderScoreTitle">SCORE</li>
          <li className="scoreHeaderScore">{props.state.score}</li>
        </ul>
      </div>
    </div>
  )
}
