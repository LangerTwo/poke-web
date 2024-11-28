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
    <div className="pokemon-details container mx-auto pt-24">
      <h1 className='text-3xl underline'>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
      <div className='grid grid-cols-2'>
        <img 
          src={
            pokemon.sprites?.other?.['official-artwork']?.front_default ||
            pokemon.sprites?.other?.dream_world?.front_default ||
            pokemon.sprites?.front_default
          }
          alt={pokemon.name}
        />
        <div className='flex flex-col gap-5'>
          <p><strong>Weight:</strong> {pokemon.weight}</p>
          <p><strong>Height:</strong> {pokemon.height}</p>
          <div className="w-fit flex gap-8">
            {pokemon.types.map((type) => (
              <span key={type.type.name} className={`${type.type.name} rounded py-1 px-2 text-white`}>
                {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
              </span>
            ))}
          </div>
        </div>
      </div>

      <ul className='w-fit flex gap-5'>
        {evolutions.map((evo, index) => (
          <>
            {index > 0 && <span className='mx-2'>→</span>}
            <li key={index}>{evo.charAt(0).toUpperCase() + evo.slice(1)}</li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default PokemonDetails;