import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useRegionId from '../hooks/useRegionId';
import MovesList from '../component/Acordeon';
import {ChevronDown} from 'lucide-react';
import usePokemonAbilities from '../hooks/usePokemonAbilities';

import Header from '../component/pokemonDetails/Header';
import Tabs from '../component/pokemonDetails/Tabs';
import PokemonStats from '../component/pokemonDetails/Stats';
import PokemonInfo from '../component/pokemonDetails/Info';

const usePokemonDetails = (name) => {
  const [data, setData] = useState({
    pokemon: null,
    evolutions: [],
    description: "",
    moves: [],
    types: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!response.ok) throw new Error("No se pudo obtener el Pokémon");
        const pokemon = await response.json();

        const [species, typesDetails] = await Promise.all([
          fetch(pokemon.species.url).then((res) => res.json()),
          Promise.all(
            pokemon.types.map(async (type) => {
              const typeData = await fetch(type.type.url).then((res) => res.json());
              return typeData.names.find((n) => n.language.name === "es")?.name || type.type.name;
            })
          ),
        ]);

        // Evolución
        const evolutionData = await fetch(species.evolution_chain.url).then((res) => res.json());
        const evolutionChain = [];
        let current = evolutionData.chain;
        while (current) {
          evolutionChain.push(current.species.name);
          current = current.evolves_to[0];
        }

        // Movimientos
        const movesDetails = await Promise.all(
          pokemon.moves.slice(0, 50).map(async (move) => { // Limita a 5 movimientos
            const moveData = await fetch(move.move.url).then((res) => res.json());
            // console.log(moveData);
            return {
              name: moveData.names.find((n) => n.language.name === "es")?.name || move.move.name,
              type: moveData.type.name,
              power: moveData.power,
              pp: moveData.pp,
              damage_class: moveData.damage_class.name,
              effect: moveData.flavor_text_entries.find((e) => e.language.name === "es")?.flavor_text || "Efecto no disponible.",
            };
          })
        );

        setData({
          pokemon,
          evolutions: evolutionChain,
          description: species.flavor_text_entries.find((e) => e.language.name === "es")?.flavor_text || "Descripción no disponible.",
          moves: movesDetails,
          types: typesDetails,
          loading: false,
          error: null,
        });
      } catch (error) {
        setData((prev) => ({ ...prev, loading: false, error: error.message }));
      }
    };

    fetchPokemonDetails();
  }, [name]);

  return data;
};

function PokemonDetails() {
  const { regionName } = useRegionId();
  const [openIndex, setOpenIndex] = useState(null);

  const { name } = useParams();
  const { pokemon, evolutions, description, moves, types, loading, error } = usePokemonDetails(name);
  const { abilitiesDetails } = usePokemonAbilities(pokemon?.abilities);
  const [activeTab, setActiveTab] = useState("info");

  const getPokemonImage = (sprites) =>
    sprites?.other?.["official-artwork"]?.front_default || sprites?.other?.dream_world?.front_default || sprites?.front_default;

  if (loading) return <div className="text-center">Cargando...</div>;
  if (error) {
    return (
      <div className="text-red-500 text-center">
        {error}
        <button onClick={() => window.location.reload()} className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg">
          Reintentar
        </button>
      </div>
    )
  }

  const toggleAccordion = (key) => {
    setOpenIndex(openIndex === key ? null : key);
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-8 flex items-center justify-center pt-[8rem]'>
      <div className='w-full bg-white/80 backdrop-blur border-2 border-green-200 rounded-xl shadow-lg overflow-hidden'>
        <div className="flex items-center justify-between p-6 border-b border-green-100">

          <div className='w-full max-w-2xl mx-auto'>
              <div className='absolute top-2 left-6'>
                <Link to={`/${regionName?.toLowerCase() || 'unknown'}/lista-pokemon`} className="text-green-500 hover:underline">
                  ← Regresar
                </Link>
              </div>
              {/* Header */}
              <Header pokemon={pokemon} />

            <div className='p-6 w-full'>
              {/* Tabs */}
              <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

              {activeTab === 'info' ? (
                pokemon ? (
                  // Imagen, habilidades, evoluciones, descripción
                  <PokemonInfo pokemon={pokemon} evolutions={evolutions} abilitiesDetails={abilitiesDetails} description={description} />
                ) : (
                  <p>Cargando...</p>
                )
              ) : activeTab === 'stats' ? (
                pokemon ? (
                  // Stats
                  <PokemonStats pokemon={pokemon} />
                ) : (
                  <p>Cargando...</p>
                )
              ) : activeTab === 'moves' ? (
                pokemon ? (
                  // Movimientos
                  <MovesList moves={moves} />
                ) : (
                  <p>Cargando...</p>
                )
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;