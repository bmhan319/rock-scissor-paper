import React from 'react'

export default function Header() {
  return (
    <div className="scoreHeader">
      <div className="scoreHeaderInnerContainer">
        <ul className="scoreHeaderTextContainer">
          <li className="scoreHeaderText">ROCK</li>
          <li className="scoreHeaderText">PAPER</li>
          <li className="scoreHeaderText">SCISSORS</li>
          <li className="scoreHeaderText">LIZARD</li>
          <li className="scoreHeaderText">SPOCK</li>
        </ul>
      </div>
      <div className="scoreHeaderInnerContainer">
        <ul className="scoreHeaderScoreContainer">
          <li className="scoreHeaderScoreTitle">SCORE</li>
          <li className="scoreHeaderScore">12</li>
        </ul>
      </div>
    </div>
  )
}
