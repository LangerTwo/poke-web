import { useState, useEffect } from "react";

// Importar todas las regiones
import kanto from "../js/GymLeaders/gymLeadersKantoFRLG";
import johto from "../js/GymLeaders/gymLeadersJohto";
import hoenn from "../js/GymLeaders/gymLeadersHoenn";
import sinnoh from "../js/GymLeaders/gymLeadersSinnoh";
import unova from "../js/GymLeaders/gymLeadersTeselia";
import kalos from "../js/GymLeaders/gymLeadersKalos";
import alola from "../js/GymLeaders/kahunasAlola";
import galar from "../js/GymLeaders/gymLeadersGalar";
// import paldea from "../js/GymLeaders/gymLeadersPaldea";

// Mapeo de regiones a sus respectivos datos
const regionsData = {
    kanto,
    johto,
    hoenn,
    sinnoh,
    unova,
    kalos,
    alola,
    galar,
    // paldea,
};

const useGymLeaders = (region) => {
    const [leaders, setLeaders] = useState([]);

    useEffect(() => {
        if (regionsData[region]) {
            setLeaders(regionsData[region]);
        } else {
            console.error(`No hay datos de líderes de gimnasio para la región: ${region}`);
            setLeaders([]); // Vacío si la región no existe
        }
    }, [region]);

    return leaders;
};

export default useGymLeaders;