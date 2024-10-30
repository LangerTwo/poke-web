import { useState, useEffect } from 'react';

export function useFilter() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // URLs para cada categoría
  const urls = {
    region: 'https://pokeapi.co/api/v2/generation',
    type: 'https://pokeapi.co/api/v2/type',
    ability: 'https://pokeapi.co/api/v2/ability',
  };

  // Función genérica para obtener datos desde una URL
  const fetchData = async (url, extractOptions) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setOptions(await extractOptions(data));
    } catch (error) {
      setError('Error al cargar los datos');
    } finally {
      setLoading(false);
    }
  };

  // Este efecto cambia las opciones del segundo select basadas en la selección del primero
  useEffect(() => {
    if (selectedCategory && urls[selectedCategory]) {
      fetchData(urls[selectedCategory], async (data) => {
        if (selectedCategory === 'region') {
          const regionNames = await Promise.all(
            data.results.map(async (gen) => {
              const res = await fetch(gen.url);
              const genData = await res.json();
              return genData.main_region ? genData.main_region.name : null;
            })
          );
          return regionNames.filter(Boolean);
        } else if (selectedCategory === 'type') {
          // Devuelve nombres de tipos directamente
          return data.results.map((type) => type.name);
        } else if (selectedCategory === 'ability') {
          return data.results.map((ability) => ability.name);
        } else {
          // Para habilidades
          return data.results.map((item) => item.name);
        }
      });
    } else {
      setOptions([]);
    }
  }, [selectedCategory]);

  return { selectedCategory, setSelectedCategory, options, loading, error };
}
