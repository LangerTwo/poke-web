import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Progress from "../component/Progress";


function PokemonDetails() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [evolutions, setEvolutions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [activeTab, setActiveTab] = useState('info')

  const [description, setDescription] = useState('');

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
      } catch (err) {
        setError('Error al cargar los detalles del Pokémon');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [name]);

  const { regionName } = useParams();
  const [generationUrl, setGenerationUrl] = useState(``);

  useEffect(() => {
    if (regionName) {
      const regionIdMap = {
        kanto: 1,
        johto: 2,
        hoenn: 3,
        sinnoh: 4,
        unova: 5,
        kalos: 6,
        alola: 7,
        galar: 8
      };
      const regionId = regionIdMap[regionName.toLowerCase()];
      if (regionId) {
        setGenerationUrl(`https://pokeapi.co/api/v2/generation/${regionId}`);
      }
    }
  }, [regionName]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const getStatColor = (value) => {
    if (value > 110) return "bg-green-500"
    if (value > 100) return "bg-yellow-500"
    if (value > 80) return "bg-orange-500"
    if (value > 40) return "bg-yellow-500"
    return "bg-red-500"
  }

  const statMapping = {
    'hp': 'HP',
    'attack': 'Atk',
    'defense': 'Def',
    'special-attack': 'SpAtk',
    'special-defense': 'SpDef',
    'speed': 'Spd',
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-8 flex items-center justify-center pt-[8rem]'>
      <div className='w-full bg-white/80 backdrop-blur border-2 border-green-200 rounded-xl shadow-lg overflow-hidden'>
        <div className="flex items-center justify-between p-6 border-b border-green-100">

          <div className='w-full max-w-2xl mx-auto'>
            <div className='flex items-center gap-2'>
              <h1 className='text-3xl font-bold capitalize'>{pokemon.name}</h1>
              <div className="flex space-x-2">
                {pokemon.types.map((type) => (
                  <span key={type.type.name} className={`${type.type.name} px-3 py-1 text-sm font-semibold bg-green-500 text-white rounded-full`}>
                    {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
                  </span>
                ))}
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
            </div>

            {activeTab === 'info' ? (
              <div className="space-y-4 pt-4">
                <div className="relative h-64 w-full">
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

                <div className="space-y-2">
                  <h2 className="font-semibold">Evoluciones</h2>
                  <div className="flex items-center justify-center gap-4">
                    {evolutions.map((evo, index) => (
                      <Link key={index} to={`/region/${regionName?.toLowerCase() || 'unknown'}/lista-pokemon/pokemon/${evo}`}>
                        <div key={index} className="flex items-center">
                          {index > 0 && <span className="mx-2">→</span>}
                          <span className="capitalize hover:underline hover:text-red-600">{evo.charAt(0).toUpperCase() + evo.slice(1)}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold">Descripción</h3>
                  <p className="text-gray-600">{description}</p>
                </div>

              </div>
            ) : (
              <div className="space-y-4 pt-4 w-full">
                  <h2 className="text-xl font-semibold mb-2">Estadísticas</h2>
                    {pokemon.stats.map((stat) => (
                      <div key={stat.stat.name} className="space-y-1 w-full">
                        <div className="flex justify-between text-sm w-full">
                          <span className="text-sm font-medium">
                            {statMapping[stat.stat.name] || stat.stat.name}
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
            )}

            </div>
          </div>
        </div>
      </div>
    </div>
      //           {/* <Link to={`/region/${regionName?.toLowerCase() || 'unknown'}/lista-pokemon`} className="text-green-500 hover:underline">
      //             ← Regresar
      //           </Link> */}
  );
}

export default PokemonDetails;