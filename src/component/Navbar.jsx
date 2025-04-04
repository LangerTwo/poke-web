import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { usePokemonModal } from '../context/PokemonModalContext';

function Navbar() {
    const { openModal } = usePokemonModal();
    const [search, setSearch] = useState("");

    const handleSearch = async () => {
        if (!search.trim()) return;

        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`);
            if (!response.ok) throw new Error("Pokémon no encontrado");

            const pokemonData = await response.json();
            openModal(pokemonData); // Abrir modal con la información del Pokémon
        } catch (error) {
            alert("Pokémon no encontrado. Verifica el nombre.");
        }
    };

    return (
        <div className="w-full fixed z-30 bg-gradient-to-b shadow-xl from-red-100 to-yellow-100">
            <header className="bg-gray-700 text-white">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center justify-between">
                            <Link to="/">
                                <h1 className="text-xl md:text-3xl font-bold">Poké Web</h1>
                            </Link>
                            <div className="relative w-[60%] md:w-full max-w-sm ml-4">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                                <input
                                    type="text"
                                    placeholder="Buscar"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent md:focus:ring-2 md:focus:ring-white/50 md:focus:border-transparent transition duration-200 ease-in-out"
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            handleSearch();
                                        }
                                    }}
                                />
                                <button 
                                    onClick={handleSearch}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                                >
                                    Buscar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Navbar;
