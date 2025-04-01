import { useEffect, useState } from "react";

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
              // console.log("Mega Evoluciones:", megaEvolutionsData);

              // Obtener información detallada de cada habilidad
              const abilitiesWithEffects = await Promise.all(
                formData.abilities.map(async (a) => {
                  const abilityData = await fetch(a.ability.url).then((res) => res.json());
                  // console.log("Habilidades con efectos:", abilityData);

                  // Buscar la descripción en español
                  const effectEntry = abilityData.flavor_text_entries.find(entry => entry.language.name === "es");
                  const effect = effectEntry ? effectEntry.flavor_text : "Sin descripción";
                  return {
                    name: a.ability.name,
                    effect: effect,
                  };
                })
              );

              return {
                name: variety.pokemon.name.replace("-mega", " Mega"),
                sprite: formData.sprites?.other?.["official-artwork"]?.front_default || formData.sprites.front_default,
                shinySprite: formData.sprites?.other?.["official-artwork"]?.front_shiny || sprites?.front_shiny,
                types: formData.types.map((t) => t.type.name),
                abilities: abilitiesWithEffects,
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
}

export default usePokemonDetails;