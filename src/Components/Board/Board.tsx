import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPokemon } from '../../features/pokemons/pokemons-slice';
import { PokemonLimit, PokemonData } from "../../model";
// Used for the type of the state
import { RootState } from "../../app/store";
// Components
import ItemList from '../ItemList/ItemList';
// Styles
import './Board.css';

const Board:React.FC = () => {
  // Used to manage the state of the background when the focus of the tab changes
  const [filter, setFilter] = useState(false);
  // The number of pokemon we want to collect
  const [numPokemons, setNumPokemons] = useState(15);
  // Update and get the stored data
  const dispatch = useDispatch();
  const pokeData = useSelector((state: RootState) => state.pokemons.pokemons);

  /**
   * Get a list of pokemons
   */
   useEffect(() => {
    // TODO optimize the process for retrieving data to avoid having to systematically re-fetch everything
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${numPokemons}`)
      .then(res => res.json())
      .then(({ results }) => {
        let promisesArray =  results.map(async (result:PokemonLimit) => {
          const res = await fetch(result.url);
          const data = await res.json();
          return formatPokemonData(data);
        })
        return Promise.all(promisesArray);
      })
      .then(data => {
        dispatch(setPokemon(data))
      });
  }, [numPokemons])

  /**
   * Returns pokemon information in a modified format to simplify the data model
   * @param {PokemonData} data - Object that contain all information of a pokemon
   * @returns 
   */
  const formatPokemonData = (data: PokemonData) => {
    return {
      id: data && data.id ? data.id : 0,
      name: data && data.name ? data.name : "",
      img: data && data.sprites && data.sprites.front_default ? data.sprites.front_default : "",
      isFollow: false
    }
  }

  return (
    <div className='board'>
      <h1>Pokédex</h1>
      <div className="filters">
        <select className="select" value={numPokemons} onChange={(e) => setNumPokemons(Number(e.target.value))}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
        </select>
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
        { filter ? (
          <ItemList pokeList={pokeData ? pokeData.filter(poke => poke.isFollow) : []} />
        ) : (
          <ItemList pokeList={pokeData} />
        )}
      </div>
    </div>
  )
}

export default Board;