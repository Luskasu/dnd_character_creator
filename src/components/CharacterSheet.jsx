import  { useState, useEffect } from 'react';
import AbilityField from './AbilityField';
import { useChar } from '../contexts/CharContext';
import { CLASSES } from '../data/ClassData';
import {RACES} from '../data/RaceData';

const CharacterSheet = () => {
  const { selectedRace, selectedClass, level, setLevel} = useChar();

  const [força, setForça] = useState(8);
  const [destreza, setDestreza] = useState(8);
  const [constituição, setConstituição] = useState(8);
  const [inteligência, setInteligência] = useState(8);
  const [sabedoria, setSabedoria] = useState(8);
  const [carisma, setCarisma] = useState(8);


  const [weapons, setWeapons] = useState([]);
  const [customWeapons, setCustomWeapons] = useState([]);
  const [customSavings, setCustomSavings] = useState([]);
  const [customSkills, setCustomSkills] = useState([])


  const [armours, setArmours] = useState([]);
  const [savings, setSavings] = useState([]);

  //const [skills, setSkills] = useState([]);
  
  const ViewProficiencies = (arg) => {
    if(arg.length > 0){
      return arg.join(", ");
    }
    return "None";
  }

  useEffect(() => {
    const finalWeapons = [
      ...new Set([
        ...CLASSES?.[selectedClass]?.weapons ?? [],
        ...RACES?.[selectedRace]?.weapons ?? [],
        ...customWeapons
      ])];
    const finalArmours = [
      ...new Set([
        ...CLASSES?.[selectedClass]?.armour ?? [],
        ...RACES?.[selectedRace]?.armours ?? []
      ])];
    setWeapons(finalWeapons);
    setArmours(finalArmours);
  }, [selectedClass, selectedRace, customWeapons]);

  useEffect(() => {
    const finalSavings = [...new Set([
      ...CLASSES?.[selectedClass]?.savings ?? [],
      ...customSavings ?? []
    ])];
    setSavings(finalSavings);
  }, [selectedClass, customSavings]);
  

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