import React, { useState, useEffect } from "react";
import { PokemonStats, PokemonLimit } from "../../model";
import Button from "../Button/Button";
import Description from "../Description/Description";
import Picture from "../Picture/Picture";
import "./Card.css";

const Card = () => {
  const [id, setId] = useState<number>(30);
  const [pokemon, setPokemon] = useState<PokemonStats>();
  const [pokemons, setPokemons] = useState<PokemonStats[]>([]);

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
        setPokemon(result);
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
        setPokemons(data);
      });
  }, [])

    return (
      <div className="card">
        <h2 className="title">{pokemon ? pokemon.name : ""}</h2>
        <Picture source={pokemon && pokemon.sprites ? pokemon.sprites.other.dream_world.front_default : ""} />
        <Button onNextPokemon={handleNextPokemon} onPreviousPokemon={handlePreviousPokemon} />
        <Description stats={pokemon && pokemon.stats ? pokemon.stats : []} />
      </div>
    );
}
  
export default Card;