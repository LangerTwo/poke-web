// Lideres
import imgBrock from '../../assets/kanto/lideresGym/VS_Brock_Masters.png'
import imgMisty from '../../assets/kanto/lideresGym/VS_Misty_Masters.png'
import imgSurge from '../../assets/kanto/lideresGym/VS_Teniente_Surge_Masters.png'
import imgErika from '../../assets/kanto/lideresGym/VS_Erika_Masters.png'
import imgKoga from '../../assets/kanto/lideresGym/VS_Koga_Masters.png'
import imgSabrina from '../../assets/kanto/lideresGym/VS_Sabrina_Masters.png'
import imgBlaine from '../../assets/kanto/lideresGym/VS_Blaine_Masters.png'
import imgGiovanni from '../../assets/kanto/lideresGym/VS_Giovanni_(Kanto)_Masters.png'

// Medallas
import medallaBrock from '../../assets/kanto/medallasGym/Medalla_Roca_Brock.png'
import medallaMisty from '../../assets/kanto/medallasGym/Medalla_Cascada_Misty.png'
import medallaSurge from '../../assets/kanto/medallasGym/Medalla_Trueno_Surge.png'
import medallaErika from '../../assets/kanto/medallasGym/Medalla_Arcoiris.png'
import medallaKoga from '../../assets/kanto/medallasGym/Medalla_Alma.png'
import medallaSabrina from '../../assets/kanto/medallasGym/Medalla_Pantano.png'
import medallaBlaine from '../../assets/kanto/medallasGym/Medalla_Volcan.png'
import medallaGiovanni from '../../assets/kanto/medallasGym/Medalla_Tierra.png'

// Brock Pokemon
import Geodude from '../../assets/pokemons/pokemonRoca/300px-Geodude.png'
import Onix from '../../assets/pokemons/pokemonRoca/300px-Onix.png'

// Misty Pokemon
import Staryu from '../../assets/pokemons/pokemonAgua/300px-Staryu.png'
import Starmie from '../../assets/pokemons/pokemonAgua/300px-Starmie.png'

// Surge poke
import Voltorb from '../../assets/pokemons/pokemonElectrico/300px-Voltorb.png'
import Pikachu from '../../assets/pokemons/pokemonElectrico/300px-Pikachu.png'
import Raichu from '../../assets/pokemons/pokemonElectrico/300px-Raichu.png'

// Erika poke
import Victreebel from '../../assets/pokemons/pokemonPlanta/300px-Victreebel.png'
import Tangela from '../../assets/pokemons/pokemonPlanta/300px-Tangela.png'
import Vileplume from '../../assets/pokemons/pokemonPlanta/300px-Vileplume.png'

// Koga poke
import Koffing from '../../assets/pokemons/pokemonVeneno/300px-Koffing.png'
import Muk from '../../assets/pokemons/pokemonVeneno/300px-Muk.png'
import Weezing from '../../assets/pokemons/pokemonVeneno/300px-Weezing.png'

// Sabrina poke
import Kadabra from '../../assets/pokemons/pokemonPsiquico/300px-Kadabra.png'
import MrMine from '../../assets/pokemons/pokemonPsiquico/300px-Mr._Mime.png'
import Venomoth from '../../assets/pokemons/pokemonPsiquico/300px-Venomoth.png'
import Alakazam from '../../assets/pokemons/pokemonPsiquico/300px-Alakazam.png'

// blaine poke
import Growlithe from '../../assets/pokemons/pokemonFuego/300px-Growlithe.png'
import Ponyta from '../../assets/pokemons/pokemonFuego/300px-Ponyta.png'
import Rapidash from '../../assets/pokemons/pokemonFuego/300px-Rapidash.png'
import Arcanine from '../../assets/pokemons/pokemonFuego/300px-Arcanine.png'

// Giovanni poke
import Rhyhorn from '../../assets/pokemons/pokemonTierra/300px-Rhyhorn.png'
import Dugtrio from '../../assets/pokemons/pokemonTierra/300px-Dugtrio.png'
import Nidoqueen from '../../assets/pokemons/pokemonTierra/300px-Nidoqueen.png'
import Nidoking from '../../assets/pokemons/pokemonTierra/300px-Nidoking.png'
import Rhydon from '../../assets/pokemons/pokemonTierra/300px-Rhydon.png'

