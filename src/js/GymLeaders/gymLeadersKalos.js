// Lideres
import imgVioleta from '../../assets/kalos/lideresGym/165px-VS_Violeta_Masters.png'
import imgGrant from '../../assets/kalos/lideresGym/165px-VS_Lino_Masters.png'
import imgKorrina from '../../assets/kalos/lideresGym/165px-VS_Corelia_Masters.png'
import imgAmaros from '../../assets/kalos/lideresGym/165px-VS_Amaro_Masters.png'
import imgClemont from '../../assets/kalos/lideresGym/165px-VS_Lem_Masters.png'
import imgValeria from '../../assets/kalos/lideresGym/165px-VS_Valeria_Masters.png'
import imgOlympia from '../../assets/kalos/lideresGym/165px-VS_Astrid_Masters.png'
import imgWulfric from '../../assets/kalos/lideresGym/165px-VS_Edel_Masters.png'

// Medallas
import medallaVioleta from '../../assets/kalos/medallasGym/150px-Medalla_Insecto_Violeta.png'
import medallaGrant from '../../assets/kalos/medallasGym/150px-Medalla_Muro_Lino.png'
import medallaKorrina from '../../assets/kalos/medallasGym/150px-Medalla_Lid_Corelia.png'
import medallaAmaros from '../../assets/kalos/medallasGym/150px-Medalla_Hoja_Amaro.png'
import medallaClemont from '../../assets/kalos/medallasGym/150px-Medalla_Voltaje_Lem.png'
import medallaValeria from '../../assets/kalos/medallasGym/150px-Medalla_Hada_Valeria.png'
import medallaOlympia from '../../assets/kalos/medallasGym/Medalla_Psique_Astrid.png'
import medallaWulfric from '../../assets/kalos/medallasGym/150px-Medalla_Iceberg_Edel.png'

// Violeta poke
import Surskit from '../../assets/pokemons/pokemonBicho/300px-Surskit.png'
import Vivillon from '../../assets/pokemons/pokemonBicho/300px-Vivillon_floral.png'

// Grant poke
import Amaura from '../../assets/pokemons/pokemonRoca/300px-Amaura.png'
import Tyrunt from '../../assets/pokemons/pokemonRoca/300px-Tyrunt.png'

// Korrina poke
import Mienfoo from '../../assets/pokemons/pokemonLucha/300px-Mienfoo.png'
import Machoke from '../../assets/pokemons/pokemonLucha/300px-Machoke.png'
import Hawlucha from '../../assets/pokemons/pokemonLucha/300px-Hawlucha.png'

// Amaros poke
import Jumpluff from '../../assets/pokemons/pokemonPlanta/300px-Jumpluff.png'
import Weepinbell from '../../assets/pokemons/pokemonPlanta/300px-Weepinbell.png'
import Gogoat from '../../assets/pokemons/pokemonPlanta/300px-Gogoat.png'

// Clemont poke
import Emolga from '../../assets/pokemons/pokemonElectrico/300px-Emolga.png'
import Magneton from '../../assets/pokemons/pokemonElectrico/300px-Magneton.png'
import Heliolisk from '../../assets/pokemons/pokemonElectrico/300px-Heliolisk.png'

// Valeria poke
import Mawile from '../../assets/pokemons/pokemonAcero/300px-Mawile.png'
import MrMime from '../../assets/pokemons/pokemonPsiquico/300px-Mr._Mime.png'
import Sylveon from '../../assets/pokemons/pokemonHada/300px-Sylveon.png'

// Olympia poke
import Sigilyph from '../../assets/pokemons/pokemonPsiquico/300px-Sigilyph.png'
import Slowking from '../../assets/pokemons/pokemonAgua/300px-Slowking.png'
import Meowstic from '../../assets/pokemons/pokemonPsiquico/300px-Meowstic.png'

// Wulfric poke
import Abomasnow from '../../assets/pokemons/pokemonPlanta/300px-Abomasnow.png'
import Cryogonal from '../../assets/pokemons/pokemonHielo/300px-Cryogonal.png'
import Avalugg from '../../assets/pokemons/pokemonHielo/300px-Avalugg.png'


