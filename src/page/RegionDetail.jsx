import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
// import PokemonPage from './pokemonPage';

import listPoke from '../assets/list-poke.jpg';

function RegionDetail() {
    const { regionName } = useParams();
    const [generationUrl, setGenerationUrl] = useState(``);
    const navigate = useNavigate();

    useEffect(() => {
        if (regionName) {
            // console.log("RegionName:", regionName);
            // console.log("URL Param (regionName):", regionName);
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
        <div className="region-grid w-[90%] mx-auto container pt-24">
            <div onClick={() => handleRegionClick()} className='region-card w-[80%] hover:border-red-600'>
                <img className='w-full h-80 rounded-md' src={listPoke} alt="" />
                <h3 className='mt-3'>
                    Lista Pokémon
                </h3>
            </div>
            <div className='region-card w-[80%] hover:border-red-600 mt-3'>
                <h3>Líderes de Gimnasio</h3>
            </div>
        </div>
    );
}

export default RegionDetail;
