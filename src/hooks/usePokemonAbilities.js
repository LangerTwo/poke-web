import { useState, useEffect } from 'react';

const usePokemonAbilities = (abilities) => {
    const [abilitiesDetails, setAbilitiesDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!abilities || abilities.length === 0) return;

        const fetchAbilities = async () => {
            setLoading(true);
            try {
                // Obtener las habilidades del pokemon y sus efectos
                const abilitiesDetails = await Promise.all(
                    abilities.map(async (ability) => {
                        const abilityResponse = await fetch(ability.ability.url);
                        const abilityData = await abilityResponse.json();

                        // Obtener el nombre en español de la habilidad
                        const spanishName = abilityData.names.find(name => name.language.name === "es")?.name || ability.ability.name;
                        
                        const effect = abilityData.flavor_text_entries.find(entry => entry.language.name === "es")?.flavor_text || "Sin descripción";

                        return {
                            spanishName,
                            effect,
                            is_hidden: ability.is_hidden,
                        };
                    })
                );  
                setAbilitiesDetails(abilitiesDetails);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchAbilities();
    }, [abilities]);

    return { abilitiesDetails, loading, error };
};

export default usePokemonAbilities;