
import React, { useState, useLayoutEffect, useRef } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const divRef = useRef(null);

  useLayoutEffect(() => {
    if(divRef.current) {
      divRef.current.style.color = count % 2 === 0 ? 'blue' : 'green';
    }
  }, [count])

  return (
    <div>
      <div ref={divRef}>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default App;
