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
import paldeaImage from './assets/paldea-region.jpg';
import { X } from 'lucide-react';

const regions = [
  { id: 'kanto',
    name: 'Kanto', 
    image: kantoImage,
    description: 'Es una región clásica con un diseño basado en Japón central. Aquí comienza la aventura Pokémon original.',
    professor: 'El Profesor Oak',
    starterPokemons: ['Bulbasaur', 'Charmander', 'Squirtle'],
    villain: 'Team Rocket',
    legendaryPokemons: ['Articuno', 'Zapdos', 'Moltres'],
  },
  { id: 'johto',
    name: 'Johto', 
    image: johtoImage,
    description: 'Es una región culturalmente rica inspirada en el Japón occidental.',
    professor: 'El Profesor Elm',
    starterPokemons: ['Chikorita', 'Cyndaquil', 'Totodile'],
    villain: 'Team Rocket',
    legendaryPokemons: ['Ho-Oh', 'Lugia'],
  },
  { id: 'hoenn',
    name: 'Hoenn', 
    image: hoenImage,
    description: 'Una región tropical y diversa, con ecosistemas que van desde selvas hasta desiertos.',
    professor: 'El Profesor Birch',
    starterPokemons: ['Treecko', 'Torchic', 'Mudkip'],
    villain: 'Team Magma y Team Aqua',
    legendaryPokemons: ['Groudon', 'Kyogre', 'Rayquaza'],
  },
  { id: 'sinnoh',
    name: 'Sinnoh', 
    image: sinnohImage,
    description: 'Inspirada en la isla japonesa de Hokkaido, es conocida por su conexión con la mitología y los orígenes del mundo Pokémon.',
    professor: 'El Profesor Rowan',
    starterPokemons: ['Turtwig', 'Chimchar', 'Piplup'],
    villain: 'Team Galactic',
    legendaryPokemons: ['Dialga', 'Palkia', 'Giratina'],
  },
  { id: 'teselia',
    name: 'Teselia', 
    image: teseliaImage,
    description: 'Una región inspirada en Nueva York, con un enfoque urbano y moderno.', 
    professor: 'La Profesor Juniper',
    starterPokemons: ['Snivy', 'Tepig', 'Oshawott'],
    villain: 'Team Plasma',
    legendary: ['Reshiram, Zekrom, Kyurem'],
  },
  { id: 'kalos',
    name: 'Kalos', 
    image: kalosImage,
    description: 'Inspirada en Francia, es una región elegante con énfasis en la belleza y la moda.',
    professor: 'El Profesor Sycamore',
    starterPokemons: ['Chespin', 'Feenekin', 'Froakie'],
    villain: 'Team Flare',
    legendaryPokemons: ['Xerneas', 'Yveltal', 'Zygarde'],
  },
  { id: 'alola',
    name: 'Alola', 
    image: alolaImage,
    description: 'Una región inspirada en Hawái, es una región con un sistema único de pruebas en lugar de gimnasios tradicionales.',
    professor: 'El Profesor Kukui',
    starterPokemons: ['Rowlet', 'Litten', 'Popplio'],
    villain: 'Team Skull y Fundación Æther',
    legendaryPokemons: ['Solgaleo', 'Lunala'],
  },
  { id: 'galar',
    name: 'Galar', 
    image: galarImage,
    description: 'Basada en el Reino Unido, mezcla tradición con modernidad.', 
    professor: 'La Profesor Magnolia',
    starterPokemons: ['Grookey', 'Scorbunny', 'Sobble'],
    villain: 'Team Yell y El Presidente Rose',
    legendaryPokemons: ['Zacian', 'Zamazenta', 'Eternatus'],
  },
  {
    id: 'paldea',
    name: 'Paldea',
    image: paldeaImage,
    description: 'Región inspirada en la Península Ibérica, con paisajes diversos y cultura vibrante.',
    professor: 'Clavel y Sada/Turo',
    starterPokemons: ['Sprigatito', 'Fuecoco', 'Quaxly'],
    villain: 'El Team Star y la Fundación Área Cero',
    legendaryPokemons: ['Koraidon', 'Miraidon', 'Los cuatro tesoros de la ruina (Wo-Chien, Chien-Pao, Ting-Lu, Chi-Yu)'],
  }
];

function Home() {
  const [animatedRegions, setAnimatedRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState(null)
  const navigate = useNavigate();

  const handleRegionClick = (regionName) => {
    navigate(`/${regionName.toLowerCase()}`);
    // console.log(regionName.toLowerCase())
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedRegions(regions.map(region => region.id))
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <main className="container mx-auto px-4 py-8 pt-28">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {regions.map((region) => (
            <div key={region.id} 
              className={`transform transition-all duration-500 ${animatedRegions.includes(region.id) ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} 
              // onClick={() => handleRegionClick(region.name)}
            >
              <div onClick={() => setSelectedRegion(region)} className="group rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer bg-white border border-gray-700">
                <div className='aspect-video overflow-hidden'>
                  <img 
                    src={region.image} 
                    alt={`Mapa de la región ${region.name}`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <div className='p-6'>
                  <h2 className='text-gray-800 text-xl font-semibold mb-2'>{region.name}</h2>
                  <p className='text-gray-800 line-clamp-2'>{region.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Modal */}
      {selectedRegion && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-gray-800 rounded-lg shadow-xl my-8">
            <div className="p-6 max-h-[100vh] overflow-y-auto">
              <button
                onClick={() => setSelectedRegion(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
                <span className="sr-only">Cerrar</span>
              </button>
              
              <h2 className="text-gray-300 text-2xl font-bold mb-2">{selectedRegion.name}</h2>
              <p className="text-gray-400 mb-4">{selectedRegion.description}</p>
              
              <img
                src={selectedRegion.image}
                alt={`Mapa de la región ${selectedRegion.name}`}
                className="w-full rounded-lg mb-4"
              />
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-gray-300 font-semibold mb-1">Profesor:</h3>
                  <p className="text-gray-400">{selectedRegion.professor}</p>
                </div>
                
                <div>
                  <h3 className="text-gray-300 font-semibold mb-1">Pokémon Iniciales:</h3>
                  <p className="text-gray-400">{selectedRegion.starterPokemons.join(', ')}</p>
                </div>
                
                <div>
                  <h3 className="text-gray-300 font-semibold mb-1">Villanos:</h3>
                  <p className="text-gray-400">{selectedRegion.villain}</p>
                </div>
                
                <div>
                  <h3 className="text-gray-300 font-semibold mb-1">Pokémon Legendarios:</h3>
                  <p className="text-gray-400">{selectedRegion.legendaryPokemons.join(', ')}</p>
                </div>
              </div>
              <div className="mt-4">
                <button
                  onClick={() => handleRegionClick(selectedRegion.name)}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors duration-300 flex items-center justify-center"
                >
                  Ver Más <span className="mx-2">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:regionName" element={<RegionDetail />} />
        <Route path="/:regionName/lista-pokemon" element={<PokemonPage />} />
        <Route path="/:regionName/lista-pokemon/pokemon/:name" element={<PokemonDetails />} />
      </Routes>
    </Router>
  );
}

export default App;