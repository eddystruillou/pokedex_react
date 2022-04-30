import React from "react";
import "./Button.css";

// TODO not sure about that
interface Props {
  onNextPokemon: () => void;
  onPreviousPokemon: () => void;
}

const Button:React.FC<Props> = ({onNextPokemon, onPreviousPokemon}) => {
    return (
      <div className="button">
        <button className="next" onClick={onNextPokemon}>❯</button>
        <button className="previous" onClick={onPreviousPokemon}>❮</button>
      </div>
    );
}
  
export default Button;