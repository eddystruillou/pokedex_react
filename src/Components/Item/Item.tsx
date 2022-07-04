import { useState } from 'react';
import { PokemonFormatedData } from '../../model';
import { useDispatch } from 'react-redux';
import { followPokemon } from '../../features/pokemons/pokemons-slice';
// Icons
import unfollowIcon from './../../images/unfollow.png';
import followIcon from './../../images/follow.png';
// Style
import './Item.css';

const Item = ({ pokeData }: {pokeData: PokemonFormatedData}) => {
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
      <img src={pokeData.img} alt="#" className="image" />
      <img src={pokeData.isFollow ? followIcon : unfollowIcon} className="icon" onClick={handleFollowOrUnfollow} />
      <div className="title">{pokeData.name}</div>
    </div>
  )
}

export default Item;