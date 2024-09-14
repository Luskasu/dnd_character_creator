import React from 'react';
import attribute from '../assets/attribute.svg'

const AbilityField = ({abilityName, value, onChange}) =>(
    <div>
      <p style={{fontSize:'14px', textAlign:'center', position:'relative', top:'10px', left:'-1px'}}>
        {abilityName}
      </p>
      <div className='ability-field'>
        <img src={attribute} alt=""/>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)} 
          autoFocus
        />
        <p>{Math.floor((value-10) / 2)}</p>
      </div>
    </div>
  );

export default AbilityField;
 