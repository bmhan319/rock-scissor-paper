import React from 'react'

export default function HeaderAdvanced(props) {
  return (
    <div className="scoreHeaderAdv">
      <div className="scoreHeaderInnerContainerAdv">
        <ul className="scoreHeaderTextContainerAdv">
          <li className="scoreHeaderTextAdv">ROCK</li>
          <li className="scoreHeaderTextAdv">PAPER</li>
          <li className="scoreHeaderTextAdv">SCISSORS</li>
          <li className="scoreHeaderTextAdv">LIZARD</li>
          <li className="scoreHeaderTextAdv">SPOCK</li>
        </ul>
      </div>
      <div className="scoreHeaderInnerContainerAdv">
        <ul className="scoreHeaderScoreContainerAdv">
          <li className="scoreHeaderScoreTitleAdv">SCORE</li>
          <li className="scoreHeaderScoreAdv">{props.state.score}</li>
        </ul>
      </div>
    </div>
  )
}