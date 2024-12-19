import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Card({ filteredList }) { // Recibe data como prop

    const { regionName } = useParams();
    const [generationUrl, setGenerationUrl] = useState(``);

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

    return (
        <>
            {filteredList?.map((poke) => (
                <div className="cursor-pointer bg-gray-300 border border-white rounded-md text-black" key={poke.id}>
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
                    <div className="p-4 text-center">
                        <Link to={`/region/${regionName?.toLowerCase() || 'unknown'}/lista-pokemon/pokemon/${poke.name}`}>
                            <div className='mb-2'>
                                    <h3 className='hover:underline'>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</h3>                             
                            </div> 
                            <div className="flex justify-around">
                                {poke.types.map(type => (
                                    <span key={type.type.name} className={`${type.type.name} rounded py-1 px-2 text-white`}>
                                        {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
                                    </span>
                                ))}
                            </div> 
                        </Link>         
                    </div>
                </div>
            ))}
        </>
    );
}

export default Card;