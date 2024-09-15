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
      description: "Tieflings share certain racial traits as a result of their infernal descent",
      scores: [0, 0, 0, 1, 0, 2],
      size: "medium",
      speed: 30,
      tool: [],
      weapons:[],
      armour: [],
      skills: [],
      features: ["Darkvision", "Hellish Resistance", "Infernal Legacy"],
      languages: ["Common", "Infernal"],
      subraces: {}
    },
    "Human" : { 
      name: "Human", 
      description: "It’s hard to make generalizations about humans, but your human character has these traits.",
      scores: [0, 0, 0, 0, 0, 0, 2],
      size: "medium",
      speed: 30,
      tool: [],
      weapons:[],
      armour: [],
      skills: ["Choice one"],
      features: ["Feat", "Skill"],
      languages: ["Common", "Choice one"],
      subraces: {},
    },
    "Dwarf" : { 
      name: "Dwarf", 
      description: "Your dwarf character has an assortment of inborn abilities, part and parcel of dwarven nature.",
      scores: [0, 0, 2, 0, 0, 0],
      size: "medium",
      speed: 25,
      tool: ["one of your choice: smith’s tools, brewer’s supplies, or mason’s tools."],
      weapons:["battleaxe"," handaxe", "throwing", "hammer", "warhammer"],
      armour: [],
      skills: [],
      features: ["Darkvision", "Dwarven Resilience", "Dwarven Combat Training", "Tool Proficiency", "Stonecunning"],
      languages: ["Common", "Dwarvish"],
      subraces: {
        "Hill Dwarf":{
          score: [0,0,0,0,1,0],
          speed: null,
          languages: [],
          tool: [],
          weapons:  [],
          armour: [],
          skills: [],
          features: ["Dwarven Toughness"]

        },
        "Montain Dwarf":{
          score: [2,0,0,0,0,0],
          speed: null,
          languages: [],
          tool: [],
          weapons:  [],
          armour: ["Light Armor", "Medium Armor"],
          skills: [],
          features: ["Dwarven Armor Training"]

        }},
    },
    "Half Elf" : { 
      name: "Half Elf", 
      description: "Your half-elf character has some qualities in common with elves and some that are unique to half-elves.",
      scores: [0, 0, 0, 0, 0, 2, 2],
      size: "medium",
      speed: 30,
      tool: [],
      weapons:[],
      armour: [],
      skills: ["Choice 2"],
      features: ["Darkvision", "Fey Ancestry"],
      languages: ["Common", "Elvish", "Choice One"],
      subraces: {}
    },

    "Halfling" : { 
      name: "Halfling", 
      description: "Your halfling character has a number of traits in common with all other halflings.",
      scores: [0, 2, 0, 0, 0, 0],
      size: "small",
      speed: 25,
      tool: [],
      weapons:[],
      armour: [],
      skills: [],
      features: ["Lucky", "Brave", "Halfling Nimbleness"],
      languages: ["Common", "Halfling"],
      subraces: {
        "lightfoot":{
          score: [0,0,0,0,0,1],
          speed: null,
          languages: [],
          tool: [],
          weapons:  [],
          armour: [],
          skills: [],
          features: ["Naturally Stealthy"]

        },
        "stout":{
          score: [0,0,1,0,0,0],
          speed: null,
          languages: [],
          tool: [],
          weapons:  [],
          armour: [],
          skills: [],
          features: ["Stout Resilience"]

        }
      },
    },
    "Gnome" : { 
      name: "Gnome", 
      description: "Your gnome character has certain characteristics in common with all other gnomes.",
      scores: [0, 0, 0, 2, 0, 0],
      size: "small",
      speed: 25,
      tool: [],
      weapons:[],
      armour: [],
      skills: [],
      features: ["Darkvision", "Gnome Cunning"],
      languages: ["Common", "Gnomish"],
      subraces: {
        "Forest Gnome":{
          score: [0,1,0,0,0,0],
          speed: null,
          languages: [],
          tool: [],
          weapons: [],
          armour: [],
          skills: [],
          features: ["Natural Illusionist", "Speak with Small Beasts"]
        },
        "Rock Gnomes":{
          score: [0,0,1,0,0,0],
          speed: null,
          languages: [],
          tool: ["Tinker’s Tools"],
          weapons: [],
          armour: [],
          skills: [],
          features: ["Artificer’s Lore", "Tinker"]
        }},
    },
    "Dragonborn" : { 
      name: "Dragonborn", 
      description: "Your draconic heritage manifests in a variety of traits you share with other dragonborn.",
      scores: [2, 0, 0, 0, 0, 1],
      size: "medium",
      speed: 30,
      tool: [],
      weapons:[],
      armour: [],
      skills: [],
      features: ["Draconic Ancestry", "Breath Weapon", "Damage Resistance"],
      languages: ["Common", "Draconic"],
      subraces: {},
    },
    "Half Orc" : { 
      name: "Half Orc", 
      description: "Your half-orc character has certain traits deriving from your orc ancestry.",
      scores: [2, 0, 1, 0, 0, 0],
      size: "medium",
      speed: 30,
      tool: [],
      weapons:[],
      armour: [],
      skills: ["Intimidation"],
      features: ["Darkvision", "Menacing", "Relentless Endurance", "Savage Attacks"],
      languages: ["Common", "Orc"],
      subraces: {}
    }
};

export const raceImages = {
    elf, tiefling, human, dwarf, 'half elf': halfElf, halfling, gnome, dragonborn, 'half orc': halfOrc
}
