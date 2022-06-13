import React from 'react';
import './Item.css';

const Item: React.FC<{sprite: string, name: string}> = ({ sprite, name}) => {
  return (
    <div className='item'>
      <img src={sprite} alt="#" className="image" />
      <div className="title">{name}</div>
    </div>
  )
}

export default Item;