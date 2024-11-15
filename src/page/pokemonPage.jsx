import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../useFetch';
import Filter from '../component/Filter';
import Card from '../component/Card';
// import './PokemonPage.css';

function PokemonPage() {
  const { regionName } = useParams();
  const [generationUrl, setGenerationUrl] = useState(``);
  const [data, setData] = useState(null);
  const { data: fetchedData, loading, error } = useFetch(generationUrl);

  useEffect(() => {
    if (regionName) {
      // Convierte el nombre de la región a minúsculas para coincidir con la API
      const regionIdMap = {
        kanto: 1,
        johto: 2,
        hoenn: 3,
        sinnoh: 4,
        unova: 5,
        kalos: 6,
        alola: 7,
        galar: 8
      };
      const regionId = regionIdMap[regionName.toLowerCase()];
      if (regionId) {
        setGenerationUrl(`https://pokeapi.co/api/v2/generation/${regionId}`);
      }
    }
  }, [regionName]);

  useEffect(() => {
    setData(fetchedData);
  }, [fetchedData]);

  const handleCategoryChange = (category, option) => {
    // setData(null);
    if (category === 'type' && option) {
      setGenerationUrl(`https://pokeapi.co/api/v2/type/${option}`);
    } else if (category === 'ability' && option) {
      setGenerationUrl(`https://pokeapi.co/api/v2/ability/${option}`);
    }
  };

  return (
    <>
      <Filter onCategoryChange={handleCategoryChange} />
      <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {error && <div>Error: {error}</div>}
        {loading && <div>Loading...</div>}
        {data && <Card data={data} />}
      </div>
    </>
  );
}

export default PokemonPage;