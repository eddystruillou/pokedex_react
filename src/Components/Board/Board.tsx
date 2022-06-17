import React, { useState, useEffect } from "react";
import { PokemonData, PokemonLimit } from "../../model";
import './Board.css';
// Components
import ItemList from '../ItemList/ItemList';

const Board:React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);
  const [filter, setFilter] = useState(false);

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
      <div className="filters">
        <button 
          className="all"
          style={{background: filter ? "#d1d1d1" : "white"}}
          onClick={() => setFilter(false)}
        >
          All Pokémon
        </button>
        <button
          className="followed"
          style={{background: filter ? "white" : "#d1d1d1"}}
          onClick={() => setFilter(true)}
        >
          Followed Pokémon
        </button>
      </div>
      <div className="pokeList">
        <ItemList pokeList={pokemons} />
      </div>
    </div>
  )
}

export default Board;