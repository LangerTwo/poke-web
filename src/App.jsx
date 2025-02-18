// import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegionDetail from './page/RegionDetail';
import PokemonPage from './page/pokemonPage';
import PokemonDetails from './page/PokemonDetails';
import PokemonRegion from './page/PokemonRegion';
import Navbar from './component/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PokemonRegion />} />
        <Route path="/:regionName" element={<RegionDetail />} />
        <Route path="/:regionName/lista-pokemon" element={<PokemonPage />} />
        <Route path="/:regionName/lista-pokemon/pokemon/:name" element={<PokemonDetails />} />
      </Routes>
    </Router>
  );
}

export default App;