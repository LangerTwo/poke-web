// Lideres
import imgHermanos from '../../assets/teselia/lideresGym/VS_Trio_Hermanos_Masters.jpg'
import imgAloe from '../../assets/teselia/lideresGym/VS_Aloe_Masters.png'
import imgCamus from '../../assets/teselia/lideresGym/VS_Camus_Masters.png'
import imgCamila from '../../assets/teselia/lideresGym/VS_Camila_(Original)_Masters.png'
import imgYakon from '../../assets/teselia/lideresGym/VS_Yakon_Masters.png'
import imgGerania from '../../assets/teselia/lideresGym/VS_Gerania_Masters.png'
import imgJunco from '../../assets/teselia/lideresGym/VS_Junco_Masters.png'
import imgLirio from '../../assets/teselia/lideresGym/Lirio_NB_retrato.png'

// Medallas
import medallaHermanos from '../../assets/teselia/medallasGym/Medalla_Trio.png'
import medallaAloe from '../../assets/teselia/medallasGym/Medalla_Base.png'
import medallaCamus from '../../assets/teselia/medallasGym/Medalla_Elitro.png'
import medallaCamila from '../../assets/teselia/medallasGym/Medalla_Voltio.png'
import medallaYakon from '../../assets/teselia/medallasGym/Medalla_Temblor.png'
import medallaGerania from '../../assets/teselia/medallasGym/Medalla_Jet.png'
import medallaJunco from '../../assets/teselia/medallasGym/Medalla_Candelizo.png'
import medallaLirio from '../../assets/teselia/medallasGym/Medalla_Leyenda.png'

// Hermanos poke
import Lillipup from '../../assets/pokemons/pokemonNormal/300px-Lillipup.png'
import MonkeyTrio from '../../assets/pokemons/pokemonTrio/BW_Monkey_Trio.png'

// Aloe poke
import Herdier from '../../assets/pokemons/pokemonNormal/300px-Herdier.png'
import Watchog from '../../assets/pokemons/pokemonNormal/300px-Watchog.png'

// Camu poke
import Whirlipede from '../../assets/pokemons/pokemonBicho/300px-Whirlipede.png'
import Dwabble from '../../assets/pokemons/pokemonBicho/300px-Dwebble.png'
import Leavanny from '../../assets/pokemons/pokemonBicho/300px-Leavanny.png'

// Camila poke
import Emolga from '../../assets/pokemons/pokemonElectrico/300px-Emolga.png'
import Zebstrika from '../../assets/pokemons/pokemonElectrico/300px-Zebstrika.png'

// Yako poke
import Krokorok from '../../assets/pokemons/pokemonTierra/300px-Krokorok.png'
import Palpitoad from '../../assets/pokemons/pokemonAgua/300px-Palpitoad.png'
import Excadrill from '../../assets/pokemons/pokemonTierra/300px-Excadrill.png'

// Gerania poke
import Swoobat from '../../assets/pokemons/pokemonPsiquico/300px-Swoobat.png'
import Unfezant from '../../assets/pokemons/pokemonNormal/300px-Unfezant.png'
import Swanna from '../../assets/pokemons/pokemonAgua/300px-Swanna.png'

// Junco poke
import Vanillish from '../../assets/pokemons/pokemonHielo/300px-Vanillish.png'
import Cryogonal from '../../assets/pokemons/pokemonHielo/300px-Cryogonal.png'
import Beartic from '../../assets/pokemons/pokemonHielo/300px-Beartic.png'

// Lirio poke
import Fraxure from '../../assets/pokemons/pokemonDragon/300px-Fraxure.png'
import Druddigon from '../../assets/pokemons/pokemonDragon/300px-Druddigon.png'
import Haxorus from '../../assets/pokemons/pokemonDragon/300px-Haxorus.png'

