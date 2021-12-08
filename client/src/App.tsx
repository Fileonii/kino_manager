import React from 'react';
import Logo from './features/component/Logo';
import { MainScreen } from './features/counter/MainScreen';
import './App.css';

function App() {
  return (
    <div>
      <nav className="d-flex justify-content-center">
        <Logo></Logo>
      </nav>
      <div className="App">
        <MainScreen />

      </div>
    </div>
  );
}

export default App;
