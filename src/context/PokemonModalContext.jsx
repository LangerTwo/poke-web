import { createContext, useContext, useState } from "react";

const PokemonModalContext = createContext();

export function PokemonModalProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [pokemon, setPokemon] = useState(null);

    const openModal = (pokemonData) => {
        setPokemon(pokemonData);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setPokemon(null);
    };

    return (
        <PokemonModalContext.Provider value={{ isOpen, openModal, closeModal, pokemon }}>
            {children}
        </PokemonModalContext.Provider>
    );
}

export function usePokemonModal() {
    return useContext(PokemonModalContext);
}