import { useState } from 'react';
import { useFetch } from './useFetch';
import Filter from './Filter';
import './App.css';

function App() {
  const [generationUrl, setGenerationUrl] = useState(null);
  const { data, loading, error } = useFetch(generationUrl);

  const handleCategoryChange = (category, option) => {
    if (category === 'region' && option) {
      setGenerationUrl(`https://pokeapi.co/api/v2/generation/${option}`);
    } if (category === 'type' && option) {
      setGenerationUrl(`https://pokeapi.co/api/v2/type/${option}`);
    } if (category === 'ability' && option) {
      setGenerationUrl(`https://pokeapi.co/api/v2/ability/${option}`);
    }
  };

  return (
    <>
      <Filter onCategoryChange={handleCategoryChange} />
      {generationUrl && ( // Solo renderizar cuando haya una URL de generación seleccionada
          <div className="flex flex-wrap gap-6">
          {error && <div>Error: {error}</div>}
          {loading && <div>Loading...</div>}
          {data?.map((poke) => (
            <div className="flex flex-col bg-gray-300 border border-white rounded-md w-28 text-black" key={poke.id}>
              {poke.sprites?.other?.['official-artwork']?.front_default || 
                poke.sprites?.other?.dream_world?.front_default || 
                poke.sprites?.front_default ? (
                  <img 
                    src={
                      poke.sprites?.other?.['official-artwork']?.front_default ||
                      poke.sprites?.other?.dream_world?.front_default ||
                      poke.sprites?.front_default
                    }
                    alt={poke.name}
                    className='w-24'
                  />
                ) : (
                  <span>No image available</span>
              )}
              <div className='flex justify-center gap-3 border border-white'>
                {/* <p className="">{poke.id}°</p> */}
                <h3 className="">{poke.name}</h3>
              </div> 
              <div className="flex justify-center gap-3">
                {poke.types.map(type => (
                  <span key={type.type.name} className='text-xs'>
                    {type.type.name}
                  </span>
                ))}
              </div>          
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;