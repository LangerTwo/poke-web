import React from "react";
import { ChevronDown } from "lucide-react";

const InfoDescription = ({ description, openIndex, toggleAccordion }) => {
    return (
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
    );
}

export default InfoDescription;
// This component is used to display the description of a Pokémon.