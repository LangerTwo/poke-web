// Lideres
import imgRoco from '../../assets/sinnoh/lideresGym/VS_Roco_Masters.png'
import imgGardenia from '../../assets/sinnoh/lideresGym/VS_Gardenia_Masters.png'
import imgBrega from '../../assets/sinnoh/lideresGym/VS_Brega_Masters.png'
import imgMananti from '../../assets/sinnoh/lideresGym/VS_Mananti_Masters.png'
import imgFantina from '../../assets/sinnoh/lideresGym/VS_Fantina_Masters.png'
import imgAceron from '../../assets/sinnoh/lideresGym/Acerón_DBPR_retrato.png'
import imgInverna from '../../assets/sinnoh/lideresGym/VS_Inverna_Masters.png'
import imgLectro from '../../assets/sinnoh/lideresGym/VS_Lectro_Masters.png'

// Medallas
import medallaRoco from '../../assets/sinnoh/medallasGym/Medalla_Lignito_Roc.png'
import medallaGardenia from '../../assets/sinnoh/medallasGym/Medalla_Adoquin_Brega.png'
import medallaBrega from '../../assets/sinnoh/medallasGym/Medalla_Cienaga_Manati.png'
import medallaManati from '../../assets/sinnoh/medallasGym/Medalla_Reliquia_Fatina.png'
import medallaFantina from '../../assets/sinnoh/medallasGym/Medalla_Reliquia_Fatina.png'
import medallaAceron from '../../assets/sinnoh/medallasGym/Medalla_Mina_Aceron.png'
import medallaInverna from '../../assets/sinnoh/medallasGym/Medalla_Carambano_Inverna.png'
import medallaLectro from '../../assets/sinnoh/medallasGym/Medalla_Faro_Lectro.png'

// Roco poke
import Geodude from '../../assets/pokemons/pokemonRoca/300px-Geodude.png'
import Onix from '../../assets/pokemons/pokemonRoca/300px-Onix.png'
import Cranidos from '../../assets/pokemons/pokemonRoca/300px-Cranidos.png'

// Gardenia poke
import Turtwig from '../../assets/pokemons/pokemonPlanta/300px-Turtwig.png'
import Cherrim from '../../assets/pokemons/pokemonPlanta/300px-Cherrim.png'
import Roserade from '../../assets/pokemons/pokemonPlanta/300px-Roserade.png'

// Brega poke
import Meditite from '../../assets/pokemons/pokemonLucha/300px-Meditite.png'
import Machoke from '../../assets/pokemons/pokemonLucha/300px-Machoke.png'
import Lucario from '../../assets/pokemons/pokemonLucha/300px-Lucario.png'

// Manati 
import Gyarados from '../../assets/pokemons/pokemonAgua/300px-Gyarados.png'
import Quagsire from '../../assets/pokemons/pokemonAgua/300px-Quagsire.png'
import Floatzel from '../../assets/pokemons/pokemonAgua/300px-Floatzel.png'

// Fantina poke
import Drifblim from '../../assets/pokemons/pokemonFantasma/300px-Drifblim.png'
import Gengar from '../../assets/pokemons/pokemonFantasma/300px-Gengar.png'
import Mismagius from '../../assets/pokemons/pokemonFantasma/300px-Mismagius.png'

// Aceró poke
import Magneton from '../../assets/pokemons/pokemonElectrico/300px-Magneton.png'
import Steelix from '../../assets/pokemons/pokemonAcero/300px-Steelix.png'
import Bastiodon from '../../assets/pokemons/pokemonAcero/300px-Bastiodon.png'

// Inverna poke
import Snover from '../../assets/pokemons/pokemonPlanta/300px-Snover.png'
import Sneasel from '../../assets/pokemons/pokemonSiniestro/300px-Sneasel.png'
import Medicham from '../../assets/pokemons/pokemonLucha/300px-Medicham.png'
import Abomasnow from '../../assets/pokemons/pokemonPlanta/300px-Abomasnow.png'

// Lectro poke
import Jolteon from '../../assets/pokemons/pokemonElectrico/300px-Jolteon.png'
import Raichu from '../../assets/pokemons/pokemonElectrico/300px-Raichu.png'
import Luxray from '../../assets/pokemons/pokemonElectrico/300px-Luxray.png'
import Electivire from '../../assets/pokemons/pokemonElectrico/300px-Electivire.png'


