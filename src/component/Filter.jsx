import React from 'react';
import { useFilter } from '../useFilter';
import { ChevronDown } from 'lucide-react';

function Filter({ onCategoryChange }) {
  const { types, abilities, loading, error } = useFilter();

  const handleTypeChange = (e) => {
    const selectedType = e.target.value;
    onCategoryChange('type', selectedType);
  };

  const handleAbilityChange = (e) => {
    const selectedAbility = e.target.value;
    onCategoryChange('ability', selectedAbility);
  };

  return (
    <div className="flex justify-end gap-3 mr-3">
      <div className="relative">
        <select className="appearance-none w-44 px-4 py-2 pr-10 border rounded-md focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed" onChange={handleTypeChange} disabled={loading}>
          <option value="" className="text-gray-900">
            {loading ? 'Cargando...' : 'Tipo'}
          </option>
          {types.map((type, index) => (
            <option key={index} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-6 w-6 pointer-events-none text-gray-700" />
      </div>

      <div className="relative">
        <select className="appearance-none w-44 px-4 py-2 pr-10 border rounded-md placeholder-black/70 focus:outline-none focus:ring-2 focus:ring-black/30 disabled:opacity-50 disabled:cursor-not-allowed"  onChange={handleAbilityChange} disabled={loading}>
          <option value="" className="text-gray-900">
            {loading ? 'Cargando...' : 'Habilidad'}
          </option>
          {abilities.map((ability, index) => (
            <option key={index} value={ability}>
              {ability.charAt(0).toUpperCase() + ability.slice(1)}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-6 w-6 pointer-events-none text-gray-700" />
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Filter;
