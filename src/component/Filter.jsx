import React from 'react';
import { useFilter } from '../useFilter';

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
    <div className="flex justify-center gap-5">
      <label>
        Tipo:
        <select onChange={handleTypeChange} disabled={loading}>
          <option value="">{loading ? 'Cargando...' : 'Seleccione un tipo'}</option>
          {types.map((type, index) => (
            <option key={index} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))}
        </select>
      </label>

      <label>
        Habilidad:
        <select onChange={handleAbilityChange} disabled={loading}>
          <option value="">{loading ? 'Cargando...' : 'Seleccione una habilidad'}</option>
          {abilities.map((ability, index) => (
            <option key={index} value={ability}>
              {ability.charAt(0).toUpperCase() + ability.slice(1)}
            </option>
          ))}
        </select>
      </label>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Filter;
