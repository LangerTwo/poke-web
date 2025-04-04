// Lideres
import imgPetra from '../../assets/hoenn/lideresGym/VS_Petra_Masters.png'
import imgMarcial from '../../assets/hoenn/lideresGym/VS_Marcial_Masters.png'
import imgErico from '../../assets/hoenn/lideresGym/Erico_ROZA_retrato.png'
import imgCandela from '../../assets/hoenn/lideresGym/VS_Candela_Masters.png'
import imgNorman from '../../assets/hoenn/lideresGym/VS_Norman_Masters.png'
import imgAlana from '../../assets/hoenn/lideresGym/VS_Alana_Masters.png'
import imgVitoYLeti from '../../assets/hoenn/lideresGym/VS_Vito_y_Leti_ROZA.webp'
import imgGalano from '../../assets/hoenn/lideresGym/165px-Galano_E_retrato.png'

// Medallas
import medallaPetra from '../../assets/hoenn/medallasGym/Medalla_Piedra_Petra.png'
import medallaMarcial from '../../assets/hoenn/medallasGym/Medalla_Puño_Marcial.png'
import medallaErico from '../../assets/hoenn/medallasGym/Medalla_Dinamo_Erico.png'
import medallaCandela from '../../assets/hoenn/medallasGym/Medalla_Calor_Candela.png'
import medallaNorman from '../../assets/hoenn/medallasGym/Medalla_Equilibrio_Norman.png'
import medallaAlana from '../../assets/hoenn/medallasGym/Medalla_Pluma_Alana.png'
import medallaVitoYLete from '../../assets/hoenn/medallasGym/Medalla_Mente_Vito_Leti.png'
import medallaPlubio from '../../assets/hoenn/medallasGym/Medalla_Lluvia_Plubio.png'

// Petra poke
import Geodude from '../../assets/pokemons/pokemonRoca/300px-Geodude.png'
import Nosepass from '../../assets/pokemons/pokemonRoca/300px-Nosepass.png'

// Marcial poke
import Meditite from '../../assets/pokemons/pokemonLucha/300px-Meditite.png'
import Machop from '../../assets/pokemons/pokemonLucha/300px-Machop.png'
import Makuhita from '../../assets/pokemons/pokemonLucha/300px-Makuhita.png' 

// Erico poke
import Voltorb from '../../assets/pokemons/pokemonElectrico/300px-Voltorb.png' 
import Electrike from '../../assets/pokemons/pokemonElectrico/300px-Electrike.png' 
import Magneton from '../../assets/pokemons/pokemonElectrico/300px-Magneton.png' 
import Manectric from '../../assets/pokemons/pokemonElectrico/300px-Manectric.png' 

// Candel poke
import Numel from '../../assets/pokemons/pokemonFuego/300px-Numel.png' 
import Slugma from '../../assets/pokemons/pokemonFuego/300px-Slugma.png' 
import Camerupt from '../../assets/pokemons/pokemonFuego/300px-Camerupt.png' 
import Torkoal from '../../assets/pokemons/pokemonFuego/300px-Torkoal.png' 

// Norman poke
import Spinda from '../../assets/pokemons/pokemonNormal/300px-Spinda.png' 
import Vigoroth from '../../assets/pokemons/pokemonNormal/300px-Vigoroth.png' 
import Linoone from '../../assets/pokemons/pokemonNormal/300px-Linoone.png' 
import Slaking from '../../assets/pokemons/pokemonNormal/300px-Slaking.png' 

// Alana poke
import Swablu from '../../assets/pokemons/pokemonNormal/300px-Swablu.png' 
import Tropius from '../../assets/pokemons/pokemonPlanta/300px-Tropius.png' 
import Pelipper from '../../assets/pokemons/pokemonAgua/300px-Pelipper.png' 
import Skarmory from '../../assets/pokemons/pokemonAcero/300px-Skarmory.png' 
import Altaria from '../../assets/pokemons/pokemonDragon/300px-Altaria.png' 

// VitoYLeti poke
import Claydol from '../../assets/pokemons/pokemonTierra/300px-Claydol.png' 
import Xatu from '../../assets/pokemons/pokemonPsiquico/300px-Xatu.png' 
import Lunatone from '../../assets/pokemons/pokemonRoca/300px-Lunatone.png' 
import Solrock from '../../assets/pokemons/pokemonRoca/300px-Solrock.png' 

// Plubio poke
import Luvdisc from '../../assets/pokemons/pokemonAgua/300px-Luvdisc.png' 
import Whiscash from '../../assets/pokemons/pokemonAgua/300px-Whiscash.png' 
import Sealeo from '../../assets/pokemons/pokemonAgua/300px-Sealeo.png' 
import Crawdaunt from '../../assets/pokemons/pokemonAgua/300px-Crawdaunt.png' 
import Kingdra from '../../assets/pokemons/pokemonAgua/300px-Kingdra.png' 



