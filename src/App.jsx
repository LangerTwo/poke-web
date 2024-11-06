import { useState } from 'react';
import { useFetch } from './useFetch';
import Filter from './Filter';
import Card from './Card';
import './App.css';

function App() {
  const [generationUrl, setGenerationUrl] = useState(null);
  const { data, loading, error } = useFetch(generationUrl);

  const handleCategoryChange = (category, option) => {
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
          <Card data={data} /> {/* Pasar data como prop */}
        </div>
      )}
    </>
  );
}

export default App;