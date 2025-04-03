import imgBrock from '../../assets/kanto/lideresGym/VS_Brock_Masters.png'
import imgMisty from '../../assets/kanto/lideresGym/VS_Misty_Masters.png'
import imgSurge from '../../assets/kanto/lideresGym/VS_Teniente_Surge_Masters.png'
import imgErika from '../../assets/kanto/lideresGym/VS_Erika_Masters.png'
import imgKoga from '../../assets/kanto/lideresGym/VS_Koga_Masters.png'
import imgSabrina from '../../assets/kanto/lideresGym/VS_Sabrina_Masters.png'
import imgBlaine from '../../assets/kanto/lideresGym/VS_Blaine_Masters.png'
import imgGiovanni from '../../assets/kanto/lideresGym/VS_Giovanni_Masters.png'

import medallaBrock from '../../assets/kanto/medallasGym/Medalla_Roca_Brock.png'
import medallaMisty from '../../assets/kanto/medallasGym/Medalla_Cascada_Misty.png'
import medallaSurge from '../../assets/kanto/medallasGym/Medalla_Trueno_Surge.png'
import medallaErika from '../../assets/kanto/medallasGym/Medalla_Arcoiris.png'
import medallaKoga from '../../assets/kanto/medallasGym/Medalla_Alma.png'
import medallaSabrina from '../../assets/kanto/medallasGym/Medalla_Pantano.png'
import medallaBlaine from '../../assets/kanto/medallasGym/Medalla_Volcan.png'
import medallaGiovanni from '../../assets/kanto/medallasGym/Medalla_Tierra.png'

const gymLeadersKantoFRLG = [
  {
    name: "Brock",
    image: imgBrock,
    city: "Pewter City",
    type: "Roca",
    badge: "Medalla Roca",
    imgBadge: medallaBrock,
    team: [
      { namePokemon: "Geodude", level: 12 },
      { namePokemon: "Onix", level: 14 }
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
      { namePokemon: "Staryu", level: 18 },
      { namePokemon: "Starmie", level: 21 }
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
      { namePokemon: "Voltorb", level: 21 },
      { namePokemon: "Pikachu", level: 18 },
      { namePokemon: "Raichu", level: 24 }
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
      { namePokemon: "Victreebel", level: 29 },
      { namePokemon: "Tangela", level: 24 },
      { namePokemon: "Vileplume", level: 29 }
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
      { namePokemon: "Koffing", level: 37 },
      { namePokemon: "Muk", level: 39 },
      { namePokemon: "Koffing", level: 37 },
      { namePokemon: "Weezing", level: 43 }
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
      { namePokemon: "Kadabra", level: 38 },
      { Pokemon: "Mr. Mime", level: 37 },
      { namePokemon: "Venomoth", level: 38 },
      { namePokemon: "Alakazam", level: 43 }
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
      { namePokemon: "Growlithe", level: 42 },
      { namePokemon: "Ponyta", level: 40 },
      { namePokemon: "Rapidash", level: 42 },
      { namePokemon: "Arcanine", level: 47 }
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
      { namePokemon: "Rhyhorn", level: 45 },
      { namePokemon: "Dugtrio", level: 42 },
      { namePokemon: "Nidoqueen", level: 44 },
      { namePokemon: "Nidoking", level: 45 },
      { namePokemon: "Rhydon", level: 50 }
    ],
    rewards: {
      tm: "MT26 - Terremoto",
      money: 5000
    }
  }
];

export default gymLeadersKantoFRLG;