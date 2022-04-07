import React from "react";
import "./Button.css";

function Button({onNextPokemon, onPreviousPokemon}) {
    return (
      <div className="button">
        <button onClick={onNextPokemon}>Suivant</button>
        <button onClick={onPreviousPokemon}>Précédent</button>
      </div>
    );
}
  
export default Button;