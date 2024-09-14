import React, { createContext, useState, useContext } from 'react';

const CharContext = createContext();

export const CharProvider = ({ children }) => {
  const [selectedRace, setSelectedRace] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedBackground, setSelectedBackground] = useState('');

  const [level, setLevel] = useState(1);
  


  return (
    <CharContext.Provider value={{ 
      selectedRace, setSelectedRace,
      selectedClass, setSelectedClass,
      selectedBackground, setSelectedBackground,
      level, setLevel
    }}>
      {children}
    </CharContext.Provider>
  );
};

export const useChar = () => useContext(CharContext);