import React from "react";

const MegaTabs = ({ tab, setTab }) => {
  return (
    <div className="flex justify-center mt-4">
      {["info", "stats"].map((tabMega) => (
        <button
          key={tabMega}
          className={`px-4 py-2 font-medium ${tab === tabMega ? "text-green-600 border-b-2 border-green-600" : "text-gray-500 hover:text-gray-700"}`}
          onClick={() => setTab(tabMega)}
        >
          {tabMega === "info" ? "Información" : "Estadísticas"}
        </button>
      ))}
    </div>
  );
};

export default MegaTabs;