const gymLeadersKalos = [
    {
      name: "Violeta",
      image: imgVioleta,
      city: "Ciudad Novarte",
      type: "Bicho",
      badge: "Medalla Insecto",
      imgBadge: medallaVioleta,
      team: [
        { namePokemon: "Surskit", level: 10, imgPokemon: Surskit },
        { namePokemon: "Vivillon", level: 12, imgPokemon: Vivillon }
      ],
      rewards: {
        tm: "MT83 - Acoso",
        money: 1920
      }
    },
    {
      name: "Grant",
      image: imgGrant,
      city: "Ciudad Relieve",
      type: "Roca",
      badge: "Medalla Muro",
      imgBadge: medallaGrant,
      team: [
        { namePokemon: "Amaura", level: 25, imgPokemon: Amaura },
        { namePokemon: "Tyrunt", level: 25, imgPokemon: Tyrunt }
      ],
      rewards: {
        tm: "MT39 - Tumbarrocas",
        money: 4000
      }
    },
    {
      name: "Korrina",
      image: imgKorrina,
      city: "Ciudad Yantra",
      type: "Lucha",
      badge: "Medalla Lucha",
      imgBadge: medallaKorrina,
      team: [
        { namePokemon: "Mienfoo", level: 29, imgPokemon: Mienfoo },
        { namePokemon: "Machoke", level: 28, imgPokemon: Machoke },
        { namePokemon: "Hawlucha", level: 32, imgPokemon: Hawlucha }
      ],
      rewards: {
        tm: "MT98 - Puño Incremento",
        money: 5280
      }
    },
    {
      name: "Amaros",
      image: imgAmaros,
      city: "Ciudad Témpera",
      type: "Planta",
      badge: "Medalla Prisma",
      imgBadge: medallaAmaros,
      team: [
        { namePokemon: "Jumpluff", level: 30, imgPokemon: Jumpluff },
        { namePokemon: "Weepinbell", level: 31, imgPokemon: Weepinbell },
        { namePokemon: "Gogoat", level: 34, imgPokemon: Gogoat }
      ],
      rewards: {
        tm: "MT86 - Hierba Lazo",
        money: 5440
      }
    },
    {
        name: "Clemont",
        image: imgClemont,
        city: "Ciudad Luminalia",
        type: "Eléctrico",
        badge: "Medalla Voltaje",
        imgBadge: medallaClemont,
        team: [
          { namePokemon: "Emolga", level: 35, imgPokemon: Emolga },
          { namePokemon: "Magneton", level: 35, imgPokemon: Magneton },
          { namePokemon: "Heliolisk", level: 37, imgPokemon: Heliolisk }
        ],
        rewards: {
          tm: "MT24 - Rayo",
          money: 6720
        }
    },
    {
      name: "Valeria",
      image: imgValeria,
      city: "Ciudad Romantis",
      type: "Hada",
      badge: "Medalla Hada",
      imgBadge: medallaValeria,
      team: [
        { namePokemon: "Mawile", level: 38, imgPokemon: Mawile },
        { namePokemon: "Mr. Mime", level: 39, imgPokemon: MrMime },
        { namePokemon: "Sylveon", level: 42, imgPokemon: Sylveon }
      ],
      rewards: {
        tm: "MT99 - Brillo Mágico",
        money: 6720
      }
    },
    {
      name: "Olympia",
      image: imgOlympia,
      city: "Ciudad Fluxus",
      type: "Psíquico",
      badge: "Medalla Psique",
      imgBadge: medallaOlympia,
      team: [
        { namePokemon: "Sigilyph", level: 44, imgPokemon: Sigilyph },
        { namePokemon: "Slowking", level: 45, imgPokemon: Slowking },
        { namePokemon: "Meowstic", level: 48, imgPokemon: Meowstic }
      ],
      rewards: {
        tm: "MT04 - Paz Mental",
        money: 7680
      }
    },
    {
      name: "Wulfric",
      image: imgWulfric,
      city: "Ciudad Fractal",
      type: "Hielo",
      badge: "Medalla Iceberg",
      imgBadge: medallaWulfric,
      team: [
        { namePokemon: "Abomasnow", level: 56, imgPokemon: Abomasnow },
        { namePokemon: "Cryogonal", level: 55, imgPokemon: Cryogonal },
        { namePokemon: "Avalugg", level: 59, imgPokemon: Avalugg }
      ],
      rewards: {
        tm: "MT13 - Rayo Hielo",
        money: 9600
      }
    }
  ];
  
  export default gymLeadersKalos;