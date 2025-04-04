import React from "react";
import typeTranslations from "../../js/typeTranslations";

const MegaHeader = ({ name, types, id }) => {
    return (
        <div className="flex justify-between items-center gap-2 mt-4">
            <div className="flex items-center gap-2">
                <h1 className="text-sm md:text-3xl font-bold capitalize">{name}</h1>
                <div className="flex space-x-2">
                    {types.map((type, index) => {
                        const typeName = type?.name || type; // Manejar si viene como string u objeto
                        const translatedType = typeTranslations[typeName] || typeName; // Traducción
                        return (
                            <span
                                key={index}
                                className={`${translatedType}2 px-1.5 md:px-3 pb-0.5 text-xs md:text-sm font-semibold bg-green-500 text-white rounded-full`}
                            >
                                {translatedType}
                            </span>
                        );
                    })}
                </div>
            </div>
            <div className="ml-1 mt-1 text-white text-xs md:text-sm font-medium z-10 bg-black bg-opacity-50 px-1 md:px-2 md:py-1 py-0.5 rounded-full">
                <span>N° </span>
                {id}
            </div>
        </div>
    );
};

export default MegaHeader;