import React from 'react';
import MainScreen from './components/MainScreen';
import CharacterSheet from './components/CharacterSheet';
import { CharProvider } from './contexts/CharContext';
import './App.css';

function App() {
  return (
    <CharProvider>
      <div className='container'>
        <div className='main-screen'>
          <MainScreen />
        </div>
        <CharacterSheet />
      </div>
    </CharProvider>
  );
}

export default App;