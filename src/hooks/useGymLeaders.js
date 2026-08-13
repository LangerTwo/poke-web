

// Importar todas las regiones
import kanto from "../js/GymLeaders/gymLeadersKantoFRLG";
import johto from "../js/GymLeaders/gymLeadersJohto";
import hoenn from "../js/GymLeaders/gymLeadersHoenn";
import sinnoh from "../js/GymLeaders/gymLeadersSinnoh";
import teselia from "../js/GymLeaders/gymLeadersTeselia";
import kalos from "../js/GymLeaders/gymLeadersKalos";
import alola from "../js/GymLeaders/kahunasAlola";
import galar from "../js/GymLeaders/gymLeadersGalar";
import paldea from "../js/GymLeaders/gymLeadersPaldea";

// Mapeo de regiones a sus respectivos datos
const regionsData = {
    kanto,
    johto,
    hoenn,
    sinnoh,
    teselia,
    kalos,
    alola,
    galar,
    paldea,
};

const useGymLeaders = (region) => {
    return regionsData[region] || [];
};

export default useGymLeaders;