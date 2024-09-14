import React from 'react';



export const MenuButton = ({ image, name, menuType, onClick}) => (
    <button className={"menu-button"} onClick={onClick}>
      <img src={image} alt={`${name} race`} />
      <a>{name}</a>
    </button>
  );

export const SideButton = ({ text, state, onClick }) => (
    <button className={"square-button"} onClick={onClick}>
      <p style={{ position: 'relative', objectPosition: 'top', top: '-20px', fontSize: '14px', fontVariant: 'small-caps' }}>{text}</p>
      <p>{state}</p>
    </button>
  );