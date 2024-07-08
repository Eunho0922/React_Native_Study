import React, { useState } from 'react';
import './App.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className='App'>
            <header className='App-header'>
            <h1>Declarative Programming Example</h1>
            { isLoggedIn ? (
              <p>Welcome, User!</p>
            ) : (
              <p>Please log in.</p>
            )}
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? 'Log Out' : 'Log In'}
            </button>
            </header>
        </div>
    )
}

export default App;

