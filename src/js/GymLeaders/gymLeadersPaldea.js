// Lideres
import imgKaty from '../../assets/paldea/lideresGym/165px-Cara_de_Araceli_EP.png'
import imgBrassius from '../../assets/paldea/lideresGym/165px-Cara_de_Brais_EP.png'
import imgIono from '../../assets/paldea/lideresGym/165px-Cara_de_e-Nigma_EP.png'
import imgKofu from '../../assets/paldea/lideresGym/165px-Cara_de_Fuco_EP.png'
import imgLarry from '../../assets/paldea/lideresGym/165px-Cara_de_Laureano_2_EP.png'
import imgRyme from '../../assets/paldea/lideresGym/165px-Cara_de_Grusha_EP.png'
import imgTulip from '../../assets/paldea/lideresGym/165px-Cara_de_Lima_EP.png'
import imgGrusha from '../../assets/paldea/lideresGym/165px-Cara_de_Tuli_EP.png'

// Medallas
import medallaKaty from '../../assets/paldea/medallasGym/90px-Medalla_de_Gimnasio_Bicho_Arceli.png'
import medallaBrassius from '../../assets/paldea/medallasGym/90px-Medalla_de_Gimnasio_Planta_Brais.png'
import medallaIono from '../../assets/paldea/medallasGym/90px-Medalla_de_Gimnasio_Electrico_Iono.png'
import medallaKofu from '../../assets/paldea/medallasGym/90px-Medalla_de_Gimnasio_Agua_Fuco.png'
import medallaLarry from '../../assets/paldea/medallasGym/90px-Medalla_de_Gimnasio_Normal_Laureano.png'
import medallaRyme from '../../assets/paldea/medallasGym/90px-Medalla_de_Gimnasio_Fantasma_Lima.png'
import medallaTulip from '../../assets/paldea/medallasGym/90px-Medalla_de_Gimnasio_Psíquico_Tuli.png'
import medallaGrusha from '../../assets/paldea/medallasGym/90px-Medalla_de_Gimnasio_Hielo_Gorusha.png'

// Katy Pokemon
import Nymble from '../../assets/pokemons/pokemonBicho/300px-Nymble.png'
import Tarountula from '../../assets/pokemons/pokemonBicho/300px-Tarountula.png'
import Teddiursa from '../../assets/pokemons/pokemonNormal/300px-Teddiursa.png'

// Brassius Pokemon
import Petilil from '../../assets/pokemons/pokemonPlanta/300px-Petilil.png'
import Smoliv from '../../assets/pokemons/pokemonPlanta/300px-Smoliv.png'
import Sudowoodo from '../../assets/pokemons/pokemonRoca/300px-Sudowoodo.png'

// Iono Pokemon
import Wattrel from '../../assets/pokemons/pokemonElectrico/300px-Wattrel.png'
import Bellibolt from '../../assets/pokemons/pokemonElectrico/300px-Bellibolt.png'
import Luxio from '../../assets/pokemons/pokemonElectrico/300px-Luxio.png'
import Mismagius from '../../assets/pokemons/pokemonFantasma/300px-Mismagius.png'

// Kofu Pokemon
import Veluza from '../../assets/pokemons/pokemonAgua/300px-Veluza.png'
import Wugtrio from '../../assets/pokemons/pokemonAgua/300px-Wugtrio.png'
import Crabominable from '../../assets/pokemons/pokemonLucha/300px-Crabominable.png'

// Larry Pokemon
import Komala from '../../assets/pokemons/pokemonNormal/300px-Komala.png'
import Dudunsparce from '../../assets/pokemons/pokemonNormal/300px-Dudunsparce_binodular.png'
import Staraptor from '../../assets/pokemons/pokemonVolador/300px-Staraptor.png'

// Ryme Pokemon
import Mimikyu from '../../assets/pokemons/pokemonFantasma/300px-Mimikyu.png'
import Banette from '../../assets/pokemons/pokemonFantasma/300px-Banette.png'
import Houndstone from '../../assets/pokemons/pokemonFantasma/300px-Houndstone.png'
import Toxtricity from '../../assets/pokemons/pokemonElectrico/300px-Toxtricity.png'

// Tulip Pokemon
import Farigiraf from '../../assets/pokemons/pokemonNormal/300px-Farigiraf.png'
import Gardevoir from '../../assets/pokemons/pokemonPsiquico/300px-Gardevoir.png'
import Espathra from '../../assets/pokemons/pokemonPsiquico/300px-Espathra.png'
import Florges from '../../assets/pokemons/pokemonHada/300px-Florges_roja.png'

// Grusha Pokemon
import Frosmoth from '../../assets/pokemons/pokemonHielo/300px-Frosmoth.png'
import Beartic from '../../assets/pokemons/pokemonHielo/300px-Beartic.png'
import Cetitan from '../../assets/pokemons/pokemonHielo/300px-Cetitan.png'
import Altaria from '../../assets/pokemons/pokemonDragon/300px-Altaria.png'

