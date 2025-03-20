import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useRegionId from '../hooks/useRegionId';
import MovesList from '../component/Acordeon';
import {ChevronDown} from 'lucide-react';
import usePokemonAbilities from '../hooks/usePokemonAbilities';

import Header from '../component/pokemonDetails/Header';
import Tabs from '../component/pokemonDetails/Tabs';
import PokemonStats from '../component/pokemonDetails/Stats';
import PokemonMoves from '../component/pokemonDetails/Moves';

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

        // Evolución
        const evolutionData = await fetch(species.evolution_chain.url).then((res) => res.json());
        const evolutionChain = [];
        let current = evolutionData.chain;
        while (current) {
          evolutionChain.push(current.species.name);
          current = current.evolves_to[0];
        }

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
  if (error)
    return (
      <div className="text-red-500 text-center">
        {error}
        <button onClick={() => window.location.reload()} className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg">
          Reintentar
        </button>
      </div>
    );

  // Obtener el color de la barra de estadísticas
  

  // Mapear las estadísticas

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
                  // Información del Pokémon
                  // Imagen, habilidades, evoluciones, descripción
                  <div className="space-y-3">
                    {/* Imagen del Pokemon */}
                    <div className="relative h-64 w-full pt-4">
                      <img 
                        src={getPokemonImage(pokemon.sprites)}
                        alt={pokemon.name}
                        className="rounded-lg w-full h-full object-contain"
                      />
                    </div>

                    {/* Evoluciones */}
                    <div className="space-y-2">
                      <h2 className="font-semibold">Evoluciones</h2>
                      <div className="flex justify-center">
                        {evolutions.map((evo, index) => (
                          <Link key={index} to={`/${regionName?.toLowerCase() || 'unknown'}/lista-pokemon/pokemon/${evo}`}>
                            <div className="flex items-center">
                              {index > 0 && <span className="mx-2">→</span>}
                              <span className="capitalize hover:underline hover:text-red-600">
                                {evo.charAt(0).toUpperCase() + evo.slice(1)}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Añadir habilidad */}
                    {pokemon.abilities && (
                      <div>
                        <button
                          onClick={() => toggleAccordion("abilities")}
                          className="flex justify-between items-center w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-left"
                        >
                          <h2 className='font-semibold'>Habilidad</h2>
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-200 ${
                            openIndex === "abilities" ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <div className={`overflow-hidden transition-all duration-200 ease-in-out ${openIndex === "abilities" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                          <div className='p-4 bg-gray-50 border-t border-gray-200'>
                            {abilitiesDetails
                              .filter(ability => !ability.is_hidden)
                              .map((ability, index) => (
                                <div key={index} className='space-y-1'>
                                  <span className='capitalize font-medium'>{ability.spanishName}</span>
                                  <p className="text-sm text-gray-600">
                                    {ability.effect}
                                  </p>
                                </div>
                            ))}
                          </div>
                        </div>                       
                      </div>
                    )}

                    {/* Habilidades ocultas */}
                    {pokemon.abilities?.some(ability => ability.is_hidden) && (
                      <div>
                        <button
                          onClick={() => toggleAccordion("hidden-abilities")}
                          className="flex justify-between items-center w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-left"
                        >
                        <h2 className='font-semibold'>Habilidad Oculta</h2>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${
                          openIndex === "hidden-abilities" ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div className={`overflow-hidden transition-all duration-200 ease-in-out ${openIndex === "hidden-abilities" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                        <div className='p-4 bg-gray-50 border-t border-gray-200 space-y-0'>
                            {abilitiesDetails
                              .filter(ability => ability.is_hidden)
                              .map((ability, index) => (
                                <div key={index} className='space-y-1'>
                                  <span className='capitalize font-medium'>{ability.spanishName}</span>
                                  <p className="text-sm text-gray-600">
                                    {ability.effect}
                                  </p>
                                </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Descripcion Pokemon */}
                    <div>
                      <button
                        onClick={() => toggleAccordion("description")}
                        className="flex justify-between items-center w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-left"
                      >
                      <h3 className="font-semibold">Descripción</h3>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${
                        openIndex === "description" ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div className={`overflow-hidden transition-all duration-200 ease-in-out ${openIndex === "description" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                      <div className="p-4 bg-gray-50 border-t border-gray-200">
                          <p className="text-gray-600">{description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
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