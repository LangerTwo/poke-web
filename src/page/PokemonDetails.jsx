import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useRegionId from '../hooks/useRegionId';
import MovesList from '../component/Acordeon';
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
    megaEvolutions: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!response.ok) throw new Error("No se pudo obtener el Pokémon");
        const pokemon = await response.json();

        const [species, movesDetails, typesDetails] = await Promise.all([
          fetch(pokemon.species.url).then((res) => res.json()),
          Promise.all(
            pokemon.moves.map(async (move) => {
              const moveData = await fetch(move.move.url).then((res) => res.json());
              return {
                name: moveData.names.find((n) => n.language.name === "es")?.name || move.move.name,
                type: moveData.type.name,
                power: moveData.power,
                pp: moveData.pp,
                damage_class: moveData.damage_class.name,
                effect: moveData.flavor_text_entries.find((e) => e.language.name === "es")?.flavor_text || "Efecto no disponible.",
              };
            })
          ),
          Promise.all(
            pokemon.types.map(async (type) => {
              const typeData = await fetch(type.type.url).then((res) => res.json());
              return typeData.names.find((n) => n.language.name === "es")?.name || type.type.name;
            })
          ),
        ]);

        // Obtener Mega Evoluciones
        const megaEvolutionsData = await Promise.all(
          species.varieties
            .filter((variety) => variety.pokemon.name.includes("-mega")) // Filtrar Megas
            .map(async (variety) => {
              const formData = await fetch(variety.pokemon.url).then((res) => res.json());
              return {
                name: variety.pokemon.name.replace("-mega", " Mega"),
                sprite: formData.sprites.front_default,
                types: formData.types.map((t) => t.type.name),
                abilities: formData.abilities.map((a) => a.ability.name),
                id: formData.id,
                stats: formData.stats.map((s) => ({ name: s.stat.name, base: s.base_stat })),
              };
            })
        );

        // Evolución
        const evolutionData = await fetch(species.evolution_chain.url).then((res) => res.json());
        const evolutionChain = [];
        let current = evolutionData.chain;
        while (current) {
          evolutionChain.push(current.species.name);
          current = current.evolves_to[0];
        }

        // Movimientos
        // const movesDetails = await Promise.all(
        //   pokemon.moves.slice(0, 50).map(async (move) => {
        //     const moveData = await fetch(move.move.url).then((res) => res.json());
        //     return {
        //       name: moveData.names.find((n) => n.language.name === "es")?.name || move.move.name,
        //       type: moveData.type.name,
        //       power: moveData.power,
        //       pp: moveData.pp,
        //       damage_class: moveData.damage_class.name,
        //       effect: moveData.flavor_text_entries.find((e) => e.language.name === "es")?.flavor_text || "Efecto no disponible.",
        //     };
        //   })
        // );

        setData({
          pokemon,
          evolutions: evolutionChain,
          description: species.flavor_text_entries.find((e) => e.language.name === "es")?.flavor_text || "Descripción no disponible.",
          moves: movesDetails,
          types: typesDetails,
          megaEvolutions: megaEvolutionsData,
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
  const { name } = useParams();
  const { pokemon, evolutions, description, moves, types, megaEvolutions, loading, error } = usePokemonDetails(name);
  const { abilitiesDetails } = usePokemonAbilities(pokemon?.abilities);
  const [activeTab, setActiveTab] = useState("info");
  const [tab, setTab] = useState('normal');

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

            <div className='flex border-b border-gray-200'>
              <button
                className={`px-4 py-2 font-medium ${tab === 'normal' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setTab('normal')}
              >
                Normal
              </button>
              <button
                className={`px-4 py-2 font-medium ${tab === 'mega' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setTab('mega')}
              >
                Mega
              </button>
            </div>

            {tab === 'normal' ? (
              <>
                <Header pokemon={pokemon} />
                <div className='p-6 w-full'>
                  <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
                  {activeTab === 'info' && <PokemonInfo pokemon={pokemon} evolutions={evolutions} abilitiesDetails={abilitiesDetails} description={description} />}
                  {activeTab === 'stats' && <PokemonStats pokemon={pokemon} />}
                  {activeTab === 'moves' && <MovesList moves={moves} />}
                </div>
              </>
            ) : (
              <div className="p-6">
                <h2 className="text-lg font-bold mb-2">Mega Evoluciones</h2>
                <div className="flex space-x-4">
                  {megaEvolutions.map((mega) => (
                    <div key={mega.name} className="text-center">
                      <img src={mega.sprite} alt={mega.name} className="w-24 h-24" />
                      <p className="text-sm font-medium">{mega.name}</p>
                      <p className="text-xs text-gray-600">Tipos: {mega.types.join(", ")}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;
