import { useEffect, useState } from "react";

const pokemonDetailsCache = new Map();

const usePokemonDetails = (name) => {
  const [data, setData] = useState({
    pokemon: null,
    evolutions: [],
    description: "",
    moves: [],
    types: [],
    megaEvolutions: [],
    loading: !pokemonDetailsCache.has(name),
    error: null,
  });

  useEffect(() => {
    if (!name) return;
    if (pokemonDetailsCache.has(name)) {
      setData(pokemonDetailsCache.get(name));
      return;
    }

    const controller = new AbortController();
    const { signal } = controller;

    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, { signal });
        if (!response.ok) throw new Error("No se pudo obtener el Pokémon");
        const pokemon = await response.json();

        const checkOk = (res) => { if (!res.ok) throw new Error(`Error: ${res.status}`); return res.json(); };

        const [species, movesDetails, typesDetails] = await Promise.all([
          fetch(pokemon.species.url, { signal }).then(checkOk),
          Promise.all(
            pokemon.moves.slice(0, 30).map(async (move) => {
              const moveData = await fetch(move.move.url, { signal }).then(checkOk);
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
              const typeData = await fetch(type.type.url, { signal }).then(checkOk);
              return typeData.names.find((n) => n.language.name === "es")?.name || type.type.name;
            })
          ),
        ]);

        // Obtener Mega Evoluciones
        const megaEvolutionsData = await Promise.all(
          species.varieties
            .filter((variety) => variety.pokemon.name.includes("-mega")) // Filtrar Megas
            .map(async (variety) => {
              const formData = await fetch(variety.pokemon.url, { signal }).then(checkOk);

              // Obtener información detallada de cada habilidad
              const abilitiesWithEffects = await Promise.all(
                formData.abilities.map(async (a) => {
                  const abilityData = await fetch(a.ability.url, { signal }).then(checkOk);

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
                shinySprite: formData.sprites?.other?.["official-artwork"]?.front_shiny || formData.sprites?.front_shiny,
                types: formData.types.map((t) => t.type.name),
                abilities: abilitiesWithEffects,
                id: formData.id,
                stats: formData.stats.map((s) => ({ name: s.stat.name, base: s.base_stat })),
              };
            })
        );
        
        // Evolución
        const evolutionData = await fetch(species.evolution_chain.url, { signal }).then(checkOk);
        const evolutionChain = [];
        let current = evolutionData.chain;
        while (current) {
          evolutionChain.push(current.species.name);
          current = current.evolves_to[0];
        }

        const finalData = {
          pokemon,
          evolutions: evolutionChain,
          description: species.flavor_text_entries.find((e) => e.language.name === "es")?.flavor_text || "Descripción no disponible.",
          moves: movesDetails,
          types: typesDetails,
          megaEvolutions: megaEvolutionsData,
          loading: false,
          error: null,
        };
        
        if (!signal.aborted) {
          pokemonDetailsCache.set(name, finalData);
          setData(finalData);
        }
      } catch (error) {
        if (!signal.aborted) {
          setData((prev) => ({ ...prev, loading: false, error: error.message }));
        }
      }
    };

    fetchPokemonDetails();

    return () => controller.abort();
  }, [name]);

  return data;
}

export default usePokemonDetails;