import { useState, useEffect } from 'react';

export function useFilter() {
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Función genérica para obtener datos
  const fetchOptions = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://pokeapi.co/api/v2/type');
      const data = await response.json();

      // Obtner los detalles de los tipos
      const typesData = await Promise.all(
        data.results.map(async (type) => {
          const typeResponse = await fetch(type.url);
          const typesData = await typeResponse.json();

          // Buscar el nombre en español
          const spanihName = typesData.names.find((name) => name.language.name === 'es')?.name || type.name; 
          return spanihName;
        })
      );
      setTypes(typesData);
    } catch (error) {
      setError('Error al cargar los tipos');
    } finally {
      setLoading(false);
    }
  };

  // Cargar tipos y habilidades
  useEffect(() => {
    fetchOptions();
  }, []);

  return { types, loading, error };
}