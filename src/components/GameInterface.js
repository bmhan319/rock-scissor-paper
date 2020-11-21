import React from 'react'

export default function ResultsInterface() {
  return (
    <div>
      <div className="gamePlayOuterContainer">
          <div className="gamePlayContainer">
            <div className="playerPickContainer">
              <div className="itemContainer">
                <div className="outerPlayerCircle">
                  <div className="innerPlayerCircle"></div>
                </div>
              </div>
              <p className="itemPickedText">YOU PICKED</p>

              <div className="playerResultsRingContainer ringsOff">
                <div className="playerResultsRings playerResultsOuterRing"></div>
                <div className="playerResultsRings playerResultsMidRing"></div>
                <div className="playerResultsRings playerResultsInnerRing"></div> 
              </div>

            </div>
            <div className="computerPickContainer">
              <div className="itemContainer">
                <div className="outerComputerCircle">
                  <div className="innerComputerCircle"></div>
                </div>
              </div>
              <p className="itemPickedText">THE HOUSE PICKED</p>

              <div className="computerResultsRingContainer ringsOff">
                <div className="playerResultsRings playerResultsOuterRing"></div>
                <div className="playerResultsRings playerResultsMidRing"></div>
                <div className="playerResultsRings playerResultsInnerRing"></div> 
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
