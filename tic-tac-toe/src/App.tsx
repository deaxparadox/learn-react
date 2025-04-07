import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

type nullString = null | string;

function Square() {
  const [value, setValue] = useState<nullString>(null);
  function handleClick() {
    setValue("X");
  }
  return <button onClick={handleClick} className='square'>{value}</button>
}

export default function Board() {
  return (
    <div className='main-container'>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}