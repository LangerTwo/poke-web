import { useEffect, useState } from "react";

export function useFetch() {   
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    
    useEffect(() => {
        // Primera petición para obtener la lista de Pokémon
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1")
            .then((response) => response.json())
            .then(async (data) =>{
                // Segunda petición para obtener detalles de cada Pokémon
                const pokemonDetails = await Promise.all(
                    data.results.map(async (poke) => {
                        const res = await fetch(poke.url)
                        return res.json();
                    })
                )
                setData(pokemonDetails);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    return { data, loading, error };
}