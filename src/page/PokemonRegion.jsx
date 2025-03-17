import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import { X } from 'lucide-react';
import Boton from '../component/Boton';
import regions from '../js/regions';

function PokemonRegion() {
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
              <div className="mt-4" onClick={() => handleRegionClick(selectedRegion.name)}>
                <Boton />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PokemonRegion;