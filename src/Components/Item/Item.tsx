import { useDispatch } from 'react-redux';
import { followPokemon } from '../../features/pokemons/pokemons-slice';
import { PokemonFormatedData } from '../../model';
import useModal from '../../modal';
// Icons
import unfollowIcon from './../../images/unfollow.png';
import followIcon from './../../images/follow.png';
// Style
import './Item.css';
import Card from '../Card/Card';

const Item = ({ pokeData }: {pokeData: PokemonFormatedData}) => {
  // Use modal
  const { isShown, toggle } = useModal();
  // Update store
  const dispatch = useDispatch();

  /**
   * Used to follow or unfollow a pokemon
   */
  const handleFollowOrUnfollow = () => {
    dispatch(followPokemon(pokeData.id));
  }

  return (
    <div className='item'>
      <img src={pokeData.tilePicture} alt="#" className="image" onClick={toggle} />
      <img src={pokeData.isFollow ? followIcon : unfollowIcon} alt="follow" className="icon" onClick={handleFollowOrUnfollow} />
      <div className="title">{pokeData.name}</div>
      <Card isShowing={isShown} hide={toggle} data={pokeData} />
    </div>
  )
}

export default Item;