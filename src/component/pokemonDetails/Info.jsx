import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Info } from "lucide-react";
import useRegionId from "../../hooks/useRegionId";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import InfoEvoluciones from "./informacion/InfoEvoluciones";

const PokemonInfo = ({ pokemon, evolutions, abilitiesDetails, description }) => {
  const { regionName } = useRegionId();
    const [openIndex, setOpenIndex] = useState(null);
    const getPokemonImage = (sprites) =>
      sprites?.other?.["official-artwork"]?.front_default || sprites?.other?.dream_world?.front_default || sprites?.front_default;

    const getPokemonImageShiny = (sprites) =>
      sprites?.other?.["official-artwork"]?.front_shiny || sprites?.front_shiny;

    const toggleAccordion = (key) => {
      setOpenIndex(openIndex === key ? null : key);
    }

  return (
    <div className="space-y-3">
      {/* Swiper para cambiar entre imagen normal y shiny */}
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation={true} // Activa las flechas de navegación
        modules={[Navigation]} // Se debe importar el módulo de navegación
        className="relative"
      >
        <SwiperSlide className="relative h-64 w-full pt-4">
          <img 
            src={getPokemonImage(pokemon.sprites)} 
            alt={`${pokemon.name} normal`} 
            className="rounded-lg w-full h-full object-contain"
          />
        </SwiperSlide>
        <SwiperSlide className="relative h-64 w-full pt-4">
          <img 
            src={getPokemonImageShiny(pokemon.sprites)} 
            alt={`${pokemon.name} shiny`} 
            className="rounded-lg w-full h-full object-contain"
          />
        </SwiperSlide>
      </Swiper>

      {/* Evoluciones */}
      <InfoEvoluciones evolutions={evolutions} />

      {/* Añadir habilidad */}
      {pokemon.abilities && (
        <div>
          <button
            onClick={() => toggleAccordion("abilities")}
            className="flex justify-between items-center w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-left"
          >
            <h2 className='font-semibold'>Habilidad</h2>
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-200 ${
              openIndex === "abilities" ? "rotate-180" : ""
              }`}
            />
          </button>
          <div className={`overflow-hidden transition-all duration-200 ease-in-out ${openIndex === "abilities" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
            <div className='p-4 bg-gray-50 border-t border-gray-200'>
              {abilitiesDetails
                .filter(ability => !ability.is_hidden)
                .map((ability, index) => (
                  <div key={index} className='space-y-1'>
                    <span className='capitalize font-medium'>{ability.spanishName}</span>
                    <p className="text-sm text-gray-600">
                      {ability.effect}
                    </p>
                  </div>
              ))}
            </div>
          </div>                       
        </div>
      )}

      {/* Habilidades ocultas */}
      {pokemon.abilities?.some(ability => ability.is_hidden) && (
        <div>
          <button
            onClick={() => toggleAccordion("hidden-abilities")}
            className="flex justify-between items-center w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-left"
          >
          <h2 className='font-semibold'>Habilidad Oculta</h2>
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-200 ${
            openIndex === "hidden-abilities" ? "rotate-180" : ""
            }`}
          />
        </button>
        <div className={`overflow-hidden transition-all duration-200 ease-in-out ${openIndex === "hidden-abilities" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className='p-4 bg-gray-50 border-t border-gray-200 space-y-0'>
              {abilitiesDetails
                .filter(ability => ability.is_hidden)
                .map((ability, index) => (
                  <div key={index} className='space-y-1'>
                    <span className='capitalize font-medium'>{ability.spanishName}</span>
                    <p className="text-sm text-gray-600">
                      {ability.effect}
                    </p>
                  </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Descripcion Pokemon */}
      <div>
        <button
          onClick={() => toggleAccordion("description")}
          className="flex justify-between items-center w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-left"
        >
        <h3 className="font-semibold">Descripción</h3>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-200 ${
          openIndex === "description" ? "rotate-180" : ""
          }`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-200 ease-in-out ${openIndex === "description" ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="p-4 bg-gray-50 border-t border-gray-200">
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;