import { useEffect, useState } from "react";

export function useFetch(url) {   
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) {
            setData(null); // Limpia la pantalla cuando no hay URL
            return;
        }

        setLoading(true);
        setError(null);

        fetch(url)
            .then((response) => response.json())
            .then(async (resultData) => {
                console.log("Datos obtenidos:", resultData); // Depuración
                let pokemonDetails;

                if (resultData.pokemon_species) {
                    console.log("Procesando pokemon_species"); // Depuración
                    pokemonDetails = await Promise.all(
                        resultData.pokemon_species.map(async (pokemon) => {
                            try {
                                console.log(`Buscando detalles para ${pokemon.name}`); // Depuración
                                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                                if (!res.ok) throw new Error(`Pokémon ${pokemon.name} no encontrado`);
                                return await res.json();
                            } catch (error) {
                                return null;
                            }
                        })
                    );
                } else if (resultData.pokemon) {
                    console.log("Procesando pokemon"); // Depuración
                    // Si es un tipo
                    pokemonDetails = await Promise.all(
                        resultData.pokemon.map(async (pokemon) => {
                            try {
                                const res = await fetch(pokemon.pokemon.url);
                                if (!res.ok) throw new Error(`Pokémon ${pokemon.pokemon.name} no encontrado`);
                                return await res.json();
                            } catch (error) {
                                return null;
                            }
                        })
                    );
                }
                const sortedData = pokemonDetails.filter(Boolean).sort((a, b) => a.id - b.id);
                setData(sortedData);
                setLoading(false);
            })
            .catch((error) => {
                setError("Error al cargar los Pokémon2!!");
                setLoading(false);
            });
    }, [url]);
    return { data, loading, error };
}
