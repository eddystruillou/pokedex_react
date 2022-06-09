import React from 'react';
import './ItemList.css';
// Components
import Item from '../Item/Item';

const ItemList:React.FC = () => {
  return (
    <div className='itemList'>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
    </div>
  )
}

export default ItemList;