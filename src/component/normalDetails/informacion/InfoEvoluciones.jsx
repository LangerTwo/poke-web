import React from "react";
import { Link } from "react-router-dom";
import useRegionId from "../../../hooks/useRegionId";

const InfoEvoluciones = ({ evolutions }) => {
    const { regionName } = useRegionId();

    return (
        <div className="space-y-2">
            <div className="flex justify-center">
                {evolutions.map((evo, index) => (
                <Link key={index} to={`/${regionName?.toLowerCase() || 'unknown'}/lista-pokemon/pokemon/${evo}`}>
                    <div className="flex items-center">
                    {index > 0 && <span className="mx-2">→</span>}
                    <span className="capitalize hover:underline hover:text-red-600">
                        {evo.charAt(0).toUpperCase() + evo.slice(1)}
                    </span>
                    </div>
                </Link>
                ))}
            </div>
        </div>
    );
};

export default InfoEvoluciones;