const gymLeadersPaldea = [
    {
      name: "Katy",
      image: imgKaty,
      city: "Pueblo Altamía",
      type: "Bicho",
      badge: "Medalla Bicho",
      imgBadge: medallaKaty,
      team: [
        { namePokemon: "Nymble", level: 14, imgPokemon: Nymble },
        { namePokemon: "Tarountula", level: 14, imgPokemon: Tarountula },
        { namePokemon: "Teddiursa - Teratipo Bicho", level: 15, imgPokemon: Teddiursa }
      ],
      rewards: {
        tm: "MT021 - Brinco",
        money: 2700
      }
    },
    {
      name: "Brassius",
      image: imgBrassius,
      city: "Ciudad Leudal",
      type: "Planta",
      badge: "Medalla Planta",
      imgBadge: medallaBrassius,
      team: [
        { namePokemon: "Petilil", level: 16, imgPokemon: Petilil },
        { namePokemon: "Smoliv", level: 16, imgPokemon: Smoliv },
        { namePokemon: "Sudowoodo - Teratipo Planta", level: 17, imgPokemon: Sudowoodo }
      ],
      rewards: {
        tm: "MT020 - Abrecaminos",
        money: 2880
      }
    },
    {
      name: "Iono",
      image: imgIono,
      city: "Ciudad Levincia",
      type: "Eléctrico",
      badge: "Medalla Electro",
      imgBadge: medallaIono,
      team: [
        { namePokemon: "Wattrel", level: 23, imgPokemon: Wattrel },
        { namePokemon: "Bellibolt", level: 23, imgPokemon: Bellibolt },
        { namePokemon: "Luxio", level: 23, imgPokemon: Luxio },
        { namePokemon: "Mismagius - Teratipo Eléctrico", level: 24, imgPokemon: Mismagius }
      ],
      rewards: {
        tm: "MT048 - Voltio Cambio",
        money: 4320
      }
    },
    {
      name: "Kofu",
      image: imgKofu,
      city: "Ciudad Cántara",
      type: "Agua",
      badge: "Medalla Agua",
      imgBadge: medallaKofu,
      team: [
        { namePokemon: "Veluza", level: 29, imgPokemon: Veluza },
        { namePokemon: "Wugtrio", level: 29, imgPokemon: Wugtrio },
        { namePokemon: "Crabominable - Teratipo Agua", level: 30, imgPokemon: Crabominable }
      ],
      rewards: {
        tm: "MT022 - Agua Fría",
        money: 5400
      }
    },
    {
      name: "Larry",
      image: imgLarry,
      city: "Ciudad Malvalea",
      type: "Normal",
      badge: "Medalla Normal",
      imgBadge: medallaLarry,
      team: [
        { namePokemon: "Komala", level: 35, imgPokemon: Komala },
        { namePokemon: "Dudunsparce", level: 35, imgPokemon: Dudunsparce },
        { namePokemon: "Staraptor - Teratipo Normal", level: 36, imgPokemon: Staraptor }
      ],
      rewards: {
        tm: "MT025 - Imagen",
        money: 6120
      }
    },
    {
      name: "Ryme",
      image: imgRyme,
      city: "Villa Hozkailu",
      type: "Fantasma",
      badge: "Medalla Espectro",
      imgBadge: medallaRyme,
      team: [
        { namePokemon: "Mimikyu", level: 41, imgPokemon: Mimikyu },
        { namePokemon: "Banette", level: 41, imgPokemon: Banette },
        { namePokemon: "Houndstone", level: 41, imgPokemon: Houndstone },
        { namePokemon: "Toxtricity - Teratipo Fantasma", level: 42, imgPokemon: Toxtricity }
      ],
      rewards: {
        tm: "MT114 - Bola Sombra",
        money: 7560
      }
    },
    {
      name: "Tulip",
      image: imgTulip,
      city: "Ciudad Alforno",
      type: "Psíquico",
      badge: "Medalla Psíquico",
      imgBadge: medallaTulip,
      team: [
        { namePokemon: "Farigiraf", level: 44, imgPokemon: Farigiraf },
        { namePokemon: "Gardevoir", level: 44, imgPokemon: Gardevoir },
        { namePokemon: "Espathra", level: 44, imgPokemon: Espathra },
        { namePokemon: "Florges - Teratipo Psíquico", level: 45, imgPokemon: Florges }
      ],
      rewards: {
        tm: "MT120 - Psiquico",
        money: 8100
      }
    },
    {
      name: "Grusha",
      image: imgGrusha,
      city: "Monte Napada",
      type: "Hielo",
      badge: "Medalla Hielo",
      imgBadge: medallaGrusha,
      team: [
        { namePokemon: "Frosmoth", level: 47, imgPokemon: Frosmoth },
        { namePokemon: "Beartic", level: 47, imgPokemon: Beartic },
        { namePokemon: "Cetitan", level: 47, imgPokemon: Cetitan },
        { namePokemon: "Altaria - Teratipo Hielo", level: 48, imgPokemon: Altaria }
      ],
      rewards: {
        tm: "MT124 - Pirueta Helada",
        money: 8640
      }
    }
  ];
  
export default gymLeadersPaldea;