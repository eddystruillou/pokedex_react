import './ItemList.css';
// Components
import Item from '../Item/Item';

interface PokeData {
  name: string
  url: string
}

const ItemList = ({ pokeList }: {pokeList: PokeData[]}) => {
  return (
    <div className='itemList'>
      {pokeList.map(poke =>
        <Item key={poke.name} pokeName={poke.name} />
      )}
    </div>
  )
}

export default ItemList;