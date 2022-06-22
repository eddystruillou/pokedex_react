import { useState } from 'react';
import { useFetchPokemonDetailsQuery } from '../../features/pokemons/pokemons-api-slice';
import unfollowIcon from './../../images/unfollow.png';
import followIcon from './../../images/follow.png';
import './Item.css';

const Item = ({ pokeName }: {pokeName: string}) => {
  // State to know if the pokemon is followed or not
  const [follow, setFollow] = useState(false);
  // Get informations of the pokemon from de the API
  const { data = {name: "", sprites: {front_default: ""}}, isFetching } = useFetchPokemonDetailsQuery(pokeName);

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
      <img src={data && data.sprites ? data.sprites.front_default : ""} alt="#" className="image" />
      <img src={follow ? followIcon : unfollowIcon} className="icon" onClick={handleFollowOrUnfollow} />
      <div className="title">{data.name}</div>
    </div>
  )
}

export default Item;