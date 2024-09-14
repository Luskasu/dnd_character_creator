import React from 'react';
import { RACES } from '../data/RaceData';


export const BlankCard = () => (
  <div>
    <h3>Select Your Race</h3>
    <p> ---- </p>
  </div>
);

export const RaceCard = ({raceName}) => {
  if(raceName){
    return(  <div style={{position: 'relative', top:'-12px', width:'80%'}}>
      <h3>{RACES[raceName].name}</h3>
      <p>{RACES[raceName].description}</p>
      <p>Features</p>
    </div>
    );
  }
  return (
    <BlankCard/>
  );
  
};

