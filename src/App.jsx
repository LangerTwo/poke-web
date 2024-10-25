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
    }
  };

  return (
    <>
      <Filter onCategoryChange={handleCategoryChange} />
      {generationUrl && ( // Solo renderizar cuando haya una URL de generación seleccionada
          <div className="">
          {error && <div>Error: {error}</div>}
          {loading && <div>Loading...</div>}
          {data?.map((poke) => (
            <div className="flex w-full justify-between border items-center" key={poke.id}>
              <p className="text-xl">{poke.id}°</p>
              {poke.sprites?.other?.dream_world?.front_default && (
                <img 
                  src={poke.sprites.other.dream_world.front_default} 
                  alt={poke.name} 
                  className="h-10 w-10 cursor-pointer"
                />
              )}
              <div>
                <h3 className="text-xl">{poke.name}</h3>
              </div> 
              <div className="flex gap-5">
                {poke.types.map(type => (
                  <span key={type.type.name} className={`${type.type.name}`}>
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