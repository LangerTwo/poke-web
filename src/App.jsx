import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import RegionDetail from './page/RegionDetail';
import PokemonPage from './page/pokemonPage';
import PokemonDetails from './page/PokemonDetails';
import Navbar from './component/Navbar';
import './index.css';

import kantoImage from './assets/kanto-region.png';
import johtoImage from './assets/johto-region.png';
import hoenImage from './assets/hoen-region.png';
import sinnohImage from './assets/sinnoh-region.png';
import teseliaImage from './assets/teselia-region.png';
import kalosImage from './assets/kalos-region.png';
import alolaImage from './assets/alola-region.png';
import galarImage from './assets/galar-region.png';

const regions = [
  { name: 'Kanto', 
    image: kantoImage,
    description: 'Es una región clásica con un diseño basado en Japón central. Aquí comienza la aventura Pokémon original, guiada por el profesor Oak, quien da a elegir entre los iniciales: Bulbasaur, Charmander y Squirtle. Los villanos son el infame Team Rocket, liderado por Giovanni, quienes buscan dominar el mundo con sus experimentos y robos de Pokémon. La región cuenta con ocho gimnasios y la Liga Pokémon en la meseta Añil.',
  },
  { name: 'Johto', 
    image: johtoImage,
    description: 'Es una región culturalmente rica inspirada en el Japón occidental. El profesor Elm es el investigador principal y presenta a los iniciales: Chikorita, Cyndaquil y Totodile. En esta generación, los villanos son nuevamente el Team Rocket, aunque en un intento desesperado por recuperar su antigua gloria. La región se caracteriza por sus leyendas, como las torres Quemada y Campana, y la introducción de los Pokémon legendarios Ho-Oh y Lugia.',
  },
  { name: 'Hoenn', 
    image: hoenImage,
    description: 'Una región tropical y diversa, con ecosistemas que van desde selvas hasta desiertos. El profesor Birch, un investigador amante del campo, entrega los iniciales: Treecko, Torchic y Mudkip. En esta generación, los villanos se dividen en dos grupos opuestos: el Team Magma, que busca expandir la tierra, y el Team Aqua, que desea cubrir el mundo con agua. La mitología de la región incluye a los legendarios Groudon, Kyogre y Rayquaza.',
  },
  { name: 'Sinnoh', 
    image: sinnohImage,
    description: 'Inspirada en la isla japonesa de Hokkaido, es conocida por su conexión con la mitología y los orígenes del mundo Pokémon. El profesor Rowan guía a los entrenadores, ofreciendo como iniciales: Turtwig, Chimchar y Piplup. Los villanos, el Team Galactic, liderados por Cyrus, buscan crear un nuevo universo utilizando el poder de los legendarios Dialga y Palkia. Sinnoh introduce mecánicas como la evolución por amistad y el concepto del Mundo Distorsión.',
  },
  { name: 'Unova', 
    image: teseliaImage,
    description: 'Una región inspirada en Nueva York, con un enfoque urbano y moderno. El profesor Juniper introduce a los iniciales: Snivy, Tepig y Oshawott. En esta generación, el villano principal es el Team Plasma, liderado por N y Ghetsis, quienes afirman querer liberar a los Pokémon, pero en realidad buscan controlarlos. La región incluye un extenso lore sobre los dragones legendarios Reshiram, Zekrom y Kyurem.', 
  },
  { name: 'Kalos', 
    image: kalosImage,
    description: 'Inspirada en Francia, es una región elegante con énfasis en la belleza y la moda. El profesor Sycamore es el encargado de ofrecer los iniciales: Chespin, Fennekin y Froakie. Los villanos son el Team Flare, cuyo líder, Lysandre, busca un mundo "perfecto" incluso a costa de destruirlo. Kalos introduce las megaevoluciones y tiene como legendarios principales a Xerneas, Yveltal y Zygarde.', 
  },
  { name: 'Alola', 
    image: alolaImage,
    description: 'Una región inspirada en Hawái, es una región con un sistema único de pruebas en lugar de gimnasios tradicionales. El profesor Kukui guía a los entrenadores, quienes pueden elegir entre los iniciales: Rowlet, Litten y Popplio. Los villanos son el caótico Team Skull y la organización secreta conocida como la Fundación Æther, liderada por Lusamine. Alola es la primera región en introducir formas regionales de Pokémon y los legendarios Solgaleo y Lunala.', 
  },
  { name: 'Galar', 
    image: galarImage,
    description: 'Basada en el Reino Unido, mezcla tradición con modernidad. El profesor Magnolia y su nieta Sonia investigan el fenómeno Dinamax, mientras los entrenadores eligen entre los iniciales: Grookey, Scorbunny y Sobble. El equipo de villanos es el Team Yell, un grupo de fanáticos caóticos, mientras que los verdaderos antagonistas, como Rose, trabajan detrás de escena. Galar introduce los combates de estadio y los legendarios Zacian, Zamazenta y Eternatus.', 
  },
];

function Home() {
  const navigate = useNavigate();

  const handleRegionClick = (regionName) => {
    navigate(`/region/${regionName.toLowerCase()}`);
    console.log(regionName.toLowerCase())
  };

  return (
    <div className="w-full lg:mx-auto lg:w-[90%] grid grid-cols-1 pt-24 gap-4">
      {regions.map((region) => (
        <div key={region.name} className="grid lg:grid-cols-2 md:grid-cols-2 cursor-pointer border rounded-lg" onClick={() => handleRegionClick(region.name)}>
          <div className='p-4 transform'>
            <img src={region.image} alt={region.name} className="w-full rounded transition duration-150 ease-out hover:scale-105" />
          </div>
          <div className='p-4 flex flex-col gap-8'>
            <h2>{region.name}</h2>
            <p className=''>{region.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/region/:regionName" element={<RegionDetail />} />
        <Route path="/region/:regionName/lista-pokemon" element={<PokemonPage />} />
        <Route path="/region/:regionName/lista-pokemon/pokemon/:name" element={<PokemonDetails />} />
      </Routes>
    </Router>
  );
}

export default App;