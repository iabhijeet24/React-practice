import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='counter-card'>
      <p id='counter-content'>You have clicked {count} times.</p>
      <button
        id='counter-button'
        onClick={() => setCount(count + 1)}
      >
        Click Me !</button>
    </div>
  );
};

export default Counter;
