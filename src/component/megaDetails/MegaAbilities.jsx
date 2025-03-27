import React from "react";
import { ChevronDown } from "lucide-react";
import abilityTranslations from "../../js/abilityTranslations";

const MegaAbilities = ({ abilities, openIndex, toggleAccordion }) => {
    return (
        <div className='flex flex-col mt-4'>
            <button
                onClick={() => toggleAccordion("abilities")}
                className="flex justify-between w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-left"
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
                    {abilities && abilities.length > 0 ? (
                        abilities.map((ability, index) => {
                            const abilityName = abilityTranslations[ability.name] || ability.name;
                            const abilityEffect = ability.effect;
                            return (
                                <div key={index} className='space-y-1 text-left'>
                                    <h3 className="font-semibold">{abilityName}</h3>
                                    <p className="text-sm">{abilityEffect}</p>
                                </div>
                            );
                        })
                    ) : (
                        <p className="text-white">Sin habilidad</p>
                    )}
                </div>
            </div> 
        </div>
    );
};

export default MegaAbilities;
// This component is used to display the abilities of a Mega Evolution Pokémon.