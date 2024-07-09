
import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => setData(data));

    return () => {

    };
  }, []);

  return (
    <div>
      { data? <p>{data.title}</p> : <p>Loading...</p>}
    </div>
  )
}

export default App;
