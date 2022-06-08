import React, { useState, useEffect } from "react";
import { PokemonStats, PokemonLimit } from "../../model";
import Button from "../Button/Button";
import Description from "../Description/Description";
import Picture from "../Picture/Picture";
import "./Card.css";

const Card = () => {
  const [id, setId] = useState<number>(30);
  const [item, setItem] = useState<PokemonStats>();
  const [test, setTest] = useState<PokemonStats[]>([]);

  const handleNextPokemon = function() {
    setId(i => i + 1)
  }

  const handlePreviousPokemon = function() {
    setId(i => i - 1)
  }

  /**
   * Get pokemon by id
   */
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(result => {
          setItem(result);
        }
      )
  }, [id])

  /**
   * Get a list of pokemons
   */
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=2')
      .then(res => res.json())
      .then(({ results }) => {
        let promisesArray =  results.map(async (result:PokemonLimit) => {
          const res = await fetch(result.url);
          return await res.json();
        })
        return Promise.all(promisesArray);
      })
      .then(data => {
        setTest(data)
      });
  }, [])

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