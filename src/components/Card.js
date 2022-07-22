import React from "react";
import Button from "./Button";
import patternImg from '../images/pattern-divider-desktop.svg'
import buttonImg from '../images/icon-dice.svg'

const Card = ({advice, getAdvice}) => (
    <div className="card">
        <h1 className="advice-id" id="advice-id"> Advice #{advice.id} </h1>
        <p className="advice-text" id="advice"> {advice.advice} </p>
        <img src={patternImg} alt="pattern-divider" className="divider" />
        <Button buttonImg={buttonImg} getAdvice={getAdvice} />
    </div>
)

export default Card;