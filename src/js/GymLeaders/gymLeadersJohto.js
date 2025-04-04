// Lideres
import imgPegaso from '../../assets/johto/lideresGym/VS_Pegaso_Masters.png'
import imgAnton from '../../assets/johto/lideresGym/VS_Anton_Masters.png'
import imgBlanca from '../../assets/johto/lideresGym/VS_Blanca_Masters.png'
import imgMorti from '../../assets/johto/lideresGym/VS_Morti_Masters.png'
import imgAnibal from '../../assets/johto/lideresGym/VS_Anibal_Masters.png'
import imgYasmina from '../../assets/johto/lideresGym/VS_Yasmina_Masters.png'
import imgFredo from '../../assets/johto/lideresGym/VS_Fredo_Masters.png'
import imgDebora from '../../assets/johto/lideresGym/VS_Debora_Masters.png'

// Medallas
import medallaPegaso from '../../assets/johto/medallasGym/Medalla_Cefiro.png'
import medallaAnton from '../../assets/johto/medallasGym/Medalla_Colmena.png'
import medallaBlanca from '../../assets/johto/medallasGym/Medalla_Planicie.png'
import medallaMorti from '../../assets/johto/medallasGym/Medalla_Niebla.png'
import medallaAnibal from '../../assets/johto/medallasGym/Medalla_Tormenta.png'
import medallaYasmina from '../../assets/johto/medallasGym/Medalla_Mineral.png'
import medallaFredo from '../../assets/johto/medallasGym/Medalla_Glaciar.png'
import medallaDebora from '../../assets/johto/medallasGym/Medalla_Dragon.png'

// Pegaso poke
import Pidgey from '../../assets/pokemons/pokemonVolador/300px-Pidgey.png'
import Pidgeotto from '../../assets/pokemons/pokemonVolador/300px-Pidgeotto.png'

// Anton poke
import Metapod from '../../assets/pokemons/pokemonBicho/300px-Metapod.png'
import Kakuna from '../../assets/pokemons/pokemonBicho/300px-Kakuna.png'
import Scyther from '../../assets/pokemons/pokemonBicho/300px-Scyther.png'

// Blanca poke
import Clefairy from '../../assets/pokemons/pokemonHada/300px-Clefairy.png'
import Miltank from '../../assets/pokemons/pokemonNormal/300px-Miltank.png'

// Morti Poke
import Gastly from '../../assets/pokemons/pokemonFantasma/300px-Gastly.png'
import Haunter from '../../assets/pokemons/pokemonFantasma/300px-Haunter.png'
import Gengar from '../../assets/pokemons/pokemonFantasma/300px-Gengar.png'

// Anibal poke
import Primeape from '../../assets/pokemons/pokemonLucha/300px-Primeape.png'
import Poliwrath from '../../assets/pokemons/pokemonAgua/300px-Poliwrath.png'

// Yasmina poke
import Magnemite from '../../assets/pokemons/pokemonElectrico/300px-Magnemite.png'
import Steelix from '../../assets/pokemons/pokemonAcero/300px-Steelix.png'

// Fredo poke
import Seel from '../../assets/pokemons/pokemonAgua/300px-Seel.png'
import Dewgong from '../../assets/pokemons/pokemonAgua/300px-Dewgong.png'
import Piloswine from '../../assets/pokemons/pokemonHielo/300px-Piloswine.png'

// Debora poke
import Dragonair from '../../assets/pokemons/pokemonDragon/300px-Dragonair.png'
import Kingdra from '../../assets/pokemons/pokemonAgua/300px-Kingdra.png'


