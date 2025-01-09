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
                    <div className="group bg-white rounded-lg border border-gray-200 overflow-hidden transition-all hover:shadow-lg" key={poke.id}>
                        <h2 className='absolute'>{poke.id}</h2>
                        <div className="p-4 flex-grow">
                            {poke.sprites?.other?.['official-artwork']?.front_default || 
                            poke.sprites?.other?.dream_world?.front_default || 
                            poke.sprites?.front_default ? (
                                <div className="aspect-square relative mb-3">
                                    <div className='absolute inset-0 bg-gray-100 rounded-lg group-hover:scale-110 transition-transform duration-300'>
                                        <img 
                                            src={
                                                poke.sprites?.other?.['official-artwork']?.front_default ||
                                                poke.sprites?.other?.dream_world?.front_default ||
                                                poke.sprites?.front_default
                                            }
                                            alt={poke.name}
                                            className='w-full h-full object-contain p-4'
                                        />
                                    </div>
                                </div>
                            ) : (
                                <span>No image available</span>
                            )}
                        
                            <div className="space-y-2">
                                <h2 className='font-semibold text-center'>
                                    {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
                                </h2>                              
                                <div className="flex gap-2 justify-center flex-wrap">
                                    {poke.types.map(type => (
                                        <span key={type.type.name} className={`${type.type.name} px-2.5 py-0.5 rounded-full text-sm font-medium text-white`}>
                                            {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
                                        </span>
                                    ))}
                                </div> 
                            </div>
                        </div>
                        <div className="p-4 bg-gray-50 border-t border-gray-100">
                            <Link to={`/region/${regionName?.toLowerCase() || 'unknown'}/lista-pokemon/pokemon/${poke.name}`}>
                                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors duration-300 flex items-center justify-center">
                                View <span className="mx-2">→</span>
                                </button>
                            </Link>         
                        </div>
                    </div>
            ))}
        </>
    );
}

export default Card;