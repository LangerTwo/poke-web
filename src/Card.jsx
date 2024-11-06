import React from 'react';
import './App.css';

function Card({ data }) { // Recibe data como prop
    return (
        <>
            {data?.map((poke) => (
                <div className="bg-gray-300 border border-white rounded-md text-black" key={poke.id}>
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
                    <div className="p-1 text-center">
                        <div className='mb-2'>
                            <h3 className="">{poke.name}</h3>
                        </div> 
                        <div className="flex justify-around">
                            {poke.types.map(type => (
                                <span key={type.type.name} className={`${type.type.name} rounded py-1 px-2 text-white`}>
                                    {type.type.name}
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