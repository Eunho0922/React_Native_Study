
import React, { useState, useEffect, useCallback, useMemo, useLayoutEffect, useRef } from 'react';

import './App.css';
import { logDOM } from '@testing-library/react';
import { type } from '@testing-library/user-event/dist/type';

function App({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const [inputValue, setInputValue] = useState('');

  const computedValue = useMemo(() => {
    console.log('Computing value...');
    return count * 2;
  }, [count]);

  const handleButtonClick = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  useEffect(() => {
    console.log('useEffect: count changed to', count);
    return () => {
      console.log('Cleaning up effect for count:', count);
    };
  }, [count]);


  useLayoutEffect(() => {
    console.log('useLayoutEffect: inputValue changed to', inputValue);
  }, [inputValue])

  return (
    <div>
      <p>Count: {count}</p>
      <p>Computed Value (count * 2): {computedValue}</p>
    <button onClick={handleButtonClick}>Increment</button>
    <input 
    type="text" 
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
    />
    </div>
  )
}

export default App;
