// Lideres
import imgMilo from '../../assets/galar/lideresGym/165px-VS_Percy_Masters.png'
import imgNessa from '../../assets/galar/lideresGym/165px-VS_Cathy_Masters.png'
import imgKabu from '../../assets/galar/lideresGym/165px-VS_Naboru_Masters.png'
import imgJudith from '../../assets/galar/lideresGym/165px-VS_Judith_Masters.png'
import imgAlistair from '../../assets/galar/lideresGym/165px-VS_Alistair_Masters.png'
import imgSally from '../../assets/galar/lideresGym/165px-Cara_de_Sally_EpEc.png'
import imgMorris from '../../assets/galar/lideresGym/165px-VS_Morris_Masters.png'
import imgNevan from '../../assets/galar/lideresGym/165px-VS_Mel_Masters.png'
import imgPiers from '../../assets/galar/lideresGym/165px-VS_Nerio_Masters.png'
import imgRoy from '../../assets/galar/lideresGym/165px-VS_Roy_Masters.png'

// Medallas
import medallaMilo from '../../assets/galar/medallasGym/150px-Medalla_Planta_Percy.png'
import medallaNessa from '../../assets/galar/medallasGym/150px-Medalla_Agua_Cathy.png'
import medallaKabu from '../../assets/galar/medallasGym/150px-Medalla_Fuego_Naboru.png'
import medallaJudith from '../../assets/galar/medallasGym/150px-Medalla_Lucha_Judith.png'
import medallaAlistair from '../../assets/galar/medallasGym/150px-Medalla_Fantasma_Alistar.png'
import medallaSally from '../../assets/galar/medallasGym/150px-Medalla_Hada_Sally.png'
import medallaMorris from '../../assets/galar/medallasGym/150px-Medalla_Roca_Morris.png'
import medallaNevan from '../../assets/galar/medallasGym/150px-Medalla_Hielo_Mel.png'
import medallaPiers from '../../assets/galar/medallasGym/150px-Medalla_Siniestro_Nerio.png'
import medallaRoy from '../../assets/galar/medallasGym/150px-Medalla_Dragon_Roy.png'

// Milo Pokemon
import Gossifleur from '../../assets/pokemons/pokemonPlanta/300px-Gossifleur.png'
import Eldegoss from '../../assets/pokemons/pokemonPlanta/300px-Eldegoss.png'

// Nessa Pokemon
import Goldeen from '../../assets/pokemons/pokemonAgua/300px-Goldeen.png'
import Arrokuda from '../../assets/pokemons/pokemonAgua/300px-Arrokuda.png'
import Drednaw from '../../assets/pokemons/pokemonAgua/300px-Drednaw.png'

// Kabu Pokemon
import Ninetales from '../../assets/pokemons/pokemonFuego/300px-Ninetales.png'
import Arcanine from '../../assets/pokemons/pokemonFuego/300px-Arcanine.png'
import Centiskorch from '../../assets/pokemons/pokemonFuego/300px-Centiskorch.png'

// Judith Pokemon
import Hitmontop from '../../assets/pokemons/pokemonLucha/300px-Hitmontop.png'
import Pangoro from '../../assets/pokemons/pokemonLucha/300px-Pangoro.png'
import Sirfetchd from '../../assets/pokemons/pokemonLucha/300px-Sirfetchd.png'
import Machamp from '../../assets/pokemons/pokemonLucha/Machamp.png'

// Alistair Pokemon
import Yamask from '../../assets/pokemons/pokemonTierra/300px-Yamask_de_Galar.png'
import Mimikyu from '../../assets/pokemons/pokemonFantasma/300px-Mimikyu.png'
import Gengar from '../../assets/pokemons/pokemonFantasma/300px-Gengar.png'
import Cursola from '../../assets/pokemons/pokemonFantasma/300px-Cursola.png'

// Sally Pokemon
import WeezingGalar from '../../assets/pokemons/pokemonVeneno/300px-Weezing_de_Galar.png'
import Mawile from '../../assets/pokemons/pokemonAcero/300px-Mawile.png'
import Togekiss from '../../assets/pokemons/pokemonHada/300px-Togekiss.png'
import Alcremie from '../../assets/pokemons/pokemonHada/300px-Alcremie.png'

