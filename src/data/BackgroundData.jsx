import acolyte from '../assets/backgrounds_icon/Acolyte_Icon.svg'
import charlatan from '../assets/backgrounds_icon/Charlatan_Icon.svg'
import criminal from '../assets/backgrounds_icon/Criminal_Icon-Kittl.svg'
import entertainer from '../assets/backgrounds_icon/Entertainer_Icon-Kittl.svg'
import folkHero from '../assets/backgrounds_icon/Folk_Hero_Icon-Kittl.svg'
import guildArtisan from '../assets/backgrounds_icon/Guild_Artisan_Icon-Kittl.svg'
import hermit from '../assets/backgrounds_icon/Hermit_Icon-Kittl.svg'
import noble from '../assets/backgrounds_icon/Noble_Icon-Kittl.svg'
import outlander from '../assets/backgrounds_icon/Outlander_Icon-Kittl.svg'
import sage from '../assets/backgrounds_icon/Sage_Icon-Kittl.svg'
import sailor from '../assets/backgrounds_icon/Sailor_Icon-Kittl.svg'
import soldier from '../assets/backgrounds_icon/Soldier_Icon-Kittl.svg'
import urchin from '../assets/backgrounds_icon/Urchin_Icon-Kittl.svg'

export const BACKGROUNDS = [
    {name: "Acolyte", description: 'You have spent your life in the service of a temple to a specific god or pantheon of gods',
        tool:[], 
        weapons:[],
        armour: [],
        skills:["Insight", "Religion"],
        languages: ["Choice two"],
        features:["Shelter of the Faithful"],
        gold: 15,
        equipment: [
            [1, "Holy symbol (a gift received upon entering the priesthood)"],
            [1, "Prayer book or prayer wheel"], 
            [5, "sticks of incense"], 
            [1, "Vestments"], 
            [1, "Set of common clothes"]
        ]
    },

    {name: "Charlatan", description: 'You have always had a way with people.', 
        tool:["Disguise Kit", "Forgery Kit"], 
        weapons:[], 
        armour: [],
        skills:["Deception", "Sleight of Hand"],
        languages:[],
        features:[": False Identity"],
        gold: 15,
        equipment: [
            [1, "set o f fine clothes"],
            [1, "disguise kit"],
            [1, "(ten stoppered bottles filled with c olored liquid, a set o f w eighted dice, a d eck o f m arked cards, or a signet ring o f an im aginary duke"]
        ]
    },
    {name: "Criminal", description: 'hahaha sifnasda', 
        tool:[], 
        weapons:[], 
        armour: [], 
        skills:[], 
        languages: ["Choice two"],
        features:["Shelter of the Faithful"],
        gold: 15,
        equipment: []
    },
    {name: "Entertainer", description: 'hahaha sifnasda', 
        tool:[], 
        weapons:[], 
        armour: [], 
        skills:[], 
        features:[]
    },
    {name: "Folk Hero", description: 'hahaha sifnasda', 
        tool:[], 
        weapons:[], 
        armour: [], 
        skills:[], 
        features:[]
    },
    {name: "Guild Artisan", description: 'hahaha sifnasda', 
        tool:[], 
        weapons:[], 
        armour: [], 
        skills:[], 
        features:[]
    },
    {name: "Hermit", description: 'hahaha sifnasda', 
        tool:[], 
        weapons:[], 
        armour: [], 
        skills:[], 
        languages: ["Choice two"],
        features:["Shelter of the Faithful"],
        gold: 15,
        equipment: []
    },
    {name: "Noble", description: 'hahaha sifnasda', 
        tool:[], 
        weapons:[], 
        armour: [], 
        skills:[], 
        languages: ["Choice two"],
        features:["Shelter of the Faithful"],
        gold: 15,
        equipment: []
    },
    {name: "Outlander", description: 'hahaha sifnasda', 
        tool:[],
        weapons:[],
        armour: [],
        skills:[],
        languages: ["Choice two"],
        features:["Shelter of the Faithful"],
        gold: 15,
        equipment: []
    },
    {name: "Sage", description: 'hahaha sifnasda', 
        tool:[], 
        weapons:[], 
        armour: [], 
        skills:[], 
        languages: ["Choice two"],
        features:["Shelter of the Faithful"],
        gold: 15,
        equipment: []},
    {name: "Sailor", description: 'hahaha sifnasda', 
        tool:[], 
        weapons:[], 
        armour: [], 
        skills:[], 
        languages: ["Choice two"],
        features:["Shelter of the Faithful"],
        gold: 15,
        equipment: []
    },
    {name: "Soldier", description: 'hahaha sifnasda', 
        tool:[], 
        weapons:[], 
        armour: [], 
        skills:[], 
        languages: ["Choice two"],
        features:["Shelter of the Faithful"],
        gold: 15,
        equipment: []
    },
    {name: "Urchin", description: 'hahaha sifnasda', 
        tool:[], 
        weapons:[], 
        armour: [], 
        skills:[], 
        languages: ["Choice two"],
        features:["Shelter of the Faithful"],
        gold: 15,
        equipment: []
    }
]

export const backgroundsImages = {acolyte, charlatan, criminal, entertainer, 'folk hero': folkHero, 'guild artisan':guildArtisan, hermit, noble, outlander, sage, sailor, soldier, urchin}