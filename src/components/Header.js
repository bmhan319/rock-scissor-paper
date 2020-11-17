import React from 'react'

export default function Header() {
  return (
    <div className="scoreHeader">
      <ul className="scoreHeaderTextContainer">
        <li className="scoreHeaderText">Rock</li>
        <li className="scoreHeaderText">Paper</li>
        <li className="scoreHeaderText">Scissors</li>
        <li className="scoreHeaderText">Lizard</li>
        <li className="scoreHeaderText">Spock</li>
      </ul>
      <ul className="scoreHeaderScoreContainer">
        <li className="scoreHeaderScoreTitle">Score</li>
        <li className="scoreHeaderScore">12</li>
      </ul>
    </div>
  )
}
