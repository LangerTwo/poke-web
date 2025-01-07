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
                <Link to={`/region/${regionName?.toLowerCase() || 'unknown'}/lista-pokemon/pokemon/${poke.name}`}>
                    <div className="group cursor-pointer bg-gray-100 rounded-md shadow-sm hover:shadow-lg text-black" key={poke.id}>
                        {poke.sprites?.other?.['official-artwork']?.front_default || 
                        poke.sprites?.other?.dream_world?.front_default || 
                        poke.sprites?.front_default ? (
                            <div className='w-full border rounded-t-lg relative'>
                                <img 
                                    src={
                                        poke.sprites?.other?.['official-artwork']?.front_default ||
                                        poke.sprites?.other?.dream_world?.front_default ||
                                        poke.sprites?.front_default
                                    }
                                    alt={poke.name}
                                    className='w-[90%] mx-auto group-hover:scale-75 transition-transform duration-500'
                                />
                            </div>
                        ) : (
                            <span>No image available</span>
                        )}
                        <div className="px-2 py-2 text-center rounded-b-lg bg-red-600 group-hover:bg-red-500 transition-transform duration-500">
                                <div className='mb-2 text-white'>
                                        <h3 className='group-hover:underline underline-offset-2'>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</h3>                             
                                </div> 
                                <div className="flex justify-around">
                                    {poke.types.map(type => (
                                        <span key={type.type.name} className={`${type.type.name} border-2 rounded py-1 px-2 text-white`}>
                                            {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
                                        </span>
                                    ))}
                                </div> 
                        </div>
                    </div>
                </Link>         
            ))}
        </>
    );
}

export default Card;