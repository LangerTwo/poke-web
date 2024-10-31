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
          <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-4">
          {error && <div>Error: {error}</div>}
          {loading && <div>Loading...</div>}
          {data?.map((poke) => (
            <div className="bg-gray-300 border border-white rounded-md text-black" key={poke.id}>
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
                    className='w-full'
                  />
                ) : (
                  <span>No image available</span>
              )}
              <div className="p-1 text-center">
                <div className=''>
                  {/* <p className="">{poke.id}°</p> */}
                  <h3 className="">{poke.name}</h3>
                </div> 
                <div className="flex justify-around">
                  {poke.types.map(type => (
                    <span key={type.type.name} className={`${type.type.name} rounded py-1 px-2 text-white`}>
                      {type.type.name}
                    </span>
                  ))}
                </div>          
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;