// Morris Pokemon
import Barbaracle from '../../assets/pokemons/pokemonRoca/300px-Barbaracle.png'
import Shuckle from '../../assets/pokemons/pokemonBicho/300px-Shuckle.png'
import Stonjourner from '../../assets/pokemons/pokemonRoca/300px-Stonjourner.png'
import Coalossal from '../../assets/pokemons/pokemonRoca/300px-Coalossal.png'

// Nevan Pokemon
import Frosmoth from '../../assets/pokemons/pokemonHielo/300px-Frosmoth.png'
import DarmanitanGalar from '../../assets/pokemons/pokemonHielo/300px-Darmanitan_de_Galar.png'
import Eiscue from '../../assets/pokemons/pokemonHielo/300px-Eiscue.png'
import Lapras from '../../assets/pokemons/pokemonAgua/300px-Lapras.png'

// Piers Pokemon
import Scrafty from '../../assets/pokemons/pokemonSiniestro/300px-Scrafty.png'
import Malamar from '../../assets/pokemons/pokemonSiniestro/300px-Malamar.png'
import Skuntank from '../../assets/pokemons/pokemonVeneno/300px-Skuntank.png'
import Obstagoon from '../../assets/pokemons/pokemonSiniestro/300px-Obstagoon.png'

// Roy Pokemon
import Gigalith from '../../assets/pokemons/pokemonRoca/300px-Gigalith.png'
import Flygon from '../../assets/pokemons/pokemonTierra/300px-Flygon.png'
import Sandaconda from '../../assets/pokemons/pokemonTierra/300px-Sandaconda.png'
import Duraludon from '../../assets/pokemons/pokemonAcero/300px-Duraludon.png'

