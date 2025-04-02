// import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegionDetail from './page/RegionDetail';
import PokemonPage from './page/pokemonPage';
import PokemonDetails from './page/PokemonDetails';
import PokemonRegion from './page/PokemonRegion';
import Navbar from './component/Navbar';
import PokemonModal from './component/PokemonModal';
import { PokemonModalProvider } from './context/PokemonModalContext';
import LeadersPage from './page/LeadersPage';


function App() {
  return (
    <PokemonModalProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<PokemonRegion />} />
          <Route path="/:regionName" element={<RegionDetail />} />
          <Route path="/:regionName/lideres-gimnasio" element={<LeadersPage />} />
          <Route path="/:regionName/lista-pokemon" element={<PokemonPage />} />
          <Route path="/:regionName/lista-pokemon/pokemon/:name" element={<PokemonDetails />} />
        </Routes>
        <PokemonModal />
      </Router>
    </PokemonModalProvider>
  );
}

export default App;