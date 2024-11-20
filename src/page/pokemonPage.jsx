import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../useFetch';
import Filter from '../component/Filter';
import Card from '../component/Card';
// import './PokemonPage.css';

function PokemonPage() {
  const { regionName } = useParams();
  const [pokemonList, setPokemonList] = useState([]); // Pokémon de la región
  const [filteredList, setFilteredList] = useState([]); // Pokémon filtrados
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Mapa de regiones a generaciones
  const regionIdMap = {
    kanto: 1,
    johto: 2,
    hoenn: 3,
    sinnoh: 4,
    unova: 5,
    kalos: 6,
    alola: 7,
    galar: 8,
  };

  // Función para obtener detalles de cada Pokémon
  const fetchPokemonDetails = async (pokemonNames) => {
    const promises = pokemonNames.map(async (name) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      return response.json();
    });

    return Promise.all(promises);
  };

  // Carga los Pokémon de la región
  useEffect(() => {
    const fetchPokemonByRegion = async () => {
      setLoading(true);
      setError(null);

      try {
        const regionId = regionIdMap[regionName.toLowerCase()];
        if (!regionId) throw new Error('Región no válida');

        const response = await fetch(`https://pokeapi.co/api/v2/generation/${regionId}`);
        const data = await response.json();
        const pokemonNames = data.pokemon_species.map((species) => species.name);

        const pokemonDetails = await fetchPokemonDetails(pokemonNames);
        setPokemonList(pokemonDetails); // Guarda todos los detalles
        setFilteredList(pokemonDetails); // Inicialmente no hay filtro
      } catch (error) {
        setError('Error al cargar los Pokémon');
      } finally {
        setLoading(false);
      }
    };

    if (regionName) fetchPokemonByRegion();
  }, [regionName]);

  // Maneja el filtrado
  const handleCategoryChange = async (category, option) => {
    if (!option) {
      setFilteredList(pokemonList); // Sin filtro, muestra todos
      return;
    }

    const urlMap = {
      type: `https://pokeapi.co/api/v2/type/${option}`,
      ability: `https://pokeapi.co/api/v2/ability/${option}`,
    };

    try {
      const response = await fetch(urlMap[category]);
      const data = await response.json();
      const relatedPokemonNames = data.pokemon.map((entry) => entry.pokemon.name);

      // Filtra los Pokémon disponibles en esta región
      const filtered = pokemonList.filter((pokemon) =>
        relatedPokemonNames.includes(pokemon.name)
      );
      setFilteredList(filtered);
    } catch {
      setError('Error al filtrar los Pokémon');
    }
  };


  return (
      <>
        <Filter onCategoryChange={handleCategoryChange} />
        <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {error && <div style={{ color: 'red' }}>Error: {error}</div>}
          {loading && <div>Loading...</div>}
          {filteredList && <Card filteredList={filteredList} />}
        </div>
      </>
  );
}

export default PokemonPage;