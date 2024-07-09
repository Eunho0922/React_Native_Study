
import React, { createContext, useContext } from 'react';

import './App.css';

const MyContext = createContext();

function App() {
  return (
    <MyContext.Provider value="Hello from Context">
      <ChildComponent />
    </MyContext.Provider>
  );
}

function ChildComponent() {
  const value = useContext(MyContext);
  return <p>{value}</p>;
}

export default App;
