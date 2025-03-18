import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Filter from '../component/Filter';
import Card from '../component/Card';

function PokemonPage() {
  const { regionName } = useParams();
  const [pokemonList, setPokemonList] = useState([]); // Lista completa de Pokémon de la región
  const [filteredList, setFilteredList] = useState([]); // Lista filtrada de Pokémon
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Mapa de regiones a generaciones
  const regionIdMap = useMemo(() => ({
    kanto: 1, johto: 2, hoenn: 3, sinnoh: 4, teselia: 5,
    kalos: 6, alola: 7, galar: 8, paldea: 9,
  }), []);

  // Función para obtener detalles de cada Pokémon
  const fetchPokemonDetails = useCallback(async (pokemonNames) => {
    try {
      const promises = pokemonNames.map(async (name) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!response.ok) throw new Error(`Error fetching ${name}`);
        return response.json();
      });

      const results = (await Promise.allSettled(promises))
        .filter(({ status }) => status === 'fulfilled')
        .map(({ value }) => value)
        .sort((a, b) => a.id - b.id); // Ordena por ID

      return results;
    } catch (err) {
      console.error("Error fetching Pokémon details:", err);
      return [];
    }
  }, []);

  // Carga los Pokémon de la región
  useEffect(() => {
    const fetchPokemonByRegion = async () => {
      setLoading(true);
      setError(null);

      const regionId = regionIdMap[regionName?.toLowerCase()];
      if (!regionId) {
        setError('Región no válida');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`https://pokeapi.co/api/v2/generation/${regionId}`);
        if (!response.ok) throw new Error('Error fetching Pokémon by region');
        
        const data = await response.json();
        const pokemonNames = data.pokemon_species.map(({ name }) => name);
        const pokemonDetails = await fetchPokemonDetails(pokemonNames);
        
        setPokemonList(pokemonDetails);
        setFilteredList(pokemonDetails);
      } catch (error) {
        setError('Error al cargar los Pokémon!!!');
      } finally {
        setLoading(false);
      }
    };
    fetchPokemonByRegion();
  }, [regionName, regionIdMap, fetchPokemonDetails]);

  // Maneja el filtrado
  const typeTranslation = useMemo(() => ({
    normal: "normal", fuego: "fire", agua: "water", eléctrico: "electric",
    planta: "grass", hielo: "ice", lucha: "fighting", veneno: "poison",
    tierra: "ground", volador: "flying", psíquico: "psychic", bicho: "bug",
    roca: "rock", fantasma: "ghost", dragón: "dragon", oscuro: "dark",
    acero: "steel", hada: "fairy",
  }), []);
  
  const handleCategoryChange = useCallback( async (category, option) => {
    // Sin filtro, muestra todos
    if (!option) {
      setFilteredList(pokemonList);
      return;
    }
    // Convertir el nombre del tipo al inglés
    const englishOption = typeTranslation[option.toLowerCase()];
    if (!englishOption) {
      setError("Tipo no encontrado");
      return;
    }
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/type/${englishOption}`);
      if (!response.ok) throw new Error("Error fetching related Pokémon");

      const data = await response.json();
      const relatedPokemonNames = data.pokemon.map(({ pokemon }) => pokemon.name);
  
      // Filtrar los Pokémon disponibles en esta región
      setFilteredList(pokemonList.filter(({ name }) => relatedPokemonNames.includes(name)));
    } catch (err) {
      setError("Error al filtrar los Pokémon");
    }
  }, [pokemonList, typeTranslation]);


  return (
      <>
      <div className='flex flex-col bg-gray-100 gap-6 pt-28'>
        <div>
          <h1 className='text-4xl font-bold text-center text-gray-800'>
            Pokémon de {regionName?.charAt(0).toUpperCase() + regionName?.slice(1)}
          </h1>
        </div>
        <Filter onCategoryChange={handleCategoryChange} />
        <div className="mx-auto container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:w-[95%]">
          {error && <div className="text-red-500 text-center font-bold">{error}</div>}
          {loading ? <div className="text-center">Cargando...</div> : <Card filteredList={filteredList} />}
        </div>
      </div>
      </>
  );
}

export default PokemonPage;