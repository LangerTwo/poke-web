import React from 'react';
import { Link } from 'react-router-dom';

function Card({ data }) { // Recibe data como prop
    return (
        <>
            {data?.map((poke) => (
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
                        <div className='mb-2'>
                            <Link to={`/pokemon/${poke.name}`}>
                                <h3 className='hover:underline'>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</h3>
                            </Link>
                        </div> 
                        <div className="flex justify-around">
                            {poke.types.map(type => (
                                <span key={type.type.name} className={`${type.type.name} rounded py-1 px-2 text-white`}>
                                    {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
                                </span>
                            ))}
                        </div>          
                    </div>
                </div>
            ))}
        </>
    );
}

export default Card;