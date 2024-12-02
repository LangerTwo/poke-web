import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function PokemonDetails() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [evolutions, setEvolutions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 pt-24">
      <div className='grid grid-cols-2 mx-auto w-4/5'>
        <div className="w-64 h-64 relative">
          <img 
              src={
                pokemon.sprites?.other?.['official-artwork']?.front_default ||
                pokemon.sprites?.other?.dream_world?.front_default ||
                pokemon.sprites?.front_default
              }
              alt={pokemon.name}
              layout="fill" objectFit="contain" className="rounded-lg"
            />
        </div>
        <div className="flex-1">
          <h1 className='text-3xl font-bold capitalize mb-2'>{pokemon.name}</h1>
          <div className='flex flex-col gap-5'>
            {/* <p><strong>Weight:</strong> {pokemon.weight}</p>
            <p><strong>Height:</strong> {pokemon.height}</p> */}
            <div className="flex space-x-2 mb-4">
              {pokemon.types.map((type) => (
                <span key={type.type.name} className={`${type.type.name} px-3 py-1 rounded-full text-sm font-semibold text-white`}>
                  {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div>
        <h2 className="text-xl font-semibold mb-2">Evoluciones</h2>
          <div className='flex space-x-4'>
            {evolutions.map((evo, index) => (
              <>
                <div key={evo} className="flex items-center">
                  {index > 0 && <span className='mx-2'>→</span>}
                  <span key={index} className="capitalize">{evo.charAt(0).toUpperCase() + evo.slice(1)}</span>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;