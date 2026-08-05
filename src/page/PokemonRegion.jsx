import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import regions from "../js/regions";
import RegionModal from "../component/RegionModal";

function PokemonRegion() {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [isAnimated, setIsAnimated] = useState(false);
  const navigate = useNavigate();

  const handleRegionClick = useCallback((regionName) => {
    navigate(`/${regionName.toLowerCase()}`);
  }, [navigate]);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <main className="container mx-auto px-4 py-8 pt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region) => (
            <div
              key={region.id}
              className={`transform transition-all duration-500 ${
                isAnimated ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <div
                onClick={() => setSelectedRegion(region)}
                className="group rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer bg-white border border-gray-700"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={region.image}
                    alt={`Mapa de ${region.name}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-gray-800 text-xl font-semibold mb-2">{region.name}</h2>
                  <p className="text-gray-800 line-clamp-2">{region.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <RegionModal region={selectedRegion} onClose={() => setSelectedRegion(null)} onNavigate={handleRegionClick} />
    </>
  );
}

export default PokemonRegion;
