// Lideres
import imgHala from '../../assets/alola/kahunas/165px-VS_Kaudan_Masters.png'
import imgOlivia from '../../assets/alola/kahunas/165px-VS_Mayla_Masters.png'
import imgNanu from '../../assets/alola/kahunas/165px-VS_Denio_Masters.png'
import imgHapu from '../../assets/alola/kahunas/165px-VS_Hela_Masters.png'

// Zcritales
import zCrystalFightinium from '../../assets/alola/cristal/Lizastal_Z_Lucha.png'
import zCrystalRockium from '../../assets/alola/cristal/Litostal_Z_Roca.png'
import zCrystalDarkinium from '../../assets/alola/cristal/Nictostal_Z_Siniestro.png'
import zCrystalGroundium from '../../assets/alola/cristal/Geostal_Z_Tierra.png'

// Hala Pokemon
import Mankey from '../../assets/pokemons/pokemonLucha/300px-Mankey.png'
import Makuhita from '../../assets/pokemons/pokemonLucha/300px-Makuhita.png'
import Crabrawler from '../../assets/pokemons/pokemonLucha/300px-Crabrawler.png'

// Olivia Pokemon
import Nosepass from '../../assets/pokemons/pokemonRoca/300px-Nosepass.png'
import Boldore from '../../assets/pokemons/pokemonRoca/300px-Boldore.png'
import Lycanroc from '../../assets/pokemons/pokemonRoca/300px-Lycanroc.png'

// Nanu Pokemon
import Sableye from '../../assets/pokemons/pokemonSiniestro/300px-Sableye.png'
import Krokorok from '../../assets/pokemons/pokemonTierra/300px-Krokorok.png'
import PersianAlola from '../../assets/pokemons/pokemonSiniestro/300px-Persian_de_Alola.png'


// Hapu Pokemon
import DugtriodeAlola from '../../assets/pokemons/pokemonTierra/300px-Dugtrio_de_Alola.png'
import Gastrodon from '../../assets/pokemons/pokemonAgua/Gastrodon.png'
import Flygon from '../../assets/pokemons/pokemonTierra/300px-Flygon.png'
import Mudsdale from '../../assets/pokemons/pokemonTierra/300px-Mudsdale.png'

const kahunasAlola = [
  {
    name: "Hala",
    image: imgHala,
    city: "Isla Melemele",
    type: "Lucha",
    badge: "Fightinium Z",
    imgBadge: zCrystalFightinium,
    team: [
      { namePokemon: "Mankey", level: 14, imgPokemon: Mankey },
      { namePokemon: "Makuhita", level: 14, imgPokemon: Makuhita },
      { namePokemon: "Crabrawler", level: 15, imgPokemon: Crabrawler }
    ],
    rewards: {
      money: 3000
    }
  },
  {
    name: "Olivia",
    image: imgOlivia,
    city: "Isla Akala",
    type: "Roca",
    badge: "Rockium Z",
    imgBadge: zCrystalRockium,
    team: [
      { namePokemon: "Nosepass", level: 27, imgPokemon: Nosepass },
      { namePokemon: "Boldore", level: 27, imgPokemon: Boldore },
      { namePokemon: "Lycanroc", level: 28, imgPokemon: Lycanroc }
    ],
    rewards: {
      money: 6000
    }
  },
  {
    name: "Nanu",
    image: imgNanu,
    city: "Isla Ula-Ula",
    type: "Siniestro",
    badge: "Darkinium Z",
    imgBadge: zCrystalDarkinium,
    team: [
      { namePokemon: "Sableye", level: 38, imgPokemon: Sableye },
      { namePokemon: "Krokorok", level: 38, imgPokemon: Krokorok },
      { namePokemon: "Persian (Alola)", level: 39, imgPokemon: PersianAlola }
    ],
    rewards: {
      money: 9000
    }
  },
  {
    name: "Hapu",
    image: imgHapu,
    city: "Isla Poni",
    type: "Tierra",
    badge: "Groundium Z",
    imgBadge: zCrystalGroundium,
    team: [
      { namePokemon: "DugtriodeAlola", level: 47, imgPokemon: DugtriodeAlola },
      { namePokemon: "Gastrodon", level: 47, imgPokemon: Gastrodon },
      { namePokemon: "Flygon", level: 47, imgPokemon: Flygon },
      { namePokemon: "Mudsdale", level: 48, imgPokemon: Mudsdale },
    ],
    rewards: {
      money: 11000
    }
  }
];
  
export default kahunasAlola;  