import React from "react";

const PokemonMoves = ({ moves }) => {
  return (
    <div className="space-y-4 pt-4">
      <h2 className="text-xl font-semibold mb-2">Movimientos</h2>
      <ul>
        {moves.map((move, index) => (
          <li key={index} className="capitalize">{move.move.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonMoves;