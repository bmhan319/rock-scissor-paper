import React from 'react'
import rules from '../img/image-rules.svg'
import close from '../img/icon-close.svg'

export default function Modal(props) {
  return (
    <div onClick={props.modal} className="modalComponent modalClose">
      <div className="modalContainer">
        <div className="modalTitleContainer">
          <h1 className="modalTitle">RULES</h1>
        </div>

        <div className="modalRulesContainer">
          <img className="modalRulesImg" src={rules} alt="rules" />
        </div>

        <div className="modalCloseContainer" onClick={props.modal}>
          <img className="modalCloseIcon" src={close} alt="close" />
        </div>
      </div>
    </div>
  )
}
