import React from "react";
import "./Button.css";

function Button({onNextPokemon, onPreviousPokemon}) {
    return (
      <div className="button">
        <button className="next" onClick={onNextPokemon}>❯</button>
        <button className="previous" onClick={onPreviousPokemon}>❮</button>
      </div>
    );
}
  
export default Button;