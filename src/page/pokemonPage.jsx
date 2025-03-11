import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Filter from '../component/Filter';
import Card from '../component/Card';

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
    teselia: 5,
    kalos: 6,
    alola: 7,
    galar: 8,
    paldea: 9,
  };

  // Función para obtener detalles de cada Pokémon
  const fetchPokemonDetails = async (pokemonNames) => {
    const promises = pokemonNames.map(async (name) => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!response.ok) throw new Error(`Error fetching ${name}`);
        return response.json();
      } catch (error) {
        console.error(`Failed to fetch ${name}:`, error);
        return null; // Devuelve null si falla
      }
    });

    const results = await Promise.all(promises);
    return results
      .filter((result) => result !== null) // Filtra los nulos
      .sort((a, b) => a.id - b.id) // Ordena por ID
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
        // console.log(data.pokemon_species.length);
        const pokemonNames = data.pokemon_species.map((species) => species.name);

        const pokemonDetails = await fetchPokemonDetails(pokemonNames);
        setPokemonList(pokemonDetails); // Guarda todos los detalles
        setFilteredList(pokemonDetails); // Inicialmente no hay filtro
      } catch (error) {
        setError('Error al cargar los Pokémon!!!');
      } finally {
        setLoading(false);
      }
    };
    if (regionName) fetchPokemonByRegion();
  }, [regionName]);

  // Maneja el filtrado
  const typeTranslation = {
    normal: "normal",
    fuego: "fire",
    agua: "water",
    eléctrico: "electric",
    planta: "grass",
    hielo: "ice",
    lucha: "fighting",
    veneno: "poison",
    tierra: "ground",
    volador: "flying",
    psíquico: "psychic",
    bicho: "bug",
    roca: "rock",
    fantasma: "ghost",
    dragón: "dragon",
    oscuro: "dark",
    acero: "steel",
    hada: "fairy",
  };
  
  const handleCategoryChange = async (category, option) => {
    if (!option) {
      setFilteredList(pokemonList); // Sin filtro, muestra todos
      return;
    }
  
    // Convertir el nombre del tipo al inglés
    const englishOption = typeTranslation[option.toLowerCase()];
  
    if (!englishOption) {
      setError("Tipo no encontrado");
      return;
    }
  
    const urlMap = {
      type: `https://pokeapi.co/api/v2/type/${englishOption}`,
    };
  
    try {
      const response = await fetch(urlMap[category]);
      const data = await response.json();
      const relatedPokemonNames = data.pokemon.map((entry) => entry.pokemon.name);
  
      // Filtrar los Pokémon disponibles en esta región
      const filtered = pokemonList.filter((pokemon) =>
        relatedPokemonNames.includes(pokemon.name)
      );
  
      setFilteredList(filtered);
    } catch {
      setError("Error al filtrar los Pokémon");
    }
  };


  return (
      <>
      <div className='flex flex-col bg-gray-100 gap-6 pt-28'>
        <Filter onCategoryChange={handleCategoryChange} />
        <div className="mx-auto container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:w-[95%]">
          {error && <div style={{ color: 'red' }}>Error: {error}</div>}
          {loading && <div>Loading...</div>}
          {filteredList && <Card filteredList={filteredList} />}
        </div>
      </div>
      </>
  );
}

export default PokemonPage;