import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import RegionDetail from './page/RegionDetail';
import './index.css';

import kantoImage from './assets/kanto-region.png';
import johtoImage from './assets/johto-region.png';
import hoenImage from './assets/hoen-region.png';
import sinnohImage from './assets/sinnoh-region.png';
import teseliaImage from './assets/teselia-region.png';
import kalosImage from './assets/kalos-region.png';
import alolaImage from './assets/alola-region.png';
import galarImage from './assets/galar-region.png';

const regions = [
  { name: 'Kanto', image: kantoImage  },
  { name: 'Johto', image: johtoImage },
  { name: 'Hoenn', image: hoenImage },
  { name: 'Sinnoh', image: sinnohImage },
  { name: 'Unova', image: teseliaImage },
  { name: 'Kalos', image: kalosImage },
  { name: 'Alola', image: alolaImage },
  { name: 'Galar', image: galarImage },
];

function Home() {
  const navigate = useNavigate();

  const handleRegionClick = (regionName) => {
    navigate(`/region/${regionName.toLowerCase()}`);
  };

  return (
    <div className="region-grid">
      {regions.map((region) => (
        <div key={region.name} className="region-card" onClick={() => handleRegionClick(region.name)}>
          <img src={region.image} alt={region.name} className="region-image" />
          <h2>{region.name}</h2>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/region/:regionName" element={<RegionDetail />} />
      </Routes>
    </Router>
  );
}

export default App;