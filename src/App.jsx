import { useEffect, useState } from 'react';
import { useFetch } from './useFetch';
import Filter from './Filter';
import Card from './Card';
import './App.css';

function App() {
  const [generationUrl, setGenerationUrl] = useState(null);
  const [data, setData] = useState(null);
  const { data: fetchedData, loading, error } = useFetch(generationUrl);

  // Actualiza los datos cuando `fetchedData` cambia
  useEffect(() => {
    setData(fetchedData);
  }, [fetchedData]);

  const handleCategoryChange = (category, option) => {
    // Limpiar datos antes de cambiar la URL
    setData(null);
    if (category === 'region' && option) {
      setGenerationUrl(`https://pokeapi.co/api/v2/generation/${option}`);
    } else if (category === 'type' && option) {
      setGenerationUrl(`https://pokeapi.co/api/v2/type/${option}`);
    } else if (category === 'ability' && option) {
      setGenerationUrl(`https://pokeapi.co/api/v2/ability/${option}`);
    }
  };

  return (
    <>
      <Filter onCategoryChange={handleCategoryChange} />
      {generationUrl && (
        <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {error && <div>Error: {error}</div>}
          {loading && <div>Loading...</div>}
          {data && <Card data={data} />} {/* Renderizar solo si hay datos */}
        </div>
      )}
    </>
  );
}

export default App;