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
          setOptions(extractOptions(data));
      } catch (error) {
          setError('Error al cargar los datos');
      } finally {
          setLoading(false);
      }
  };

  // Este efecto cambia las opciones del segundo select basadas en la selección del primero
  useEffect(() => {
      if (selectedCategory && urls[selectedCategory]) {
          fetchData(urls[selectedCategory], (data) => {
              if (selectedCategory === 'region') {
                  return data.results.map((gen) => gen.name); // Devuelve los nombres de las regiones
              } else {
                  return data.results.map((item) => item.name); // Devuelve los nombres para tipos y habilidades
              }
          });
      } else {
          setOptions([]);
      }
  }, [selectedCategory]);

  return { selectedCategory, setSelectedCategory, options, loading, error };
}