import { useState, useEffect, useCallback } from 'react';
import { fetchGeneration, fetchPokemon } from '../api/pokeApi';

export const usePokemonList = (regionId) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPokemonDetails = useCallback(async (pokemonNames, signal) => {
    try {
      const promises = pokemonNames.map(name => fetchPokemon(name, signal));
      const results = (await Promise.allSettled(promises))
        .filter(({ status }) => status === 'fulfilled')
        .map(({ value }) => value)
        .sort((a, b) => a.id - b.id);
      return results;
    } catch (err) {
      console.error("Error fetching details:", err);
      return [];
    }
  }, []);

  useEffect(() => {
    if (!regionId) {
      setPokemonList([]);
      setError("Región no válida");
      return;
    }

    const controller = new AbortController();
    setLoading(true);
    setError(null);

    const loadData = async () => {
      try {
        const data = await fetchGeneration(regionId, controller.signal);
        if (controller.signal.aborted) return;
        
        const pokemonNames = data.pokemon_species.map(({ name }) => name);
        const details = await fetchPokemonDetails(pokemonNames, controller.signal);
        
        if (!controller.signal.aborted) {
          setPokemonList(details);
        }
      } catch (err) {
        if (!controller.signal.aborted) {
          setError(err.message || "Error al cargar los Pokémon!!!");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    loadData();

    return () => controller.abort();
  }, [regionId, fetchPokemonDetails]);

  return { pokemonList, loading, error };
};
