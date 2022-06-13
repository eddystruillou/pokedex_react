import React, { useState, useEffect } from "react";
import { PokemonData, PokemonLimit } from "../../model";
import './Board.css';
// Components
import ItemList from '../ItemList/ItemList';

const Board:React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);

  /**
   * Get a list of pokemons
   */
   useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=20')
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
    <div className='board'>
        <h1>Pokédex</h1>
        <hr/>
        <ItemList pokeList={pokemons} />
    </div>
  )
}

export default Board;