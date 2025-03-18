import React from 'react';
import { Link } from 'react-router-dom';
import useRegionId from '../hooks/useRegionId';
import typeTranslations from '../js/typeTranslations';
import Boton from './Boton';

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const getPokemonImage = (sprites) => {
    return sprites?.other?.['official-artwork']?.front_default ||
           sprites?.other?.dream_world?.front_default ||
           sprites?.front_default ||
           null;
};

function Card({ filteredList }) {
    const { regionName } = useRegionId();      
    
    return (
        <>
            {filteredList?.map((poke) => {   
                const imageUrl = getPokemonImage(poke.sprites);
                const primaryType = typeTranslations[poke.types?.[0]?.type.name] || poke.types?.[0]?.type.name;

                return (
                    <div 
                        key={poke.id} 
                        className={`group rounded-lg border border-gray-200 overflow-hidden transition-all hover:shadow-lg ${primaryType} shadow-lg`}
                    >
                        <div className='ml-1 mt-1 text-white text-sm font-medium absolute z-10 bg-black bg-opacity-50 px-2 py-1 rounded-full'>
                            <span>N° </span>{poke.id}
                        </div>
                        <div className="p-4 flex-grow">
                            {imageUrl  ? (
                                <div className="aspect-square relative mb-3">
                                    <div className="absolute inset-0 img bg-slate-50 rounded-full">
                                        <img 
                                            src={imageUrl}
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
                                    {capitalize(poke.name)}
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
                                {poke.abilities?.map(({ ability, is_hidden }, index) => 
                                    !is_hidden && (
                                        <div key={index}>
                                            <h3 className="text-white font-semibold">{capitalize(ability.name)}</h3>
                                        </div>
                                    )
                                )}
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