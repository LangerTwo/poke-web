import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import useRegionId from '../hooks/useRegionId';
import listPoke from '../assets/list-poke-min.jpg';
import Card from '../component/CardRegionDetail';
import BackLink from '../component/BackLink';


function RegionDetail() {
    const [numPokemon, setNumPokemon] = useState(0);
    const navigate = useNavigate();
    const { regionName, generationUrl } = useRegionId();

    // Función para obtener la cantidad de Pokémon
    const fetchNumPokemons = async (signal) => {
        if (!generationUrl) return;
        try {
            const response = await fetch(generationUrl, { signal });
            if (!response.ok) throw new Error(`Error en la petición: ${response.status}`);
            const data = await response.json();
            if (!signal.aborted) {
                setNumPokemon(data.pokemon_species.length);
            }
        } catch (error) {
            if (!signal.aborted) {
                console.error('Error al obtener el número de Pokémon:', error);
            }
        }
    };

    useEffect(() => {
        const controller = new AbortController();
        fetchNumPokemons(controller.signal);
        return () => controller.abort();
    }, [generationUrl]);

    const handleRegionClick = useCallback(() => {
        navigate(`/${regionName?.toLowerCase() || 'unknown'}/lista-pokemon`);
    }, [navigate, regionName]);

    const handleLeaderClick = useCallback(() => {
        navigate(`/${regionName?.toLowerCase() || 'unknown'}/lideres-gimnasio`);
    }, [navigate]);    

    return (
        // Contenedor de Cards
        <>
            <div className='pt-28 px-4'>
                <BackLink to="/" />
            </div>
            <div className="grid gap-6 md:grid-cols-2 p-4 max-w-6xl mx-auto">

                {/* Primera Card */}
                <Card 
                    title="Lista Pokémon"
                    description="Explora la colección completa de Pokémon disponibles"
                    imgSrc={listPoke}
                    infoText={`${numPokemon} Pokémon originales`}
                    buttonText="Ver todos"
                    onClick={handleRegionClick}
                />

                {/* Segunda Card */}
                <Card 
                    title="Líderes de Gimnasio"
                    description="Conoce a los poderosos líderes de gimnasio"
                    infoText="8 Líderes disponibles"
                    buttonText="Explorar"
                    onClick={handleLeaderClick}
                />
            </div>
        </>
    );
}

export default RegionDetail;
