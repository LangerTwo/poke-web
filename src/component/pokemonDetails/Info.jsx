import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import InfoEvoluciones from "./informacion/InfoEvoluciones";
import InfoSwiper from "./informacion/infoSwiper";
import InfoDescription from "./informacion/infoDescription";

const PokemonInfo = ({ pokemon, evolutions, abilitiesDetails, description }) => {
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
      <InfoSwiper normalSprite={getPokemonImage(pokemon.sprites)} shinySprite={getPokemonImageShiny(pokemon.sprites)} name={pokemon.name}/>

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
      <InfoDescription description={description} openIndex={openIndex} toggleAccordion={toggleAccordion}/>
    </div>
  );
};

export default PokemonInfo;