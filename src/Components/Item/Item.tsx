import { useState } from 'react';
import { PokemonFormatedData } from '../../model';
import unfollowIcon from './../../images/unfollow.png';
import followIcon from './../../images/follow.png';
import './Item.css';

const Item = ({ pokeData }: {pokeData: PokemonFormatedData}) => {
  // State to know if the pokemon is followed or not
  const [follow, setFollow] = useState(false);

  /**
   * Used to follow or unfollow a pokemon
   */
  const handleFollowOrUnfollow = () => {
    if(follow) {
      setFollow(false)
    } else {
      setFollow(true)
    }
  }

  return (
    <div className='item'>
      <img src={pokeData.img} alt="#" className="image" />
      <img src={follow ? followIcon : unfollowIcon} className="icon" onClick={handleFollowOrUnfollow} />
      <div className="title">{pokeData.name}</div>
    </div>
  )
}

export default Item;