const cityLeadersJohto = [
  {
    name: "Pegaso",
    image: imgPegaso,
    city: "Ciudad Malva",
    type: "Volador",
    badge: "Medalla Céfiro",
    imgBadge: medallaPegaso,
    team: [
      { namePokemon: "Pidgey", level: 7, imgPokemon: Pidgey },
      { namePokemon: "Pidgeotto", level: 9, imgPokemon: Pidgeotto }
    ],
    rewards: {
      tm: "MT31 - Doble Filo",
      money: 900
    }
  },
  {
    name: "Antón",
    image: imgAnton,
    city: "Ciudad Azalea",
    type: "Bicho",
    badge: "Medalla Colmena",
    imgBadge: medallaAnton,
    team: [
      { namePokemon: "Metapod", level: 14, imgPokemon: Metapod },
      { namePokemon: "Kakuna", level: 14, imgPokemon: Kakuna },
      { namePokemon: "Scyther", level: 16, imgPokemon: Scyther }
    ],
    rewards: {
      tm: "MT49 - Doble Golpe",
      money: 1600
    }
  },
  {
    name: "Blanca",
    image: imgBlanca,
    city: "Ciudad Trigal",
    type: "Normal",
    badge: "Medalla Planicie",
    imgBadge: medallaBlanca,
    team: [
      { namePokemon: "Clefairy", level: 18, imgPokemon: Clefairy },
      { namePokemon: "Miltank", level: 20, imgPokemon: Miltank }
    ],
    rewards: {
      tm: "MT45 - Atracción",
      money: 2000
    }
  },
  {
    name: "Morti",
    image: imgMorti,
    city: "Ciudad Iris",
    type: "Fantasma",
    badge: "Medalla Niebla",
    imgBadge: medallaMorti,
    team: [
      { namePokemon: "Gastly", level: 21, imgPokemon: Gastly },
      { namePokemon: "Haunter", level: 21, imgPokemon: Haunter },
      { namePokemon: "Haunter", level: 23, imgPokemon: Haunter },
      { namePokemon: "Gengar", level: 25, imgPokemon: Gengar }
    ],
    rewards: {
      tm: "MT30 - Bola Sombra",
      money: 2300
    }
  },
  {
    name: "Aníbal",
    image: imgAnibal,
    city: "Ciudad Orquídea",
    type: "Lucha",
    badge: "Medalla Tormenta",
    imgBadge: medallaAnibal,
    team: [
      { namePokemon: "Primeape", level: 29, imgPokemon: Primeape },
      { namePokemon: "Poliwrath", level: 31, imgPokemon: Poliwrath }
    ],
    rewards: {
      tm: "MT01 - Golpe Karate",
      money: 2500
    }
  },
  {
    name: "Yasmina",
    image: imgYasmina,
    city: "Ciudad Olivo",
    type: "Acero",
    badge: "Medalla Mineral",
    imgBadge: medallaYasmina,
    team: [
      { namePokemon: "Magnemite", level: 30, imgPokemon: Magnemite },
      { namePokemon: "Magnemite", level: 30, imgPokemon: Magnemite },
      { namePokemon: "Steelix", level: 35, imgPokemon: Steelix }
    ],
    rewards: {
      tm: "MT23 - Cola Férrea",
      money: 2400
    }
  },
  {
    name: "Fredo",
    image: imgFredo,
    city: "Ciudad Caoba",
    type: "Hielo",
    badge: "Medalla Glaciar",
    imgBadge: medallaFredo,
    team: [
      { namePokemon: "Seel", level: 30, imgPokemon: Seel },
      { namePokemon: "Dewgong", level: 32, imgPokemon: Dewgong },
      { namePokemon: "Piloswine", level: 34, imgPokemon: Piloswine }
    ],
    rewards: {
      tm: "MT16 - Rayo Hielo",
      money: 2600
    }
  },
  {
    name: "Débora",
    image: imgDebora,
    city: "Ciudad Endrino",
    type: "Dragón",
    badge: "Medalla Dragón",
    imgBadge: medallaDebora,
    team: [
      { namePokemon: "Dragonair", level: 37, imgPokemon: Dragonair },
      { namePokemon: "Dragonair", level: 37, imgPokemon: Dragonair },
      { namePokemon: "Dragonair", level: 37, imgPokemon: Dragonair },
      { namePokemon: "Kingdra", level: 40, imgPokemon: Kingdra }
    ],
    rewards: {
      tm: "MT24 - Cola Dragón",
      money: 2700
    }
  }
];
  
export default cityLeadersJohto;
  