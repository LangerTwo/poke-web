import React, { useEffect, useState, useCallback, useMemo, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { regionIdMap } from '../js/regions';
import Filter from '../component/Filter';
import Card from '../component/Card';
import { usePokemonList } from '../hooks/usePokemonList';
import { fetchType } from '../api/pokeApi';
import { typeTranslationsReverse } from '../js/typeTranslations';

function PokemonPage() {
  const { regionName } = useParams();
  
  const regionId = regionIdMap[regionName?.toLowerCase()];
  const { pokemonList, loading, error: listError } = usePokemonList(regionId);
  
  const [filteredList, setFilteredList] = useState([]); // Lista filtrada de Pokémon
  const [filterError, setFilterError] = useState(null);
  const filterControllerRef = useRef(null);

  // Cuando cambia la lista original, actualizamos la lista filtrada
  useEffect(() => {
    setFilteredList(pokemonList);
  }, [pokemonList]);


  
  const handleCategoryChange = useCallback( async (category, option) => {
    if (filterControllerRef.current) {
        filterControllerRef.current.abort();
    }
    setFilterError(null);

    // Sin filtro, muestra todos
    if (!option) {
      setFilteredList(pokemonList);
      return;
    }
    // Convertir el nombre del tipo al inglés
    const englishOption = typeTranslationsReverse[option.toLowerCase()];
    if (!englishOption) {
      setFilterError("Tipo no encontrado");
      return;
    }

    const controller = new AbortController();
    filterControllerRef.current = controller;

    try {
      const data = await fetchType(englishOption, controller.signal);
      if (controller.signal.aborted) return;

      const relatedPokemonNames = data.pokemon.map(({ pokemon }) => pokemon.name);
  
      // Filtrar los Pokémon disponibles en esta región
      setFilteredList(pokemonList.filter(({ name }) => relatedPokemonNames.includes(name)));
    } catch (err) {
      if (!controller.signal.aborted) {
        setFilterError("Error al filtrar los Pokémon");
      }
    }
  }, [pokemonList]);


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
          {(listError || filterError) && <div className="text-red-500 text-center font-bold col-span-full">{listError || filterError}</div>}
          {loading ? <div className="text-center col-span-full">Cargando...</div> : <Card filteredList={filteredList} />}
        </div>
      </div>
      </>
  );
}

export default PokemonPage;