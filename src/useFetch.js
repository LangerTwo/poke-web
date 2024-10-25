import { useEffect, useState } from "react";

export function useFetch(url) {   
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        // Si la URL es null o vacía, no hacer nada
        if (!url) return;

        setLoading(true);
        setError(null);

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                return response.json();
            })
            .then(async (data) => {
                const pokemonDetails = await Promise.all(
                    data.pokemon_species.map(async (species) => {
                        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${species.name}`);
                        return res.json();
                    })
                );
                setData(pokemonDetails);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, [url]);

    return { data, loading, error };
}