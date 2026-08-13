import { useState, useEffect } from 'react';

let cachedTypes = null;

export function useFilter() {
  const [types, setTypes] = useState(cachedTypes || []);
  const [loading, setLoading] = useState(!cachedTypes);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (cachedTypes) return;

    const controller = new AbortController();
    const { signal } = controller;

    const fetchOptions = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://pokeapi.co/api/v2/type', { signal });
        if (!response.ok) throw new Error(`Error en la petición: ${response.status}`);
        const data = await response.json();

        // Obtner los detalles de los tipos
        const typesData = await Promise.all(
          data.results.map(async (type) => {
            const typeResponse = await fetch(type.url, { signal });
            if (!typeResponse.ok) throw new Error(`Error en la petición: ${typeResponse.status}`);
            const typeDetails = await typeResponse.json();

            // Buscar el nombre en español
            const spanihName = typeDetails.names.find((name) => name.language.name === 'es')?.name || type.name; 
            return spanihName;
          })
        );
        if (!signal.aborted) {
          cachedTypes = typesData;
          setTypes(typesData);
        }
      } catch (error) {
        if (!signal.aborted) {
          setError('Error al cargar los tipos');
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchOptions();

    return () => controller.abort();
  }, []);

  return { types, loading, error };
}