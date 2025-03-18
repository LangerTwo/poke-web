import React, { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import useRegionId from '../hooks/useRegionId';
import listPoke from '../assets/list-poke-min.jpg';
import Card from '../component/CardRegionDetail';


function RegionDetail() {
    const [numPokemon, setNumPokemon] = useState(0);
    const navigate = useNavigate();
    const { regionName, generationUrl } = useRegionId();

    // Función para obtener la cantidad de Pokémon
    const fetchNumPokemons = async () => {
        if (!generationUrl) return;
        try {
            const response = await fetch(generationUrl);
            const data = await response.json();
            setNumPokemon(data.pokemon_species.length);
        } catch (error) {
            console.error('Error al obtener el número de Pokémon:', error);
        }
    };

    useEffect(() => {
        fetchNumPokemons();
    }, [generationUrl]);

    const handleRegionClick = useCallback(() => {
        navigate(`/${regionName?.toLowerCase() || 'unknown'}/lista-pokemon`);
    }, [navigate, regionName]);

    return (
        // Contenedor de Cards
        <>
            <div className='pt-28 px-4'>
                <Link to="/" className="text-green-500 hover:underline">
                    ← Regresar
                </Link>
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
                />
            </div>
        </>
    );
}

export default RegionDetail;
