import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useRegionId from '../hooks/useRegionId';
import MovesList from '../component/Acordeon';
import {ChevronDown} from 'lucide-react';
import typeTranslations from '../js/typeTranslations';
import usePokemonAbilities from '../hooks/usePokemonAbilities';

function PokemonDetails() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [evolutions, setEvolutions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [activeTab, setActiveTab] = useState('info')
  const [description, setDescription] = useState('');
  const { regionName } = useRegionId();

  const [moves, setMoves] = useState([]);
  const [types, setTypes] = useState([]);

  const [openMoveIndex, setOpenMoveIndex] = useState(null)
  const [openIndex, setOpenIndex] = useState(null);

  const { abilitiesDetails } = usePokemonAbilities(pokemon?.abilities);
  // console.log(abilitiesDetails);

  // obtener los detalles del pokemon
  useEffect(() => {
    const fetchPokemonDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        // Obtén los detalles del Pokémon
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        setPokemon(data);

        // Obtén la URL de la especie
        const speciesResponse = await fetch(data.species.url);
        const speciesData = await speciesResponse.json();

        // Obtener la description del pokemon
        const flavorText = speciesData.flavor_text_entries.find(
          (entry) => entry.language.name === 'es' // Asegúrate de usar el idioma correcto
        )?.flavor_text || 'Description not available.';
        setDescription(flavorText);

        // Obtén la cadena de evolución
        const evolutionResponse = await fetch(speciesData.evolution_chain.url);
        const evolutionData = await evolutionResponse.json();

        // Extrae las evoluciones
        const evolutionChain = [];
        let current = evolutionData.chain;      
        while (current) {
          evolutionChain.push(current.species.name);
          current = current.evolves_to[0];
        }
        setEvolutions(evolutionChain);

        // obtner los movimientos del pokemon
        const moveDetails = await Promise.all(
          data.moves.map(async (move) => {
            const moveResponse = await fetch(move.move.url);
            const moveData = await moveResponse.json();
            // console.log(moveData);

            // Obtener nombre en español del movimiento
            const spanishName = moveData.names.find(name => name.language.name === "es")?.name || move.move.name;

            // Obtener la descripción en español
            const effectText = moveData.flavor_text_entries.find(entry => entry.language.name === "es")?.flavor_text || "Efecto no disponible.";

            // Hacer una segunda petición para obtener el nombre de la damage_class en español
            let spanishDamageClass = moveData.damage_class.name; // Nombre en inglés por defecto
            if (moveData.damage_class?.url) {
              try {
                const damageResponse = await fetch(moveData.damage_class.url);
                const damageData = await damageResponse.json();

                spanishDamageClass = damageData.names.find(name => name.language.name === "es")?.name || moveData.damage_class.name;
              } catch (error) {
                console.error("Error al obtener damage_class:", error);
              }
            }
            
            return {
              name: spanishName,
              type: moveData.type.name,
              power: moveData.power,
              pp: moveData.pp,
              damage_class: spanishDamageClass,
              effect: effectText,             
            };
          })
        );
        setMoves(moveDetails);

        // Obtener el tipo del pokemon en español
        const types = await Promise.all(
          data.types.map(async (type) => {
            const typeResponse = await fetch(type.type.url);
            const typeData = await typeResponse.json();

            // Obtener el nombre en español
            const spanishType = typeData.names.find(name => name.language.name === "es")?.name || type.type.name;
            return spanishType;
          })
        );
        setTypes(types);
      } catch (err) {
        setError('Error al cargar los detalles del Pokémon');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [name]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  // Obtener el color de la barra de estadísticas
  const getStatColor = (value) => {
    if (value >= 100) return "bg-green-500"
    if (value > 80) return "bg-yellow-500"
    if (value > 40) return "bg-orange-500"
    if (value > 20) return "bg-yellow-500"
    return "bg-red-500"
  }

  // Mapear las estadísticas
  const statMapping = {
    'hp': 'HP',
    'attack': 'Atk',
    'defense': 'Def',
    'special-attack': 'SpAtk',
    'special-defense': 'SpDef',
    'speed': 'Spd',
  };

  const toggleMove = (index) => {
    setOpenMoveIndex(openMoveIndex === index ? null : index)
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
            <div className='flex justify-between items-center gap-2 mt-4'>
              <div className='flex items-center gap-2'>
                <h1 className='text-3xl font-bold capitalize'>{pokemon.name}</h1>
                <div className="flex space-x-2">
                  {pokemon.types.map((type) => {
                    const translatedType = typeTranslations[type.type.name] || type.type.name;
                    return (
                      <span key={translatedType} className={`${translatedType}2 px-3 pb-0.5 text-sm font-semibold bg-green-500 text-white rounded-full`}>
                        {translatedType}
                      </span>
                    )
                  })}
                </div>
              </div>
              <div className='ml-1 mt-1 text-white text-sm font-medium z-10 bg-black bg-opacity-50 px-2 py-1 rounded-full'>
                <span>N° </span>
                {pokemon.id}
              </div>
            </div>

            <div className='p-6 w-full'>
              <div className="flex border-b border-gray-200">
                <button
                  className={`px-4 py-2 font-medium ${
                    activeTab === 'info' 
                      ? 'text-green-600 border-b-2 border-green-600' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab('info')}
                >
                  Información
                </button>

                <button
                  className={`px-4 py-2 font-medium ${
                    activeTab === 'stats' 
                      ? 'text-green-600 border-b-2 border-green-600' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab('stats')}
                >
                  Estadísticas
                </button>
                <button
                  className={`px-4 py-2 font-medium ${
                    activeTab === 'moves' 
                      ? 'text-green-600 border-b-2 border-green-600' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setActiveTab('moves')}
                >
                  Movimientos
                </button>
              </div>

              {activeTab === 'info' ? (
                pokemon ? (
                  // Información del Pokémon
                  // Imagen, habilidades, evoluciones, descripción
                  <div className="space-y-3">
                    {/* Imagen del Pokemon */}
                    <div className="relative h-64 w-full pt-4">
                      <img 
                        src={
                          pokemon.sprites?.other?.['official-artwork']?.front_default ||
                          pokemon.sprites?.other?.dream_world?.front_default ||
                          pokemon.sprites?.front_default
                        }
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
                  <div className="space-y-4 pt-4 w-full">
                    <h2 className="text-xl font-semibold mb-2">Estadísticas</h2>
                    {pokemon.stats?.map((stat) => (
                      <div key={stat.stat.name} className="space-y-1 w-full">
                        <div className="flex justify-between text-sm w-full">
                          <span className="text-sm font-medium">
                            {statMapping?.[stat.stat.name] || stat.stat.name}
                          </span>
                          <span className="text-sm font-medium">{stat.base_stat}</span>
                        </div>
                        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                          <div className={`h-2 transition-all duration-500 ${getStatColor(stat.base_stat)}`}
                            style={{ width: `${(stat.base_stat / 150) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>Cargando...</p>
                )
              ) : activeTab === 'moves' ? (
                pokemon ? (
                  <div className="space-y-4 pt-4">
                    <h2 className="text-xl font-semibold mb-2">Movimientos</h2>
                    <div className="grid grid-row-1 gap-2">
                      <MovesList moves={moves} />
                    </div>
                  </div>
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