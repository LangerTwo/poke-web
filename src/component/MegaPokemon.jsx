import React, { useState } from "react";
import typeTranslations from "../js/typeTranslations";
import abilityTranslations from "../js/abilityTranslations";

const MegaEvolutions = ({ megaEvolutions }) => {
    if (!megaEvolutions || megaEvolutions.length === 0) {
        return <p className="text-gray-500">No hay Mega Evoluciones disponibles.</p>;
    }

    return (
        <div className="">
            <div className="flex">
                {megaEvolutions.map((mega) => {
                    // console.log("Mega evolución:", mega); // Verifica la estructura de los datos

                    return (
                        <div key={mega.name} className="text-center">
                            {/* Tipos, nombre, Id */}
                            <div className='flex justify-between items-center gap-2 mt-4'>
                                <div className='flex items-center gap-2'>
                                    <h1 className='text-3xl font-bold capitalize'>{mega.name}</h1>
                                    <div className="flex space-x-2">
                                        {mega.types.map((type, index) => {
                                            // console.log("Tipo original:", type); // Verifica cómo viene el tipo

                                            const typeName = type?.name || type; // Manejar si viene como string o como objeto
                                            const translatedType = typeTranslations[typeName] || typeName; // Traducción

                                            return (
                                                <span 
                                                    key={index} 
                                                    className={`${translatedType}2 px-3 pb-0.5 text-sm font-semibold bg-green-500 text-white rounded-full`}
                                                >
                                                    {translatedType}
                                                </span>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className='ml-1 mt-1 text-white text-sm font-medium z-10 bg-black bg-opacity-50 px-2 py-1 rounded-full'>
                                    <span>N° </span>
                                    {mega.id}
                                </div>
                            </div>

                            {/* Imagen */}
                            <div className="relative h-64 w-full pt-4">
                                <img 
                                    src={mega.sprite} 
                                    alt={mega.name} 
                                    className="rounded-lg w-full h-full object-contain" 
                                />
                            </div>

                            {/* Habilidad */}
                            <div className='flex justify-center gap-3 mt-4'>
                                {mega.abilities?.map((ability, index) => {
                                    console.log("Habilidad: ", ability)
                                    const translatedAbility = abilityTranslations[ability] || ability; // Traducción
                                    return (                                        
                                        <div key={index}>
                                            <h3 className="font-semibold">{translatedAbility}</h3>
                                        </div>                                        
                                    )
                                })}                                
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MegaEvolutions;
