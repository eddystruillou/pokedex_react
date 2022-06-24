import React, { useState } from "react";
import { useFetchPokemonsQuery } from "../../features/pokemons/pokemons-api-slice";
import './Board.css';
// Components
import ItemList from '../ItemList/ItemList';

const Board:React.FC = () => {
  // Used to manage the state of the background when the focus of the tab changes
  const [filter, setFilter] = useState(false);
  // The number of pokemon we want to collect
  // Need to make it dynamic
  const [numPokemons, setNumPokemons] = useState(15);
  // Get list of pokemon
  const { data = [], isFetching } = useFetchPokemonsQuery(numPokemons);

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
        <ItemList pokeList={data} />
      </div>
    </div>
  )
}

export default Board;