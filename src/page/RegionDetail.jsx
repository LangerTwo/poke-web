import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import PokemonPage from './pokemonPage';
function RegionDetail() {
    return (
        <>
            <div>
                <div>
                    <h3>Lista Pokemon</h3>
                </div>
                <div>
                    <h3>Lideres Gymnasio</h3>
                </div>
            </div>
        </>
    );
}

function RoutePage() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RegionDetail />} />
                <Route path="/region/:regionName" element={<PokemonPage />} />
            </Routes>
        </Router>
    );
}

export default RoutePage