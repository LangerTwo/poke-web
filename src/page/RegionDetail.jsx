import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
// import PokemonPage from './pokemonPage';

function RegionDetail() {
    const { regionName } = useParams();
    const [generationUrl, setGenerationUrl] = useState(``);
    const navigate = useNavigate();

    useEffect(() => {
        if (regionName) {
            console.log("RegionName:", regionName);
            console.log("URL Param (regionName):", regionName);
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

    const handleRegionClick = () => {
        navigate(`/region/${regionName?.toLowerCase() || 'unknown'}/lista-pokemon`);
    };

    return (
        <div className="region-grid mx-auto container pt-24">
            <div className='region-card hover:border-blue-500'>
                <h3 onClick={() => handleRegionClick()}>
                    Lista Pokémon
                </h3>
            </div>
            <div className='region-card'>
                <h3>Líderes de Gimnasio</h3>
            </div>
        </div>
    );
}

export default RegionDetail;
