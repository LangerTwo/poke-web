import React, { useState } from "react";
import { usePokemonModal } from "../context/PokemonModalContext";
import usePokemonDetails from "../hooks/usePokemonDetail";
import PokemonDetailView from './PokemonDetailView';
import usePokemonAbilities from "../hooks/usePokemonAbilities";

function PokemonModal() {
    const { isOpen, closeModal, pokemon } = usePokemonModal();
    const { evolutions, description, moves, megaEvolutions } = usePokemonDetails(pokemon?.name);
    const { abilitiesDetails } = usePokemonAbilities(pokemon?.abilities);


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

                <PokemonDetailView
                  pokemon={pokemon}
                  evolutions={evolutions}
                  description={description}
                  moves={moves}
                  megaEvolutions={megaEvolutions}
                  abilitiesDetails={abilitiesDetails}
                />
            </div>
        </div>
    );
}

export default PokemonModal;
