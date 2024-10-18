import { useEffect, useState } from "react";

export function useFetch() {   
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    
    useEffect(() => {
        setLoading(true)
        fetch("https://pokeapi.co/api/v2/pokemon?limit=9")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, []);

    return { data, loading, error };
}