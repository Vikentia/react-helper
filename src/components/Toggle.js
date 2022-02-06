import React from 'react';
import { useState } from 'react';
import './Toggle.css';


function Toggle() {
  let [isToggleOn, setIsToggleOn] = useState(true);
  function handleClick() {
    setIsToggleOn(!isToggleOn)
  }
  return (
    <button className={'toggle__btn'} onClick={() => handleClick()}>
      {isToggleOn ? 'Включено' : 'Выключено'}
    </button>
  );
}


export default Toggle;