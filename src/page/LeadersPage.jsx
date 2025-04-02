import React from "react";
import useGymLeaders from "../hooks/useGymLeaders";
import { useParams } from "react-router-dom";

const LeadersPage = () => {
    const { regionName } = useParams();
    const leaders = useGymLeaders(regionName);
    console.log(leaders); // Para verificar los líderes de gimnasio

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Líderes de Gimnasio</h1>
            <p className="text-lg text-gray-700 mb-8">Aquí encontrarás información sobre los líderes de gimnasio de cada región.</p>
            <div className="mt-8">
                {/* Aquí puedes agregar más contenido o componentes relacionados con los líderes de gimnasio */}
            </div>
        </div>
    );
}

export default LeadersPage;