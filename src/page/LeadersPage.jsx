import React from "react";
import useGymLeaders from "../hooks/useGymLeaders";
import { Link, useParams } from "react-router-dom";
import { Coins, Gift } from "lucide-react";

const LeadersPage = () => {
    const { regionName } = useParams();
    const leaders = useGymLeaders(regionName);
    // console.log(leaders); // Para verificar los líderes de gimnasio

    if (leaders.length === 0) {
        return (
            <div className="text-center">
                <h2 className="lg:text-2xl font-bold mb-4">No se encontraron líderes de gimnasio para esta región.</h2>
                <p className="text-lg text-gray-700">Intenta con otra región.</p>
            </div>
        );
        
    }

    return (
        <div className="flex flex-col pt-28 bg-gray-100">
            <div className='top-2 left-6 pl-4'>
                <Link to={`/${regionName?.toLowerCase() || 'unknown'}`} className="text-green-500 hover:underline">
                    ← Regresar
                </Link>
            </div>
            <h1 className="text-xl text-center lg:text-4xl font-bold mb-4">Líderes de Gimnasio de {regionName.toUpperCase()}</h1>
                <div className="mx-auto container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-4 lg:w-[95%]">
                    {leaders.map((leader) => (
                        <div key={leader.name} className={`rounded-lg mx-auto overflow-hidden transition-all duration-300 hover:shadow-lg border-2 bg-slate-100 w-[90%] md:w-full ${leader.type}`}>
                            {/* Colored header strip */}
                            <div className={`h-2 ${leader.type}2`}></div>

                            {/* Card header */}
                            <div className="p-4 pb-2">
                                <div className="flex flex-col space-y-3">
                                    <div className="flex justify-end">
                                        <span className={`px-3 pb-0.5 text-sm font-semibold bg-green-500 text-white rounded-full  ${leader.type}2`}>
                                            {leader.type}
                                        </span>
                                    </div>
                                    <div className="flex justify-center hover:scale-105 transition-transform duration-300 hover:drop-shadow-customHover">
                                        <img
                                            src={leader.image}
                                            alt={leader.name}
                                            className="rounded-full bg-white w-52 h-52"
                                        />
                                    </div>
                                    <div className="flex flex-col items-center space-y-2">
                                        <h3 className="text-xl text-gray-50 font-bold">{leader.name}</h3>
                                        <p className="text-sm text-gray-50">{leader.city}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Card content */}
                            <div className="px-4 pb-2">
                                <div className="flex justify-around items-center gap-2 mb-4">
                                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                                        <img
                                            src={leader.imgBadge}
                                            alt={leader.badge}
                                        />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-50">{leader.badge}</p>
                                    </div>
                                </div>

                                <div className="mt-2 space-y-2 p-3 bg-gray-50 rounded-md">
                                    {leader.team?.map((pokemon, index) => (
                                        <div key={index} className="flex justify-around items-center gap-2">
                                            <img
                                                src={pokemon.imgPokemon}
                                                onError={(e) => (e.target.src = "/fallback-image.png")}
                                                alt={pokemon.name}
                                                className="w-8 h-8 rounded-full"
                                            />
                                            <span>{pokemon.namePokemon}</span>
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white border border-gray-300">
                                                Lv. {pokemon.level}
                                            </span>
                                        </div>
                                    ))}                            
                                </div>
                            </div>
                            
                            {/* Card footer */}
                            <div className="px-4 pt-2 pb-4">
                                <div className="w-full space-y-2 items-center">
                                    <div className="flex items-center gap-4">
                                        <Gift size={16} className="text-purple-500" />
                                        <span className="text-sm text-gray-50">{leader.rewards.tm}</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Coins size={16} className="text-yellow-500" />
                                        <span className="text-sm text-gray-50">{leader.rewards.money}¥</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    );
}

export default LeadersPage;