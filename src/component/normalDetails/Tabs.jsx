import React from "react";

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex justify-center mt-4">
      {["info", "stats", "moves"].map((tab) => (
        <button
          key={tab}
          className={`px-2 py-1 md:px-4 md:py-2 font-medium ${activeTab === tab ? "text-green-600 border-b-2 border-green-600" : "text-gray-500 hover:text-gray-700"} text-xs md:text-lg transition duration-300`}
          onClick={() => setActiveTab(tab)}
        >
          {tab === "info" ? "Información" : tab === "stats" ? "Estadísticas" : "Movimientos"}
        </button>
      ))}
    </div>
  );
};

export default Tabs;