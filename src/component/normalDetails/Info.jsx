import React, { useState } from "react";
import InfoEvoluciones from "./informacion/InfoEvoluciones";
import InfoSwiper from "./informacion/infoSwiper";
import InfoDescription from "./informacion/infoDescription";
import InfoAbilities from "./informacion/infoAbilities";

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

      {/* Habilidades con efectos */}
      <InfoAbilities abilitiesDetails={abilitiesDetails} openIndex={openIndex} toggleAccordion={toggleAccordion} />

      {/* Descripcion Pokemon */}
      <InfoDescription description={description} openIndex={openIndex} toggleAccordion={toggleAccordion}/>
    </div>
  );
};

export default PokemonInfo;