const gymLeadersKantoFRLG = [
  {
    name: "Brock",
    image: imgBrock,
    city: "Pewter City",
    type: "Roca",
    badge: "Medalla Roca",
    imgBadge: medallaBrock,
    team: [
      { namePokemon: "Geodude", level: 12, imgPokemon: Geodude },
      { namePokemon: "Onix", level: 14, imgPokemon: Onix }
    ],
    rewards: {
      tm: "MT39 - Tumba Rocas",
      money: 1400
    }
  },
  {
    name: "Misty",
    image: imgMisty,
    city: "Cerulean City",
    type: "Agua",
    badge: "Medalla Cascada",
    imgBadge: medallaMisty,
    team: [
      { namePokemon: "Staryu", level: 18, imgPokemon: Staryu },
      { namePokemon: "Starmie", level: 21, imgPokemon: Starmie }
    ],
    rewards: {
      tm: "MT03 - Hidropulso",
      money: 2100
    }
  },
  {
    name: "Lt. Surge",
    image: imgSurge,
    city: "Vermilion City",
    type: "Eléctrico",
    badge: "Medalla Trueno",
    imgBadge: medallaSurge,
    team: [
      { namePokemon: "Voltorb", level: 21, imgPokemon: Voltorb },
      { namePokemon: "Pikachu", level: 18, imgPokemon: Pikachu },
      { namePokemon: "Raichu", level: 24, imgPokemon: Raichu }
    ],
    rewards: {
      tm: "MT24 - Onda Voltio",
      money: 2400
    }
  },
  {
    name: "Erika",
    image: imgErika,
    city: "Celadon City",
    type: "Planta",
    badge: "Medalla Arcoíris",
    imgBadge: medallaErika,
    team: [
      { namePokemon: "Victreebel", level: 29, imgPokemon: Victreebel },
      { namePokemon: "Tangela", level: 24, imgPokemon: Tangela },
      { namePokemon: "Vileplume", level: 29, imgPokemon: Vileplume }
    ],
    rewards: {
      tm: "MT19 - Gigadrenado",
      money: 2900
    }
  },
  {
    name: "Koga",
    image: imgKoga,
    city: "Fuchsia City",
    type: "Veneno",
    badge: "Medalla Alma",
    imgBadge: medallaKoga,
    team: [
      { namePokemon: "Koffing", level: 37, imgPokemon: Koffing },
      { namePokemon: "Koffing", level: 37, imgPokemon: Koffing },
      { namePokemon: "Muk", level: 39, imgPokemon: Muk },
      { namePokemon: "Weezing", level: 43, imgPokemon: Weezing }
    ],
    rewards: {
      tm: "MT06 - Tóxico",
      money: 3100
    }
  },
  {
    name: "Sabrina",
    image: imgSabrina,
    city: "Saffron City",
    type: "Psíquico",
    badge: "Medalla Pantano",
    imgBadge: medallaSabrina,
    team: [
      { namePokemon: "Kadabra", level: 38, imgPokemon: Kadabra },
      { namePokemon: "Mr. Mime", level: 37, imgPokemon:  MrMine},
      { namePokemon: "Venomoth", level: 38, imgPokemon:  Venomoth},
      { namePokemon: "Alakazam", level: 43, imgPokemon:  Alakazam}
    ],
    rewards: {
      tm: "MT04 - Paz Mental",
      money: 4300
    }
  },
  {
    name: "Blaine",
    image: imgBlaine,
    city: "Cinnabar Island",
    type: "Fuego",
    badge: "Medalla Volcán",
    imgBadge: medallaBlaine,
    team: [
      { namePokemon: "Growlithe", level: 42, imgPokemon: Growlithe },
      { namePokemon: "Ponyta", level: 40, imgPokemon: Ponyta },
      { namePokemon: "Rapidash", level: 42, imgPokemon: Rapidash },
      { namePokemon: "Arcanine", level: 47, imgPokemon: Arcanine }
    ],
    rewards: {
      tm: "MT38 - Llamarada",
      money: 4700
    }
  },
  {
    name: "Giovanni",
    image: imgGiovanni,
    city: "Viridian City",
    type: "Tierra",
    badge: "Medalla Tierra",
    imgBadge: medallaGiovanni,
    team: [
      { namePokemon: "Rhyhorn", level: 45, imgPokemon: Rhyhorn },
      { namePokemon: "Dugtrio", level: 42, imgPokemon: Dugtrio },
      { namePokemon: "Nidoqueen", level: 44, imgPokemon: Nidoqueen },
      { namePokemon: "Nidoking", level: 45, imgPokemon: Nidoking },
      { namePokemon: "Rhydon", level: 50, imgPokemon: Rhydon }
    ],
    rewards: {
      tm: "MT26 - Terremoto",
      money: 5000
    }
  }
];

export default gymLeadersKantoFRLG;