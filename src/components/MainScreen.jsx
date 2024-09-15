import { useState } from 'react';
import { RaceCard } from './RaceCards';
import { RACES, raceImages } from '../data/RaceData';
import { CLASSES, classIcons } from '../data/ClassData';
import { BACKGROUNDS, backgroundsImages } from '../data/BackgroundData';
import { useChar } from '../contexts/CharContext';
import { MenuButton, SideButton } from "./Buttons";



const MainScreen = () => {
  const [activeMenu, setActiveMenu] = useState('Race');
    
  const { selectedRace,
    setSelectedRace,
    selectedClass,
    setSelectedClass,
    selectedBackground,
    setSelectedBackground } = useChar();

  const handleMenuClick = (name, menuType) => {
    switch (menuType) {
      case 'Race':
        setSelectedRace(name);
        break;
      case 'Class':
        setSelectedClass(name);
        break;
      case 'Background':
        setSelectedBackground(name);
        break;
      default:
        break;
    }
  };

  const RenderContent = () => {
    switch (activeMenu) {
      case 'Race':
        return (
          <div>
            <h2 style={{ textAlign: 'center' }}>Race</h2>
            <div className={"grid"}>
            {Object.entries(RACES).map(([race, info]) => (
                <MenuButton
                  key = {info.name}
                  image={raceImages[info.name.toLowerCase()]}
                  name={info.name}
                  menuType={'Race'}
                  onClick={() => handleMenuClick(info.name, 'Race')}
                />
              ))}
            </div>

            <div className={"race-content"}>
              {<RaceCard raceName={selectedRace}/>}
            </div>
          </div>
        )
      case 'Class':
        return (
          <div>
            <h2 style={{ textAlign: 'center' }}>Class</h2>
            <div className={"grid"}>
              {Object.entries(CLASSES).map(([classe, info]) => (
                <MenuButton
                  key = {info.name}
                  image={classIcons[info.name.toLowerCase()]}
                  name={info.name}
                  menuType={'Class'}
                  onClick={() => handleMenuClick(info.name, 'Class')}
                />
              ))}
            </div>
          </div>
        );
      case 'Background':
        return (
          <div>
            <h2 style={{ textAlign: 'center' }}>Background</h2>
            <div className={"grid"}>
              {BACKGROUNDS.map(background => (
                <MenuButton
                  key = {background.name}
                  image={backgroundsImages[background.name.toLowerCase()]}
                  name={background.name}
                  menuType={'Background'}
                  onClick={() => handleMenuClick(background.name, 'Background')}
                />
              ))}
            </div>
          </div>
        );
      default:
        return;
    }
  };

  
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 4fr' }}>
      <div className={"side-bar"}>
        <SideButton text={'Race'} state={selectedRace} onClick={() => setActiveMenu('Race')}/>
        <SideButton text={'Class'} state={selectedClass} onClick={() => setActiveMenu('Class')} />
        <SideButton text={'Background'} state={selectedBackground} onClick={() => setActiveMenu('Background')} />
      </div>
      <div className={"screen"}>
        {RenderContent()}
      </div>
    </div>
  );
};

export default MainScreen;