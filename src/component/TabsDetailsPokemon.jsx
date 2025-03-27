import React from "react";

const TabsDetailsPokemon = ({ activeTab, setActiveTab }) => {
    return (
        <div className="flex justify-center mt-4">
            {["normal", "mega"].map((tab) => (
                <button
                    key={tab}
                    className={`px-4 py-2 font-medium ${activeTab === tab ? "text-green-600 border-b-2 border-green-600" : "text-gray-500 hover:text-gray-700"}`}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab === "normal" ? "Normal" : "Mega"}
                </button>
            ))}
        </div>
    );
};

export default TabsDetailsPokemon;
