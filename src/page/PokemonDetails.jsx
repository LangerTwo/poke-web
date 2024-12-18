import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Progress from "../component/Progress";


function PokemonDetails() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [evolutions, setEvolutions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const getStatColor = (value) => {
    if (value > 80) return "bg-green-500"
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
    <div className='flex flex-col gap-8'>
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 pt-24">
        <div className='grid grid-cols-2 justify-items-center md:justify-items-start mx-auto w-4/5'>
          <div className="w-48 sm:w-64 h-64 relative">
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
          <div className="flex-1">
            <h1 className='text-3xl font-bold capitalize mb-2'>{pokemon.name}</h1>
            <div className='flex flex-col gap-5'>
              <div className="flex space-x-2">
                {pokemon.types.map((type) => (
                  <span key={type.type.name} className={`${type.type.name} px-3 py-1 rounded-full text-sm font-semibold text-white`}>
                    {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
                  </span>
                ))}
              </div>
              {/* <p><strong>Weight:</strong> {pokemon.weight}</p>
              <p><strong>Height:</strong> {pokemon.height}</p> */}
              <div>
                  <h2 className="text-xl font-semibold mb-2">Estadísticas</h2>
                  <div className="space-y-2">
                    {pokemon.stats.map((stat) => (
                      <div key={stat.stat.name} className="flex flex-col">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">
                            {statMapping[stat.stat.name] || stat.stat.name}
                          </span>
                          <span className="text-sm font-medium">{stat.base_stat}</span>
                        </div>
                        <Progress
                          value={stat.base_stat}
                          max={150}
                          className="h-2"
                          indicatorClassName={getStatColor(stat.base_stat)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
            </div>
          </div>
          <div className='w-full'>
            <h2 className="text-xl font-semibold mb-2">Evoluciones</h2>
            <div className="flex space-x-4">
              {evolutions.map((evo, index) => (
                <div key={index} className="flex items-center">
                  {index > 0 && <span className="mx-2">→</span>}
                  <span className="capitalize">{evo.charAt(0).toUpperCase() + evo.slice(1)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='w-4/5 mx-auto'>
        <h3 className="text-xl font-semibold mb-2">Descripción:</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}

export default PokemonDetails;