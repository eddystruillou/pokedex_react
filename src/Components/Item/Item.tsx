import React, { useState } from 'react';
import unfollowIcon from './../../images/unfollow.png';
import followIcon from './../../images/follow.png';
import './Item.css';

const Item: React.FC<{sprite: string, name: string}> = ({ sprite, name}) => {
  const [follow, setFollow] = useState(false)

  const handleFollowOrUnfollow = function () {
    if(follow) {
      setFollow(false)
    } else {
      setFollow(true)
    }
  }

  return (
    <div className='item'>
      <img src={sprite} alt="#" className="image" />
      <img src={ follow ? followIcon : unfollowIcon} className="icon" onClick={handleFollowOrUnfollow} />
      <div className="title">{name}</div>
    </div>
  )
}

export default Item;