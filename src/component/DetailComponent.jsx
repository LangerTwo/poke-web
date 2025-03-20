import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import MovesList from "./Acordeon";

const getStatColor = (value) => {
    if (value >= 100) return "bg-green-500"
    if (value > 80) return "bg-yellow-500"
    if (value > 40) return "bg-orange-500"
    if (value > 20) return "bg-yellow-500"
    return "bg-red-500"
  }

  // Mapear las estadísticas
  const statMapping = {
    'hp': 'HP',
    'attack': 'Atk',
    'defense': 'Def',
    'special-attack': 'SpAtk',
    'special-defense': 'SpDef',
    'speed': 'Spd',
  };

  const toggleAccordion = (key) => {
    setOpenIndex(openIndex === key ? null : key);
  }

const PokemonHeader = ({ pokemon, regionName, typeTranslations }) => (
  <div className='flex justify-between items-center gap-2 mt-4'>
    <div className='flex items-center gap-2'>
      <h1 className='text-3xl font-bold capitalize'>{pokemon.name}</h1>
      <div className='flex space-x-2'>
        {pokemon.types.map((type) => (
          <span key={type.type.name} className={`${typeTranslations[type.type.name]}2 px-3 pb-0.5 text-sm font-semibold bg-green-500 text-white rounded-full`}>
            {typeTranslations[type.type.name] || type.type.name}
          </span>
        ))}
      </div>
    </div>
    <div className='ml-1 mt-1 text-white text-sm font-medium z-10 bg-black bg-opacity-50 px-2 py-1 rounded-full'>
      <span>N° </span>{pokemon.id}
    </div>
  </div>
);

const PokemonTabs = ({ activeTab, setActiveTab }) => (
  <div className="flex justify-center mt-4">
    {["info", "stats", "moves"].map((tab) => (
      <button
        key={tab}
        className={`px-4 py-2 font-medium ${activeTab === tab ? "text-green-600 border-b-2 border-green-600" : "text-gray-500 hover:text-gray-700"}`}
        onClick={() => setActiveTab(tab)}
      >
        {tab === "info" ? "Información" : tab === "stats" ? "Estadísticas" : "Movimientos"}
      </button>
    ))}
  </div>
);

const PokemonImage = ({ pokemon, getPokemonImage }) => (
  <div className="relative h-64 w-full pt-4">
    <img src={getPokemonImage(pokemon.sprites)} alt={pokemon.name} className="rounded-lg w-full h-full object-contain" />
  </div>
);

const PokemonEvolutions = ({ evolutions, regionName }) => (
  <div className="flex justify-center">
    {evolutions.map((evo, index) => (
      <Link key={index} to={`/${regionName?.toLowerCase() || 'unknown'}/lista-pokemon/pokemon/${evo}`}>
        <div className="flex items-center">
          {index > 0 && <span className="mx-2">→</span>}
          <span className="capitalize hover:underline hover:text-red-600">{evo}</span>
        </div>
      </Link>
    ))}
  </div>
);

const PokemonAbilities = ({ abilitiesDetails, openIndex, toggleAccordion }) => (
  <div>
    {abilitiesDetails.map((ability, index) => (
      <button key={index} onClick={() => toggleAccordion(ability.spanishName)} className="flex justify-between items-center w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-left">
        <h2 className='font-semibold'>{ability.spanishName}</h2>
        <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${openIndex === ability.spanishName ? "rotate-180" : ""}`} />
      </button>
    ))}
  </div>
);

const PokemonDescription = ({ description, openIndex, toggleAccordion }) => (
  <div>
    <button onClick={() => toggleAccordion("description")} className="flex justify-between items-center w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-left">
      <h3 className="font-semibold">Descripción</h3>
      <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${openIndex === "description" ? "rotate-180" : ""}`} />
    </button>
    <div className={`overflow-hidden transition-all duration-200 ease-in-out ${openIndex === "description" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
      <div className="p-4 bg-gray-50 border-t border-gray-200">
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

const PokemonStats = ({ pokemon, statMapping, getStatColor }) => (
  <div className="space-y-4 pt-4 w-full">
    <h2 className="text-xl font-semibold mb-2">Estadísticas</h2>
    {pokemon.stats.map((stat) => (
      <div key={stat.stat.name} className="space-y-1 w-full">
        <div className="flex justify-between text-sm w-full">
          <span className="text-sm font-medium">{statMapping[stat.stat.name] || stat.stat.name}</span>
          <span className="text-sm font-medium">{stat.base_stat}</span>
        </div>
        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
          <div className={`h-2 transition-all duration-500 ${getStatColor(stat.base_stat)}`} style={{ width: `${(stat.base_stat / 150) * 100}%` }}></div>
        </div>
      </div>
    ))}
  </div>
);

const PokemonMoves = ({ moves }) => (
  <div className="space-y-4 pt-4">
    <h2 className="text-xl font-semibold mb-2">Movimientos</h2>
    <div className="grid grid-row-1 gap-2">
      <MovesList moves={moves} />
    </div>
  </div>
);

export { PokemonHeader, PokemonTabs, PokemonImage, PokemonEvolutions, PokemonAbilities, PokemonDescription, PokemonStats, PokemonMoves };
