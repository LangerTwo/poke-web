import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
// import PokemonPage from './pokemonPage';

import listPoke from '../assets/list-poke-min.jpg';
import { ChevronRight, Info} from 'lucide-react';
import useRegionId from '../hooks/useRegionId';
import { Link } from 'react-router-dom';


function RegionDetail() {
    const [numPokemon, setNumPokemon] = useState(0); // Estado para el número de Pokémon
    const navigate = useNavigate();
    const { regionName, generationUrl } = useRegionId();

    

    useEffect(() => {
        const fetchNumPokemons = async () => {
            if (generationUrl) {
                try {
                    const response = await fetch(generationUrl);
                    const data = await response.json();
                    setNumPokemon(data.pokemon_species.length); // Actualiza el estado con la longitud
                } catch (error) {
                    console.error('Error al obtener el número de Pokémon:', error);
                }
            }
        };
        fetchNumPokemons();
        
    }, [generationUrl]); // Ejecuta cuando la URL de generación cambie

    const handleRegionClick = () => {
        navigate(`/${regionName?.toLowerCase() || 'unknown'}/lista-pokemon`);
    };

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
                <div className='group overflow-hidden transition-all duration-300 hover:shadow-lg rounded-lg border bg-card text-card-foreground'>
                    <div className="flex flex-col space-y-1.5 p-6">
                        <h3 className="text-2xl font-bold">Lista Pokémon</h3>
                        <p className="text-sm text-muted-foreground">
                            Explora la colección completa de Pokémon disponibles
                        </p>
                    </div>
                    <div className="p-0">
                        <div className="relative overflow-hidden aspect-[4/3]">
                            <img className="object-cover transition-transform duration-300 group-hover:scale-105" src={listPoke} alt="Colección de Pokémon" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-6 bg-card">
                        <div className="flex items-center gap-2">
                            <Info className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{numPokemon} Pokémon originales</span>
                        </div>
                        <button onClick={() => handleRegionClick()} className="bg-stone-200 inline-flex items-center justify-center rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 group-hover:translate-x-1 transition-transform hover:shadow-lg hover:scale-105 hover:bg-secondary/90 hover:text-secondary-foreground hover:ring-2 hover:ring-secondary/80">
                            Ver todos
                            <ChevronRight className="w-4 h-4 ml-2" />
                        </button>
                    </div>
                </div>

                {/* Segunda Card */}
                <div className="group overflow-hidden transition-all duration-300 hover:shadow-lg rounded-lg border bg-card text-card-foreground">
            <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-bold">Líderes de Gimnasio</h3>
            <p className="text-sm text-muted-foreground">
                Conoce a los poderosos líderes de gimnasio
            </p>
            </div>
            <div className="p-0">
            <div className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-primary/10 to-primary/30">
                <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-4 border-primary/20 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20" />
                </div>
                </div>
            </div>
            </div>
            <div className="flex justify-between items-center p-6 bg-card">
                <div className="flex items-center gap-2">
                    <Info className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">8 Líderes disponibles</span>
                </div>
                <button className="bg-stone-200 inline-flex items-center justify-center rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 group-hover:translate-x-1 transition-transform hover:scale-105 hover:bg-secondary/90 hover:text-secondary-foreground hover:ring-2 hover:ring-secondary/80">
                    Explorar
                    <ChevronRight className="w-4 h-4 ml-2" />
                </button>
                </div>
            </div>
            </div>
        </>
    );
}

export default RegionDetail;