const hoenncityLeaders = [
  {
    name: "Petra",
    image: imgPetra,
    city: "Ciudad Férrica",
    type: "Roca",
    badge: "Medalla Piedra",
    imgBadge: medallaPetra,
    team: [
      { namePokemon: "Geodude", level: 12, imgPokemon: Geodude },
      { namePokemon: "Geodude", level: 12, imgPokemon: Geodude },
      { namePokemon: "Nosepass", level: 15, imgPokemon: Nosepass }
    ],
    rewards: {
      tm: "MT39 - Tumba Rocas",
      money: 1500
    }
  },
  {
    name: "Marcial",
    image: imgMarcial,
    city: "Ciudad Dewford",
    type: "Lucha",
    badge: "Medalla Puño",
    imgBadge: medallaMarcial,
    team: [
      { namePokemon: "Meditite", level: 14, imgPokemon: Meditite },
      { namePokemon: "Machop", level: 14, imgPokemon: Machop },
      { namePokemon: "Makuhita", level: 16, imgPokemon: Makuhita }
    ],
    rewards: {
      tm: "MT08 - Corpulencia",
      money: 1900
    }
  },
  {
    name: "Erico",
    image: imgErico,
    city: "Ciudad Malvalona",
    type: "Eléctrico",
    badge: "Medalla Dinamo",
    imgBadge: medallaErico,
    team: [
      { namePokemon: "Voltorb", level: 20, imgPokemon: Voltorb },
      { namePokemon: "Electrike", level: 20, imgPokemon: Electrike },
      { namePokemon: "Magneton", level: 22, imgPokemon: Magneton },
      { namePokemon: "Manectric", level: 24, imgPokemon: Manectric }
    ],
    rewards: {
      tm: "MT34 - Onda Voltio",
      money: 2400
    }
  },
  {
    name: "Candela",
    image: imgCandela,
    city: "Ciudad Lavacalda",
    type: "Fuego",
    badge: "Medalla Calor",
    imgBadge: medallaCandela,
    team: [
      { namePokemon: "Numel", level: 24, imgPokemon: Numel },
      { namePokemon: "Slugma", level: 24, imgPokemon: Slugma },
      { namePokemon: "Camerupt", level: 26, imgPokemon: Camerupt },
      { namePokemon: "Torkoal", level: 29, imgPokemon: Torkoal }
    ],
    rewards: {
      tm: "MT50 - Sofoco",
      money: 2800
    }
  },
  {
    name: "Norman",
    image: imgNorman,
    city: "Ciudad Petalia",
    type: "Normal",
    badge: "Medalla Equilibrio",
    imgBadge: medallaNorman,
    team: [
      { namePokemon: "Spinda", level: 27, imgPokemon: Spinda },
      { namePokemon: "Vigoroth", level: 27, imgPokemon: Vigoroth },
      { namePokemon: "Linoone", level: 29, imgPokemon: Linoone },
      { namePokemon: "Slaking", level: 31, imgPokemon: Slaking }
    ],
    rewards: {
      tm: "MT42 - Imagen",
      money: 3100
    }
  },
  {
    name: "Alana",
    image: imgAlana,
    city: "Ciudad Arborada",
    type: "Volador",
    badge: "Medalla Pluma",
    imgBadge: medallaAlana,
    team: [
      { namePokemon: "Swablu", level: 29, imgPokemon: Swablu },
      { namePokemon: "Tropius", level: 29, imgPokemon: Tropius },
      { namePokemon: "Pelipper", level: 30, imgPokemon: Pelipper },
      { namePokemon: "Skarmory", level: 31, imgPokemon: Skarmory },
      { namePokemon: "Altaria", level: 33, imgPokemon: Altaria }
    ], 
    rewards: {
      tm: "MT40 - Golpe Aéreo",
      money: 3300
    }
  },
  {
    name: "Vito y Leti",
    image: imgVitoYLeti,
    city: "Ciudad Algaria",
    type: "Psíquico",
    badge: "Medalla Mente",
    imgBadge: medallaVitoYLete,
    team: [
      { namePokemon: "Claydol", level: 41, imgPokemon: Claydol },
      { namePokemon: "Xatu", level: 41, imgPokemon: Xatu },
      { namePokemon: "Lunatone", level: 42, imgPokemon: Lunatone },
      { namePokemon: "Solrock", level: 42, imgPokemon: Solrock }
    ],
    rewards: {
      tm: "MT04 - Paz Mental",
      money: 4200
    }
  },
  {
    name: "Galano",
    image: imgGalano,
    city: "Arrecípolis",
    type: "Agua",
    badge: "Medalla Lluvia",
    imgBadge: medallaPlubio,
    team: [
      { namePokemon: "Luvdisc", level: 41, imgPokemon: Luvdisc },
      { namePokemon: "Whiscash", level: 41, imgPokemon: Whiscash },
      { namePokemon: "Sealeo", level: 43, imgPokemon: Sealeo },
      { namePokemon: "Crawdaunt", level: 43, imgPokemon: Crawdaunt },
      { namePokemon: "Kingdra", level: 46, imgPokemon: Kingdra }
    ],
    rewards: {
      tm: "MT03 - Hidropulso",
      money: 4900
    }
  }
];
  
export default hoenncityLeaders;
  