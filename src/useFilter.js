import { useState, useEffect } from 'react';

export function useFilter() {
    const [selectedCategory, setSelectedCategory] = useState(''); // Almacena la selección del primer select
    const [options, setOptions] = useState([]); // Almacena las opciones para el segundo select
    const [loading, setLoading] = useState(false); // Estado de carga
    const [error, setError] = useState(null); // Estado de error
  
    // const types = ['Fire', 'Water', 'Grass', 'Electric', 'Psychic'];
    const abilities = ['Overgrow', 'Blaze', 'Torrent', 'Shield Dust', 'Run Away'];
  
    // Función para obtener las regiones desde la API de Pokémon
    const fetchRegions = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://pokeapi.co/api/v2/generation');
        const data = await response.json();
        const regionNames = await Promise.all(
          data.results.map(async (gen) => {
            const res = await fetch(gen.url);
            const genData = await res.json();
            return genData.main_region.name; // Obtener el nombre de la región
          })
        );
        setOptions(regionNames); // Actualizar las opciones con los nombres de las regiones
        setLoading(false);
      } catch (error) {
        setError('Error al cargar las regiones');
        setLoading(false);
      }
    };

    const fetchTypes = async () => {
        setLoading(true);
        setError(null);
        try {
          const response = await fetch('https://pokeapi.co/api/v2/type');
          const data = await response.json();
      
          // No es necesario hacer más fetch, simplemente obtener el nombre de cada tipo
          const tiposPoke = data.results.map((tipo) => tipo.name); // Obtener directamente el nombre de los tipos
          setOptions(tiposPoke); // Guardar los nombres de los tipos en el estado
          setLoading(false);
        } catch (error) {
          setError('Error al cargar los Tipos');
          setLoading(false);
        }
    };
  
    // Este efecto cambia las opciones del segundo select basadas en la selección del primero
    useEffect(() => {
      if (selectedCategory === 'region') {
        fetchRegions(); // Llamada a la API para obtener las regiones
      } else if (selectedCategory === 'type') {
        fetchTypes();
      } else if (selectedCategory === 'ability') {
        setOptions(abilities);
      } else {
        setOptions([]); // Si no hay categoría seleccionada, dejar vacío
      }
    }, [selectedCategory]); 

    return {selectedCategory, setSelectedCategory, options, loading, error}
}