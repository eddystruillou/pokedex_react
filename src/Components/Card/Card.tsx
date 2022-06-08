import React, { useState, useEffect } from "react";
import { PokemonStats } from "../../model";
import Button from "../Button/Button";
import Description from "../Description/Description";
import Picture from "../Picture/Picture";
import "./Card.css";

const Card = () => {
  const [id, setId] = useState<number>(30);
  const [item, setItem] = useState<PokemonStats>();

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
          }
        )
    }, [id])

    return (
      <div className="card">
        <h2 className="title">{item ? item.name : ""}</h2>
        <Picture source={item && item.sprites ? item.sprites.other.dream_world.front_default : ""} />
        <Button onNextPokemon={handleNextPokemon} onPreviousPokemon={handlePreviousPokemon} />
        <Description stats={item && item.stats ? item.stats : []} />
      </div>
    );
}
  
export default Card;