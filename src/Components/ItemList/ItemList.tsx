import React from 'react';
import { PokemonData } from "../../model";
import './ItemList.css';

// Components
import Item from '../Item/Item';

const ItemList = ({ pokeList }: {pokeList: PokemonData[]}) => {
  return (
    <div className='itemList'>
      {pokeList.map(poke =>
        <Item key={poke.name} sprite={poke && poke.sprites ? poke.sprites.front_default : ""} name={poke.name} />
      )}
    </div>
  )
}

export default ItemList;