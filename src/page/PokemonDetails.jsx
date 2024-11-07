import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function PokemonDetails() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error('Error fetching Pokémon details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [name]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
      <img 
        src={
          pokemon.sprites?.other?.['official-artwork']?.front_default ||
          pokemon.sprites?.other?.dream_world?.front_default ||
          pokemon.sprites?.front_default
        }
        alt={pokemon.name}
      />
      <p>Weight: {pokemon.weight}</p>
      <p>Height: {pokemon.height}</p>
      <p>Types: {pokemon.types.map(type => type.type.name).join(', ')}</p>
      {/* Agrega más información del Pokémon según lo que desees mostrar */}
    </div>
  );
}

export default PokemonDetails;