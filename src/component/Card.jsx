import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useRegionId from '../hooks/useRegionId';

import { ArrowRight} from 'lucide-react';

function Card({ filteredList }) {
    const { regionName } = useRegionId();

    return (
        <>
            {filteredList?.map((poke) => {
                const mainType = poke.types[0]?.type.name; // Obtener el primer tipo

                return (
                    <div 
                        key={poke.id} 
                        className={`group rounded-lg border border-gray-200 overflow-hidden transition-all hover:shadow-lg ${mainType} shadow-lg`}
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
                                    {poke.types.map(type => (
                                        <span 
                                            key={type.type.name} 
                                            className={`${type.type.name} px-2.5 py-1 rounded-full text-sm font-medium text-white border border-white type`}
                                        >
                                            {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
                                        </span>
                                    ))}
                                </div> 
                            </div>
                        </div>
                        {/* añadir pero y altura */}
                        <div className='flex flex-col items-center gap-2 justify-center flex-wrap relative'>
                            <div className='flex gap-2 items-center'>
                                <span className='font-semibold text-white'>Peso:</span>
                                <span className='text-white'>{poke.weight} kg</span>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <span className='font-semibold text-white'>Altura:</span>
                                <span className='text-white'>{poke.height} m</span>
                            </div>                                                   
                        </div>
                        <div className="p-4">
                            <Link to={`/${regionName?.toLowerCase() || 'unknown'}/lista-pokemon/pokemon/${poke.name}`}>
                                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors duration-300 flex items-center justify-center hover:shadow-md hover:scale-105 hover:translate-y-0.5 cssbuttons-io-button relative border border-white">
                                    Ver Más 
                                    <div className='icon'>
                                        <ArrowRight className="w-6 h-6 ml-2 arrow" />
                                    </div>
                                </button>
                            </Link>         
                        </div>
                    </div>
                );
            })}
        </>
    );
}


export default Card;