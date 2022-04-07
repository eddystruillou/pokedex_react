import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import Description from "../Description/Description";
import Picture from "../Picture/Picture";
import "./Card.css";

function Card() {
  const [error, setError] = useState(null);
  const [id, setId] = useState(30);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState([]);

  const handleNextPokemon = function() {
    setId(i => i + 1)
  }

  const handlePreviousPokemon = function() {
    setId(i => i - 1)
  }

  useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => res.json())
        .then(result => {
            setItem(result);
            setIsLoaded(true);
          },
          error => {
            setError(error);
            setIsLoaded(true);
          }
        )
    }, [id])

    return (
      <div className="card">
        <h2 className="title">{item.name}</h2>
        <Picture source={item.sprites ? item.sprites.other.dream_world.front_default : ''} />
        <Button onNextPokemon={handleNextPokemon} onPreviousPokemon={handlePreviousPokemon} />
        <Description stats={item.stats ? item.stats : []} />
      </div>
    );
}
  
export default Card;