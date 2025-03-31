import React from "react";
import { ChevronDown } from "lucide-react";

const InfoAbilities = ({ abilitiesDetails, openIndex, toggleAccordion }) => {
  return (
    <div className='flex flex-col gap-3 mt-4'>
      {/* Habilidades normales */}
      {abilitiesDetails.some(ability => !ability.is_hidden) && (
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
                    <p className="text-sm text-gray-600">{ability.effect}</p>
                  </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Habilidades ocultas */}
      {abilitiesDetails.some(ability => ability.is_hidden) && (
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
            <div className='p-4 bg-gray-50 border-t border-gray-200'>
              {abilitiesDetails
                .filter(ability => ability.is_hidden)
                .map((ability, index) => (
                  <div key={index} className='space-y-1'>
                    <span className='capitalize font-medium'>{ability.spanishName}</span>
                    <p className="text-sm text-gray-600">{ability.effect}</p>
                  </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoAbilities;
// This component is used to display the abilities of a Pokémon.
// It includes both normal and hidden abilities, with the ability to toggle their visibility.