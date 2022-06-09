import React from 'react';
import './Board.css';
// Components
import ItemList from '../ItemList/ItemList';

const Board:React.FC = () => {
  return (
    <div className='board'>
        <h1>Pokédex</h1>
        <hr/>
        <ItemList />
    </div>
  )
}

export default Board;