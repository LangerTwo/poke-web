import { useState, useEffect } from 'react';

export function useFilter() {
  const [types, setTypes] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Función genérica para obtener datos
  const fetchOptions = async (url, setState) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setState(data.results.map((item) => item.name));
    } catch {
      setError('Error al cargar datos');
    } finally {
      setLoading(false);
    }
  };

  // Cargar tipos y habilidades
  useEffect(() => {
    fetchOptions('https://pokeapi.co/api/v2/type', setTypes);
    fetchOptions('https://pokeapi.co/api/v2/ability', setAbilities);
  }, []);

  return { types, abilities, loading, error };
}