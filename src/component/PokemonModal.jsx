import React from "react";
import { usePokemonModal } from "../context/PokemonModalContext";

function PokemonModal() {
    const { isOpen, closeModal, pokemon } = usePokemonModal();

    if (!isOpen || !pokemon) return null; // No mostrar si el modal está cerrado o no hay datos

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full relative">
                <button
                    onClick={closeModal}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                >
                    ✖
                </button>

                <h2 className="text-2xl font-bold text-center mb-4">{pokemon.name.toUpperCase()}</h2>
                
                <div className="flex justify-center">
                    <img 
                        src={pokemon.sprites.other["official-artwork"].front_default} 
                        alt={pokemon.name} 
                        className="w-32 h-32"
                    />
                </div>

                <div className="mt-4">
                    <p><strong>Altura:</strong> {pokemon.height / 10} m</p>
                    <p><strong>Peso:</strong> {pokemon.weight / 10} kg</p>
                    <p><strong>Tipo:</strong> {pokemon.types.map(t => t.type.name).join(", ")}</p>
                </div>
            </div>
        </div>
    );
}

export default PokemonModal;
