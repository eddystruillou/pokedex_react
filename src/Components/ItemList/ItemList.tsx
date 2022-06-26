import { PokemonLimit } from '../../model';
import './ItemList.css';
// Components
import Item from '../Item/Item';

const ItemList = ({ pokeList }: {pokeList: PokemonLimit[]}) => {
  return (
    <div className='itemList'>
      {pokeList.map(poke =>
        <Item key={poke.name} pokeName={poke.name} />
      )}
    </div>
  )
}

export default ItemList;