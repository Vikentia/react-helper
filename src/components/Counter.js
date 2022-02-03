import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="count">
      <button className="count__btn" onClick={() => setCount(count - 1)}>-1</button>
      <p>Счётчик: {count}</p>
      <button className="count__btn" onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

export default Counter;