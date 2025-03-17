import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useRegionId from '../hooks/useRegionId';
import typeTranslations from '../js/typeTranslations';
import usePokemonAbilities from '../hooks/usePokemonAbilities';

import Boton from './Boton';

function Card({ filteredList }) {
    const { regionName } = useRegionId();      
    
    const { abilitiesDetails } = usePokemonAbilities(filteredList[0]?.abilities);
    return (
        <>
            {filteredList?.map((poke) => {   

                return (
                    <div 
                        key={poke.id} 
                        className={`group rounded-lg border border-gray-200 overflow-hidden transition-all hover:shadow-lg ${typeTranslations[poke.types[0]?.type.name] || poke.types[0]?.type.name} shadow-lg`}
                    >
                        <div className='ml-1 mt-1 text-white text-sm font-medium absolute z-10 bg-black bg-opacity-50 px-2 py-1 rounded-full'>
                            <span>N° </span>
                            {poke.id}
                        </div>
                        <div className="p-4 flex-grow">
                            {poke.sprites?.other?.['official-artwork']?.front_default || 
                            poke.sprites?.other?.dream_world?.front_default || 
                            poke.sprites?.front_default ? (
                                <div className="aspect-square relative mb-3">
                                    <div className="absolute inset-0 img bg-slate-50 rounded-full">
                                        <img 
                                            src={
                                                poke.sprites?.other?.['official-artwork']?.front_default ||
                                                poke.sprites?.other?.dream_world?.front_default ||
                                                poke.sprites?.front_default
                                            }
                                            alt={poke.name}
                                            className='w-full h-full object-contain p-4 drop-shadow-custom hover:scale-125 hover:drop-shadow-customHover transition-transform duration-300'
                                        />
                                    </div>
                                </div>
                            ) : (
                                <span>No image available</span>
                            )}
                        
                            <div className="space-y-2">
                                <h2 className='font-semibold text-center text-white'>
                                    {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
                                </h2>                              
                                <div className="flex gap-2 justify-center flex-wrap relative">
                                    {poke.types.map((type, index) => {
                                        const translatedType = typeTranslations[type.type.name] || type.type.name;
                                        return(
                                            <span 
                                                key={index} 
                                                className={`${translatedType}2 px-2 pb-0.5 rounded-full text-sm leading-4 font-medium text-white border border-white`}
                                            >
                                                {translatedType}
                                            </span>
                                        )
                                    })}
                                </div> 
                            </div>
                            {/* Añadir las habilidades */}
                            <div className='flex justify-center gap-3 mt-4'>
                                {abilitiesDetails
                                .filter(ability => !ability.is_hidden)
                                .map((ability, index) => {
                                    return (
                                        <div key={index} className="">
                                                <h3 className="text-white font-semibold">{ability.spanishName}</h3>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        
                        
                        {/* Boton de ver mas */}
                        <div className="p-4 bg-black bg-opacity-50 rounded-b-lg">
                            <Link to={`/${regionName?.toLowerCase() || 'unknown'}/lista-pokemon/pokemon/${poke.name}`}>
                                <Boton />
                            </Link>         
                        </div>
                    </div>
                );
            })}
        </>
    );
}


export default Card;