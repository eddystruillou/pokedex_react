import React from "react";
import "./Button.css";

function Button({onNextPokemon, onPreviousPokemon}) {
    return (
      <div className="button">
        <button className="next" onClick={onNextPokemon}>Suivant</button>
        <button className="previous" onClick={onPreviousPokemon}>Précédent</button>
      </div>
    );
}
  
export default Button;