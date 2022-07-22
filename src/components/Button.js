import React from "react";
import buttonImg from '../images/icon-dice.svg'

const Button = ({ getAdvice }) => (
  <button onClick={getAdvice} className="dice-btn" id="dice">
    <img src={buttonImg} alt="dice-button" />
  </button>
);

export default Button;