const gymLeadersTeselia = [
  {
    name: "Cilano, Millo y Maíz",
    image: imgHermanos,
    city: "Ciudad Gres",
    type: "AguaFuegoPlanta",
    badge: "Medalla Trío",
    imgBadge: medallaHermanos,
    team: [
      { namePokemon: "Lillipup", level: 12, imgPokemon: Lillipup },
      { namePokemon: "Pansage/Pansear/Panpour", level: 14, imgPokemon: MonkeyTrio }
    ],
    rewards: {
      tm: "MT83 - Avivar",
      money: 1680
    }
  },
  {
    name: "Aloe",
    image: imgAloe,
    city: "Ciudad Esmalte",
    type: "Normal",
    badge: "Medalla Base",
    imgBadge: medallaAloe,
    team: [
      { namePokemon: "Herdier", level: 18, imgPokemon: Herdier },
      { namePokemon: "Watchog", level: 20, imgPokemon: Watchog }
    ],
    rewards: {
      tm: "MT67 - Represalia",
      money: 2400
    }
  },
  {
      name: "Camus",
      image: imgCamus,
      city: "Ciudad Porcelana",
      type: "Bicho",
      badge: "Medalla Élitro",
      imgBadge: medallaCamus,
      team: [
      { namePokemon: "Whirlipede", level: 21, imgPokemon: Whirlipede },
        { namePokemon: "Dwabble", level: 21, imgPokemon: Dwabble },
        { namePokemon: "Leavanny", level: 23, imgPokemon: Leavanny }
      ],
      rewards: {
        tm: "MT76 - Estoicismo",
        money: 2880
      }
  },
  {
    name: "Camila",
    image: imgCamila,
    city: "Ciudad Mayólica",
    type: "Eléctrico",
    badge: "Medalla Voltio",
    imgBadge: medallaCamila,
    team: [
      { namePokemon: "Emolga", level: 25, imgPokemon: Emolga },
      { namePokemon: "Emolga", level: 25, imgPokemon: Emolga },
      { namePokemon: "Zebstrika", level: 27, imgPokemon: Zebstrika }
    ],
    rewards: {
      tm: "MT72 - Voltiocambio",
      money: 3240
    }
  },
  {
    name: "Yakón",
    image: imgYakon,
    city: "Ciudad Fayenza",
    type: "Tierra",
    badge: "Medalla Temblor",
    imgBadge: medallaYakon,
    team: [
      { namePokemon: "Krokorok", level: 29, imgPokemon: Krokorok },
      { namePokemon: "Palpitoad", level: 29, imgPokemon: Palpitoad },
      { namePokemon: "Excadrill", level: 31, imgPokemon: Excadrill }
    ],
    rewards: {
      tm: "MT78 - Terratemblor",
      money: 3720
    }
  },
  {
    name: "Gerania",
    image: imgGerania,
    city: "Ciudad Loza",
    type: "Volador",
    badge: "Medalla Jet",
    imgBadge: medallaGerania,
    team: [
      { namePokemon: "Swoobat", level: 33, imgPokemon: Swoobat },
      { namePokemon: "Unfezant", level: 33, imgPokemon: Unfezant },
      { namePokemon: "Swanna", level: 35, imgPokemon: Swanna }
    ],
    rewards: {
      tm: "MT62 - Acróbata",
      money: 4200
    }
  },
  {
    name: "Junco",
    image: imgJunco,
    city: "Ciudad Teja",
    type: "Hielo",
    badge: "Medalla Candelizo",
    imgBadge: medallaJunco,
    team: [
      { namePokemon: "Vanillish", level: 37, imgPokemon: Vanillish },
      { namePokemon: "Cryogonal", level: 37, imgPokemon: Cryogonal },
      { namePokemon: "Beartic", level: 39, imgPokemon: Beartic }
    ],
    rewards: {
      tm: "MT79 - Viento Gélido",
      money: 4680
    }
  },
  {
    name: "Lirio",
    image: imgLirio,
    city: "Ciudad Caolín",
    type: "Dragón",
    badge: "Medalla Leyenda",
    imgBadge: medallaLirio,
    team: [
      { namePokemon: "Fraxure", level: 41, imgPokemon: Fraxure },
      { namePokemon: "Druddigon", level: 41, imgPokemon: Druddigon },
      { namePokemon: "Haxorus", level: 43, imgPokemon: Haxorus }
    ],
    rewards: {
      tm: "MT82 - Cola Dragón",
      money: 5520
    }
  },
  ];
  
export default gymLeadersTeselia;