const gymLeadersSinnoh = [
  {
    name: "Roco",
    image: imgRoco,
    city: "Ciudad Pirita",
    type: "Roca",
    badge: "Medalla Lignito",
    imgBadge: medallaRoco,
    team: [
      { namePokemon: "Geodude", level: 12, imgPokemon: Geodude },
      { namePokemon: "Onix", level: 12, imgPokemon: Onix },
      { namePokemon: "Cranidos", level: 14, imgPokemon: Cranidos }
    ],
    rewards: {
      tm: "MT76 - Trampa Roca",
      money: 1680
    }
  },
  {
    name: "Gardenia",
    image: imgGardenia,
    gym: "Ciudad Vetusta",
    type: "Planta",
    badge: "Medalla Bosque",
    imgBadge: medallaGardenia,
    team: [
      { namePokemon: "Turtwig", level: 20, imgPokemon: Turtwig },
      { namePokemon: "Cherrim", level: 20, imgPokemon: Cherrim },
      { namePokemon: "Roserade", level: 22, imgPokemon: Roserade }
    ],
    rewards: {
      tm: "MT86 - Hierba Lazo",
      money: 2760
    }
  },
  {
    name: "Brega",
    image: imgBrega,
    gym: "Ciudad Corazón",
    type: "Lucha",
    badge: "Medalla Adoquín",
    imgBadge: medallaBrega,
    team: [
      { namePokemon: "Meditite", level: 27, imgPokemon: Meditite },
      { namePokemon: "Machoke", level: 27, imgPokemon: Machoke },
      { namePokemon: "Lucario", level: 30, imgPokemon: Lucario }
    ],
    rewards: {
      tm: "MT60 - Puño Drenaje",
      money: 3600
    }
  },
  {
    name: "Manati",
    image: imgMananti,
    gym: "Pueblo Pastoria",
    type: "Agua",
    badge: "Medalla Cienaga",
    imgBadge: medallaManati,
    team: [
      { namePokemon: "Gyarados", level: 33, imgPokemon: Gyarados },
      { namePokemon: "Quagsire", level: 34, imgPokemon: Quagsire },
      { namePokemon: "Floatzel", level: 37, imgPokemon: Floatzel }
    ],
    rewards: {
      tm: "MT55 - Salmuera",
      money: 4200
    }
  },
  {
    name: "Fantina",
    image: imgFantina,
    gym: "Ciudad Corazonada",
    type: "Fantasma",
    badge: "Medalla Reliquia",
    imgBadge: medallaFantina,
    team: [
      { namePokemon: "Drifblim", level: 32, imgPokemon: Drifblim },
      { namePokemon: "Gengar", level: 34, imgPokemon: Gengar },
      { namePokemon: "Mismagius", level: 36, imgPokemon: Mismagius }
    ],
    rewards: {
      tm: "MT65 - Garra Umbría",
      money: 4680
    }
  },
  {
    name: "Acerón",
    image: imgAceron,
    gym: "Ciudad Canal",
    type: "Acero",
    badge: "Medalla Mina",
    imgBadge: medallaAceron,
    team: [
      { namePokemon: "Magneton", level: 37, imgPokemon: Magneton },
      { namePokemon: "Steelix", level: 38, imgPokemon: Steelix },
      { namePokemon: "Bastiodon", level: 41, imgPokemon: Bastiodon },
    ],
    rewards: {
      tm: "MT59 - Foco Resplandor",
      money: 6120
    }
  },
  {
    name: "Inverna",
    image: imgInverna,
    gym: "Ciudad Rocavelo",
    type: "Hielo",
    badge: "Medalla Carámbano",
    imgBadge: medallaInverna,
    team: [
      { namePokemon: "Snover", level: 38, imgPokemon: Snover },
      { namePokemon: "Sneasel", level: 38, imgPokemon: Sneasel },
      { namePokemon: "Medicham", level: 40, imgPokemon: Medicham },
      { namePokemon: "Abomasnow", level: 42, imgPokemon: Abomasnow }
    ],
    rewards: {
      tm: "MT72 - Alud",
      money: 5760
    }
  },{
    name: "Lectro",
    image: imgLectro,
    gym: "Ciudad Marina",
    type: "Eléctrico",
    badge: "Medalla Faro",
    imgBadge: medallaLectro,
    team: [
      { namePokemon: "Jolteon", level: 46, imgPokemon: Jolteon },
      { namePokemon: "Raichu", level: 46, imgPokemon: Raichu },
      { namePokemon: "Luxray", level: 48, imgPokemon: Luxray },
      { namePokemon: "Electivire", level: 50, imgPokemon: Electivire }
    ],
    rewards: {
      tm: "MT57 - Rayo Carga",
      money: 5520
    }
  },
];
  
export default gymLeadersSinnoh;
  