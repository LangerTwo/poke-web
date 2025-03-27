import React from "react";

const MegaStats = ({ stats }) => {
    const getStatColor = (value) => {
        if (value >= 100) return "bg-green-500"
        if (value > 80) return "bg-yellow-500"
        if (value > 40) return "bg-orange-500"
        if (value > 20) return "bg-yellow-500"
        return "bg-red-500"
    }
      
    const statMapping = {
        'hp': 'HP',
        'attack': 'Atk',
        'defense': 'Def',
        'special-attack': 'SpAtk',
        'special-defense': 'SpDef',
        'speed': 'Spd',
    };

    return (
        <div className="space-y-4 pt-4 w-full">
            <h2 className="text-xl font-semibold mb-2">Estadísticas</h2>
            {stats?.map((stat) => (
                <div key={stat.name} className="space-y-1 w-full">
                    <div className="flex justify-between text-sm w-full">
                        <span className="text-sm font-medium">
                            {statMapping?.[stat.name] || stat.name}
                        </span>
                        <span className="text-sm font-medium">{stat.base}</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div 
                        className={`h-2 transition-all duration-500 ${getStatColor(stat.base)}`} 
                        style={{ width: `${(stat.base / 150) * 100}%` }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MegaStats;