
import React, { useState, useCallback } from 'react';

import './App.css';

const ChildComponent = React.memo(({onClick}) => {
  console.log('ChildComponenet rendered');
  return(
    <button onClick={onClick}>Click me</button>
  );
});

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []); 

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <ChildComponent onClick={handleClick} />
    </div>
  )
}

export default ParentComponent;