const gymLeadersGalar = [
  {
    name: "Milo",
    image: imgMilo,
    city: "Pueblo Hoyuelo",
    type: "Planta",
    badge: "Medalla Planta",
    imgBadge: medallaMilo,
    team: [
      { namePokemon: "Gossifleur", level: 19, imgPokemon: Gossifleur },
      { namePokemon: "Eldegoss", level: 20, imgPokemon: Eldegoss }
    ],
    rewards: {
      tm: "MT10 - Hoja Mágica",
      money: 3200
    }
  },
  {
      name: "Nessa",
      image: imgNessa,
      city: "Pueblo Amura",
      type: "Agua",
      badge: "Medalla Agua",
      imgBadge: medallaNessa,
      team: [
        { namePokemon: "Goldeen", level: 22, imgPokemon: Goldeen },
        { namePokemon: "Arrokuda", level: 23, imgPokemon: Arrokuda },
        { namePokemon: "Drednaw", level: 24, imgPokemon: Drednaw }
      ],
      rewards: {
        tm: "MT36 - Torbellino",
        money: 3040
      }
  },
  {
    name: "Kabu",
    image: imgKabu,
    city: "Ciudad Pistón",
    type: "Fuego",
    badge: "Medalla Fuego",
    imgBadge: medallaKabu,
    team: [
      { namePokemon: "Ninetales", level: 25, imgPokemon: Ninetales },
      { namePokemon: "Arcanine", level: 25, imgPokemon: Arcanine },
      { namePokemon: "Centiskorch", level: 27, imgPokemon: Centiskorch }
    ],
    rewards: {
      tm: "MT38 - Fuego Fatuo",
      money: 4320
    }
  },
  {
      name: "Judith",
      image: imgJudith,
      city: "Pueblo Amura",
      type: "Lucha",
      badge: "Medalla Lucha",
      imgBadge: medallaJudith,
      team: [
        { namePokemon: "Hitmontop", level: 34, imgPokemon: Hitmontop },
        { namePokemon: "Pangoro", level: 34, imgPokemon: Pangoro },
        { namePokemon: "Sirfetch'd", level: 35, imgPokemon: Sirfetchd },
        { namePokemon: "Machamp", level: 36, imgPokemon: Machamp }
      ],
      rewards: {
        tm: "MT42 - Desquite",
        money: 5040
      }
  },
  {
      name: "Alistair",
      image: imgAlistair,
      city: "Pueblo Amura",
      type: "Fantasma",
      badge: "Medalla Fantasma",
      imgBadge: medallaAlistair,
      team: [
        { namePokemon: "Yamask", level: 34, imgPokemon: Yamask },
        { namePokemon: "Mimikyu", level: 34, imgPokemon: Mimikyu },
        { namePokemon: "Gengar", level: 35, imgPokemon: Gengar },
        { namePokemon: "Cursola", level: 36, imgPokemon: Cursola },
      ],
      rewards: {
        tm: "MT77 - Infortunio",
        money: 5040
      }
  },
  {
    name: "Sally",
    image: imgSally,
    city: "Pueblo Crampón",
    type: "Hada",
    badge: "Medalla Hada",
    imgBadge: medallaSally,
    team: [
      { namePokemon: "Weezing (Forma Galar)", level: 36, imgPokemon: WeezingGalar },
      { namePokemon: "Mawile", level: 36, imgPokemon: Mawile },
      { namePokemon: "Togekiss", level: 37, imgPokemon: Togekiss },
      { namePokemon: "Alcremie", level: 38, imgPokemon: Alcremie }
    ],
    rewards: {
      tm: "MT87 - Beso Drenaje",
      money: 5520
    }
  },
  {
    name: "Morris",
    image: imgMorris,
    city: "Ciudad Artejo",
    type: "Roca",
    badge: "Medalla Roca",
    imgBadge: medallaMorris,
    team: [
      { namePokemon: "Barbaracle", level: 40, imgPokemon: Barbaracle },
      { namePokemon: "Shuckle", level: 40, imgPokemon: Shuckle },
      { namePokemon: "Stonjourner", level: 41, imgPokemon: Stonjourner },
      { namePokemon: "Coalossal", level: 42, imgPokemon: Coalossal }
    ],
    rewards: {
      tm: "MT48 - Trampa Rocas",
      money: 6000
    }
  },
  {
    name: "Nevan",
    image: imgNevan,
    city: "Pueblo Auriga",
    type: "Hielo",
    badge: "Medalla Hielo",
    imgBadge: medallaNevan,
    team: [
      { namePokemon: "Frosmoth", level: 42, imgPokemon: Frosmoth },
      { namePokemon: "Darmanitan (Forma Galar)", level: 42, imgPokemon: DarmanitanGalar },
      { namePokemon: "Eiscue", level: 43, imgPokemon: Eiscue },
      { namePokemon: "Lapras", level: 44, imgPokemon: Lapras }
    ],
    rewards: {
      tm: "MT51 - Viento Hielo",
      money: 6480
    }
  },
  {
      name: "Piers",
      image: imgPiers,
      city: "Ciudad Puntera",
      type: "Siniestro",
      badge: "Medalla Siniestro",
      imgBadge: medallaPiers,
      team: [
          { namePokemon: "Scrafty", level: 44, imgPokemon: Scrafty },
          { namePokemon: "Malamar", level: 45, imgPokemon: Malamar },
          { namePokemon: "Skuntank", level: 45, imgPokemon: Skuntank },
          { namePokemon: "Obstagoon", level: 46, imgPokemon: Obstagoon }
      ],
      rewards: {
        tm: "MT85 - Alarido",
        money: 7200
      }
  },
  {
    name: "Roy",
    image: imgRoy,
    city: "Ciudad Puntera",
    type: "Dragón",
    badge: "Medalla Dragón",
    imgBadge: medallaRoy,
    team: [
      { namePokemon: "Gigalith", level: 46, imgPokemon: Gigalith },
      { namePokemon: "Flygon", level: 46, imgPokemon: Flygon },
      { namePokemon: "Sandaconda", level: 46, imgPokemon: Sandaconda },
      { namePokemon: "Duraludon", level: 48, imgPokemon: Duraludon }
    ],
    rewards: {
      tm: "MT99 - Vasto Impacto",
      money: 7200
    }
  }
];
  
export default gymLeadersGalar;