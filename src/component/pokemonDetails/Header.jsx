import React from "react";
import typeTranslations from "../../js/typeTranslations";

const Header = ({ pokemon }) => {
  return (
    <div className='flex justify-between items-center gap-2 mt-4'>
      <div className='flex items-center gap-2'>
      <h1 className='text-3xl font-bold capitalize'>{pokemon.name}</h1>
      <div className="flex space-x-2">
          {pokemon.types.map((type) => {
          const translatedType = typeTranslations[type.type.name] || type.type.name;
          return (
              <span key={translatedType} className={`${translatedType}2 px-3 pb-0.5 text-sm font-semibold bg-green-500 text-white rounded-full`}>
              {translatedType}
              </span>
          )
          })}
      </div>
      </div>
      <div className='ml-1 mt-1 text-white text-sm font-medium z-10 bg-black bg-opacity-50 px-2 py-1 rounded-full'>
      <span>N° </span>
      {pokemon.id}
      </div>
    </div>
  );
};

export default Header;
