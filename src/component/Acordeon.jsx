import { useState } from 'react';
import {ChevronDown} from 'lucide-react';
import typeTranslations from '../hooks/usetypeTranslations';


const MovesList = ({ moves }) => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleAccordion = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    }
    return (
        <div className="w-full space-y-2">
          {moves.map((move, index) => {
            const translatedType = typeTranslations[move.type] || move.type;
            return (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex justify-between items-center w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-left"
                >
                  <h3 className="font-semibold">{move.name}</h3>
                  <div className="flex justify-between items-center space-x-2">
                      <span
                        className={`${translatedType}2 text-white leading-4 px-3 pb-0.5 text-sm font-medium capitalize rounded-full`}
                      >
                        {translatedType}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${
                        openIndex === index ? "rotate-180" : ""
                        }`}
                      />
                  </div>
                </button>
      
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="p-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-2">{move.effect}</p>
                    <div className="flex justify-between text-sm font-medium">
                      <span>Poder: {move.power || "N/A"}</span>
                      <span>Clase: {move.damage_class || "N/A"}</span>                    
                      <span>PP: {move.pp}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      );
    };
    
export default MovesList;