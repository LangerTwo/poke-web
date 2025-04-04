import React, { useState } from "react";
import { usePokemonModal } from "../context/PokemonModalContext";
import usePokemonDetails from "../hooks/usePokemonDetail";
import TabsDetailsPokemon from "./TabsDetailsPokemon";
import Header from "./normalDetails/Header";
import Tabs from "./normalDetails/Tabs";
import PokemonInfo from "./normalDetails/Info";
import PokemonStats from "./normalDetails/Stats";
import MovesList from "./Acordeon";
import MegaEvolutions from "./MegaPokemon";
import { useParams } from "react-router-dom";
import usePokemonAbilities from "../hooks/usePokemonAbilities";

function PokemonModal() {
    const { isOpen, closeModal, pokemon } = usePokemonModal();
    const { name } = useParams();
    const { evolutions, description, moves, types, megaEvolutions, loading, error } = usePokemonDetails(name);
    const { abilitiesDetails } = usePokemonAbilities(pokemon?.abilities);
    const [activeTab, setActiveTab] = useState("info");
    const [tab, setTab] = useState('normal');

    if (!isOpen || !pokemon) return null; // No mostrar si el modal está cerrado o no hay datos

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 shadow-lg max-w-2xl w-full relative">
                <button
                    onClick={closeModal}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                >
                    ✖
                </button>

                <TabsDetailsPokemon activeTab={tab} setActiveTab={setTab} />
                {tab === 'normal' ? (
                <>
                    <Header pokemon={pokemon} />
                    <div className='p-6 w-full'>
                    <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
                    {activeTab === 'info' && <PokemonInfo pokemon={pokemon} evolutions={evolutions} abilitiesDetails={abilitiesDetails} description={description} />}
                    {activeTab === 'stats' && <PokemonStats pokemon={pokemon} />}
                    {activeTab === 'moves' && <MovesList moves={moves} />}
                    </div>
                </>
                ) : (
                    <MegaEvolutions megaEvolutions={megaEvolutions} />
                )}
            </div>
        </div>
    );
}

export default PokemonModal;
