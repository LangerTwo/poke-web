import React, { useState } from "react";
import typeTranslations from "../js/typeTranslations";
import abilityTranslations from "../js/abilityTranslations";
import { ChevronDown } from "lucide-react";

const MegaEvolutions = ({ megaEvolutions }) => {
    const [openIndex, setOpenIndex] = useState(null);
    const [tab, setTab] = useState('info');

    if (!megaEvolutions || megaEvolutions.length === 0) {
        return <p className="text-gray-500">No hay Mega Evoluciones disponibles.</p>;
    }

    const toggleAccordion = (key) => {
        setOpenIndex(openIndex === key ? null : key);
    }

    const getStatColor = (value) => {
        if (value >= 100) return "bg-green-500"
        if (value > 80) return "bg-yellow-500"
        if (value > 40) return "bg-orange-500"
        if (value > 20) return "bg-yellow-500"
        return "bg-red-500"
    }
      
    const statMapping = {
        'hp': 'HP',
        'attack': 'Atk',
        'defense': 'Def',
        'special-attack': 'SpAtk',
        'special-defense': 'SpDef',
        'speed': 'Spd',
    };

    return (
            <div className="">
                {megaEvolutions.map((mega) => {
                    // console.log("Mega evolución:", mega); // Verifica la estructura de los datos
                    return (
                        <div key={mega.id} className='w-full'> 
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

                            <div className="p-6 w-full">
                                <div className='flex justify-center mt-4 border-gray-200'>
                                    <button
                                        className={`px-4 py-2 font-medium ${tab === 'info' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                                        onClick={() => setTab('info')}
                                    >
                                        Informacion
                                    </button>
                                    <button
                                        className={`px-4 py-2 font-medium ${tab === 'stats' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                                        onClick={() => setTab('stats')}
                                    >
                                        Estadísticas
                                    </button>
                                </div>
                                {tab === 'info' ? (
                                    <>
                                        {/* Imagen */}
                                        <div className="relative h-64 w-full pt-4">
                                            <img 
                                                src={mega.sprite} 
                                                alt={mega.name} 
                                                className="rounded-lg w-full h-full object-contain" 
                                            />
                                        </div>

                                        {/* Habilidades con efectos */}
                                        <div className='flex flex-col gap-3 mt-4'>
                                            <div>
                                                <button
                                                    onClick={() => toggleAccordion("abilities")}
                                                    className="flex justify-between w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-left"
                                                >
                                                    <h2 className='font-semibold'>Habilidad</h2>
                                                    <ChevronDown
                                                        className={`w-5 h-5 transition-transform duration-200 ${
                                                        openIndex === "abilities" ? "rotate-180" : ""
                                                    }`}
                                                    />
                                                </button>
                                                <div className={`overflow-hidden transition-all duration-200 ease-in-out ${openIndex === "abilities" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                                                    <div className='p-4 bg-gray-50 border-t border-gray-200'>
                                                        {mega.abilities && mega.abilities.length > 0 ? (
                                                            mega.abilities.map((ability, index) => {
                                                                // console.log("Habilidad con efecto:", ability);
                                                                const abilityName = abilityTranslations[ability.name] || ability.name; // Traducción
                                                                const abilityEffect = ability.effect; // Efecto de la habilidad
                                                                return (
                                                                    <div key={index} className='space-y-1 text-left'>
                                                                        <h3 className="font-semibold">{abilityName}</h3>
                                                                        <p className="text-sm">{abilityEffect}</p>
                                                                    </div>
                                                                );
                                                            })
                                                        ) : (
                                                            <p className="text-white">Sin habilidad</p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="space-y-4 pt-4 w-full">
                                            <h2 className="text-xl font-semibold mb-2">Estadísticas</h2>
                                            {mega.stats?.map((stat) => (
                                                <div key={stat.name} className="space-y-1 w-full">
                                                    <div className="flex justify-between text-sm w-full">
                                                        <span className="text-sm font-medium">
                                                            {statMapping?.[stat.name] || stat.name}
                                                        </span>
                                                        <span className="text-sm font-medium">{stat.base}</span>
                                                    </div>
                                                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                                                        <div 
                                                        className={`h-2 transition-all duration-500 ${getStatColor(stat.base)}`} 
                                                        style={{ width: `${(stat.base / 150) * 100}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                            
                        </div>
                    );
                })}
            </div>
    );
};

export default MegaEvolutions;
