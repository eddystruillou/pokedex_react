import { PokemonFormatedData } from '../../model';
import './ItemList.css';
// Components
import Item from '../Item/Item';

const ItemList = ({ pokeList }: {pokeList: PokemonFormatedData[]}) => {
  return (
    <div className='itemList'>
      {!pokeList.length ? (
          <div className="noFollow">No followed Pokemon in the list</div>
        ) : pokeList.map(poke =>
        <Item key={poke.name} pokeData={poke} />
        )
      }
    </div>
  )
}

export default ItemList;