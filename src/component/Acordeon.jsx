import { useState } from 'react';

const MovesList = ({ moves }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    }
    return (
        <div className="w-full space-y-2">
          {moves.map((move, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-left"
              >
                <h3 className="font-semibold">{move.name}</h3>
                <span
                  className={`${move.type} px-3 py-1 text-sm font-medium capitalize rounded-full type`}
                >
                  {move.type}
                </span>
              </button>
    
              {openIndex === index && (
                <div className="p-4 space-y-2 bg-white">
                  <p className="text-sm text-gray-600">{move.effect}</p>
                  <div className="flex justify-between text-sm font-medium">
                    <span>Poder: {move.power || 0}</span>
                    <span>PP: {move.pp}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      );
    };
    
export default MovesList;