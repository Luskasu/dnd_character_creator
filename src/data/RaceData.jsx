import dragonborn from '../assets/dragonborn.svg';
import dwarf from '../assets/dwarf.svg';
import elf from '../assets/elf.svg';
import gnome from '../assets/gnome.svg';
import halfElf from '../assets/halfelf.svg';
import halfling from '../assets/halfling.svg';
import halfOrc from '../assets/halforc.svg';
import human from '../assets/human.svg';
import tiefling from '../assets/tiefling.svg';

export const RACES = {
    "Elf" : { 
      name: "Elf" , 
      description: "Your elf character has a variety of natural abilities, the result of thousands of years of elven refinement",
      scores: [0, 2, 0, 0, 0, 0],
      age: "An elf typically claims adulthood and an adult name around the age of 100 and can live to be 750 years old.",
      size: "medium",
      speed: 30,
      tool: [],
      weapons:[],
      armour: [],
      skills: ["Perception"],
      features: ["Darkvision", "Keen Senses", "Fey Ancestry"],
      languages: ["Common", "Elvish"],
      subraces: {
        "High Elf":{
          score: [0,0,0,1,0,0],
          speed: null,
          languages: ["Choice one"],
          tool: [],
          weapons:  ["longsword", "shortsword", "shortbow ", "longbow"],
          armour: [],
          skills: [],
          features: ["Elf Weapon Training", "Cantrip", "Extra Language"]

        },
        "Wood Elf": {
          score: [0, 0, 0, 0, 1, 0],
          speed: 35,
          languages: ["Choice one"],
          tool: [],
          weapons: ["longsword", "shortsword", "shortbow ", "longbow"],
          armour: [],
          skills: [],
          features: ["Elf Weapon Training", "Fleet of Foot", "Mask of the Wild"]
        },
        "Drow": {
          score: [0, 0, 0, 0, 1, 0],
          speed: 35,
          tool: [],
          weapons: ["rapier", "shortsword", "hand crossbow"],
          armour: [],
          skills: [],
          languages: [],
          features: ["Superior Darkvision", "Sunlight Sensitivity", "Drow Magic", "Drow Weapon Training"]
          
        }

      }
    },
    "Tiefling" : { 
      name: "Tiefling", 
      description: "Tieflings share certain racial traits as a result of their infernal descent"
    },
    "Human" : { 
      name: "Human" , 
      description: "It’s hard to make generalizations about humans, but your human character has these traits."
    },
    "Dwarf" : { 
      name: "Dwarf", 
      description: "Your dwarf character has an assortment of inborn abilities, part and parcel of dwarven nature." 
    },
    "Half Elf" : { 
      name: "Half Elf", 
      description: "Your half-elf character has some qualities in common with elves and some that are unique to half-elves." },
    "Halfling" : { 
      name: "Halfling", 
      description: "Your halfling character has a number of traits in common with all other halflings."
    },
    "Gnome" : { 
      name: "Gnome", 
      description: "Your gnome character has certain characteristics in common with all other gnomes."
    },
    "Dragonborn" : { 
      name: "Dragonborn", 
      description: "Your draconic heritage manifests in a variety of traits you share with other dragonborn."
    },
    "Half Orc" : { 
      name: "Half Orc", 
      description: "Your half-orc character has certain traits deriving from your orc ancestry."
    }
};

export const raceImages = {
    elf, tiefling, human, dwarf, 'half elf': halfElf, halfling, gnome, dragonborn, 'half orc': halfOrc
}
