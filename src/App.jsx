import React, { useEffect, useState } from 'react';
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
  { id: 'kanto',
    name: 'Kanto', 
    image: kantoImage,
    description: 'Es una región clásica con un diseño basado en Japón central. Aquí comienza la aventura Pokémon original, guiada por el profesor Oak, quien da a elegir entre los iniciales: Bulbasaur, Charmander y Squirtle. Los villanos son el infame Team Rocket, liderado por Giovanni, quienes buscan dominar el mundo con sus experimentos y robos de Pokémon. La región cuenta con ocho gimnasios y la Liga Pokémon en la meseta Añil.',
  },
  { id: 'johto',
    name: 'Johto', 
    image: johtoImage,
    description: 'Es una región culturalmente rica inspirada en el Japón occidental. El profesor Elm es el investigador principal y presenta a los iniciales: Chikorita, Cyndaquil y Totodile. En esta generación, los villanos son nuevamente el Team Rocket, aunque en un intento desesperado por recuperar su antigua gloria. La región se caracteriza por sus leyendas, como las torres Quemada y Campana, y la introducción de los Pokémon legendarios Ho-Oh y Lugia.',
  },
  { id: 'hoenn',
    name: 'Hoenn', 
    image: hoenImage,
    description: 'Una región tropical y diversa, con ecosistemas que van desde selvas hasta desiertos. El profesor Birch, un investigador amante del campo, entrega los iniciales: Treecko, Torchic y Mudkip. En esta generación, los villanos se dividen en dos grupos opuestos: el Team Magma, que busca expandir la tierra, y el Team Aqua, que desea cubrir el mundo con agua. La mitología de la región incluye a los legendarios Groudon, Kyogre y Rayquaza.',
  },
  { id: 'sinnoh',
    name: 'Sinnoh', 
    image: sinnohImage,
    description: 'Inspirada en la isla japonesa de Hokkaido, es conocida por su conexión con la mitología y los orígenes del mundo Pokémon. El profesor Rowan guía a los entrenadores, ofreciendo como iniciales: Turtwig, Chimchar y Piplup. Los villanos, el Team Galactic, liderados por Cyrus, buscan crear un nuevo universo utilizando el poder de los legendarios Dialga y Palkia. Sinnoh introduce mecánicas como la evolución por amistad y el concepto del Mundo Distorsión.',
  },
  { id: 'teselia',
    name: 'Teselia', 
    image: teseliaImage,
    description: 'Una región inspirada en Nueva York, con un enfoque urbano y moderno. El profesor Juniper introduce a los iniciales: Snivy, Tepig y Oshawott. En esta generación, el villano principal es el Team Plasma, liderado por N y Ghetsis, quienes afirman querer liberar a los Pokémon, pero en realidad buscan controlarlos. La región incluye un extenso lore sobre los dragones legendarios Reshiram, Zekrom y Kyurem.', 
  },
  { id: 'kalos',
    name: 'Kalos', 
    image: kalosImage,
    description: 'Inspirada en Francia, es una región elegante con énfasis en la belleza y la moda. El profesor Sycamore es el encargado de ofrecer los iniciales: Chespin, Fennekin y Froakie. Los villanos son el Team Flare, cuyo líder, Lysandre, busca un mundo "perfecto" incluso a costa de destruirlo. Kalos introduce las megaevoluciones y tiene como legendarios principales a Xerneas, Yveltal y Zygarde.', 
  },
  { id: 'alola',
    name: 'Alola', 
    image: alolaImage,
    description: 'Una región inspirada en Hawái, es una región con un sistema único de pruebas en lugar de gimnasios tradicionales. El profesor Kukui guía a los entrenadores, quienes pueden elegir entre los iniciales: Rowlet, Litten y Popplio. Los villanos son el caótico Team Skull y la organización secreta conocida como la Fundación Æther, liderada por Lusamine. Alola es la primera región en introducir formas regionales de Pokémon y los legendarios Solgaleo y Lunala.', 
  },
  { id: 'galar',
    name: 'Galar', 
    image: galarImage,
    description: 'Basada en el Reino Unido, mezcla tradición con modernidad. La profesor Magnolia y su nieta Sonia investigan el fenómeno Dinamax, mientras los entrenadores eligen entre los iniciales: Grookey, Scorbunny y Sobble. El equipo de villanos es el Team Yell, un grupo de fanáticos caóticos, mientras que los verdaderos antagonistas, como Rose, trabajan detrás de escena. Galar introduce los combates de estadio y los legendarios Zacian, Zamazenta y Eternatus.', 
  },
];

function Home() {
  const [animatedRegions, setAnimatedRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState(null)
  const navigate = useNavigate();

  const handleRegionClick = (regionName) => {
    navigate(`/region/${regionName.toLowerCase()}`);
    // console.log(regionName.toLowerCase())
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedRegions(regions.map(region => region.id))
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="container mx-auto px-4 py-8 pt-28">
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {regions.map((region) => (
          <div key={region.id} 
            className={`transform transition-all duration-500 ${animatedRegions.includes(region.id) ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} 
            onClick={() => handleRegionClick(region.name)}
          >
            <div onClick={() => setSelectedRegion(region)} className="group rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer bg-gray-800 border border-gray-700">
              <div className='aspect-video overflow-hidden'>
                <img 
                  src={region.image} 
                  alt={`Mapa de la región ${region.name}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className='p-6'>
                <h2 className='text-gray-400 text-xl font-semibold mb-2'>{region.name}</h2>
                <p className='text-gray-400 line-clamp-2'>{region.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
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