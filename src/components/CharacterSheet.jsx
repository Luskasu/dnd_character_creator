import React, { useState, useEffect } from 'react';
import AbilityField from './AbilityField';
import { useChar } from '../contexts/CharContext';
import { CLASSES } from '../data/ClassData';


const CharacterSheet = () => {
  const { selectedRace, selectedClass, level, setLevel} = useChar();

  const [força, setForça] = useState(8);
  const [destreza, setDestreza] = useState(8);
  const [constituição, setConstituição] = useState(8);
  const [inteligência, setInteligência] = useState(8);
  const [sabedoria, setSabedoria] = useState(8);
  const [carisma, setCarisma] = useState(8);

  const [classWeapons, setClassWeapons] = useState([])
  const [classArmours, setClassArmours] = useState([])

  const [raceWeapons, setRaceWeapons] = useState([])
  const [raceArmours, setRaceArmours] = useState([])


  const [weapons, setWeapons] = useState([]);
  const [armours, setArmours] = useState([]);
  const [savings, setSavings] = useState([]);

  //const [skills, setSkills] = useState([]);
  
  const ViewProficiencies = (arg) => {
    if(arg.length > 0){
      return arg.join(", ");
    }
    return "None";
  }

  const updateWeapons = () => {
    const updated = [...new Set([...classWeapons, ...raceWeapons])]
    setWeapons(updated);
  };

  const updateArmours = () =>{
    const updated = [...new Set([...classArmours, ...raceArmours])]
    setArmours(updated);
  };

  useEffect(() => {
    if (selectedClass) {
      updateWeapons()
      updateArmours()
    }
  }, [classWeapons], [classArmours]);


  useEffect(() => {
    if (selectedClass) {
      setClassWeapons(CLASSES[selectedClass].weapons);
      setClassArmours(CLASSES[selectedClass].armour);
      setSavings(CLASSES[selectedClass].saving)
    }
  }, [selectedClass]);

  const Proficiencies = () =>{
    return(
      <div>          
        <p style={{textAlign:'center', fontVariant:'small-caps', fontSize:'16px'}}>Proficiencies</p>

        <p style={{color:'#958c88', marginBottom:'-14px'}}> <a style={{color:'rgba(210, 191, 177)'}}>Weapons </a> {ViewProficiencies(weapons)}</p>
        <p style={{color:'#958c88', marginBottom:'-14px'}}><a style={{color:'rgba(210, 191, 177)'}}>Armour </a> {ViewProficiencies(armours)}</p>
        <p style={{color:'#958c88', marginBottom:'-14px'}}><a style={{color:'rgba(210, 191, 177)'}}>Saving Throws </a>{ViewProficiencies(savings)}</p>

        <p style={{color:'#958c88', marginBottom:'-14px'}}><a style={{color:'rgba(210, 191, 177)'}}>Skills -</a> Athletics, Religion, Insight, Intimidation, Persuasion</p>
</div>
    );
  }

  const handleLevel = (event) => {
    setLevel(event.target.value);
};

  return (
    <div className={"sheet"}>
      <h2 style={{ textAlign: 'center' }}>CHARACTER SHEET</h2>
      <div className={"char-info"}>
        <p style={{fontSize:'16px', color:'#958c88'}}>
          {selectedRace}
        </p>
        <p style={{fontSize:'16px'}}>
          Level <input className={"mini-input"} type="text" value={level} onChange={handleLevel}/> {selectedClass}
        </p>

      </div>
      <div className={"abilities"}>
        <p style={{ textAlign: 'center', fontVariant:'small-caps', fontSize:'16px'}}>abilities</p>
        <div className={"ability-container"}>
          <AbilityField
            abilityName={"STR"}
            value={força}
            onChange={(newValue) => setForça(Number(newValue))}
          />
          <AbilityField
            abilityName={"DEX"}
            value={destreza}
            onChange={(newValue) => setDestreza(Number(newValue))}
          />
          <AbilityField
            abilityName={"CON"}
            value={constituição}
            onChange={(newValue) => setConstituição(Number(newValue))}
          />
          <AbilityField
            abilityName={"INT"}
            value={inteligência}
            onChange={(newValue) => setInteligência(Number(newValue))}
          />
          <AbilityField
            abilityName={"WIS"}
            value={sabedoria}
            onChange={(newValue) => setSabedoria(Number(newValue))}
          />
          <AbilityField
            abilityName={"CHA"}
            value={carisma}
            onChange={(newValue) => setCarisma(Number(newValue))}
          />
        </div>
        <div style={{padding:'0px 5px 0px 5px'}}>
          <p></p>
          <p>Initiative</p>
          <p>HP</p>
          <p>AC</p> 
          <p>Proficiency Bonus</p>
        </div>
        <Proficiencies/>
      </div>
    </div>
  );
};

export default CharacterSheet;