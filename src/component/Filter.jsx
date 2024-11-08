import React from 'react';
import { useFilter } from '../useFilter';

function Filter({ onCategoryChange }) {
  const { selectedCategory, setSelectedCategory, options, loading, error } = useFilter();

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    onCategoryChange(e.target.value, null); // Resetea la opción seleccionada
  };

  const handleOptionChange = (e) => {
    onCategoryChange(selectedCategory, e.target.value);
  };

  return (
    <div className='flex justify-center gap-5 my-9'>
      <label>
        Seleccionar categoría:
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">Seleccione una categoría</option>
          <option value="region">Región</option>
          <option value="type">Tipo</option>
          <option value="ability">Habilidad</option>
        </select>
      </label>

      <br />

      <label>
        Opciones:
        <select onChange={handleOptionChange} disabled={!selectedCategory || loading}>
          <option value="">{loading ? 'Cargando...' : 'Seleccione una opción'}</option>
          {options.map((option, index) => (
            <option key={index} value={index + 1}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </option>
          ))}
        </select>
      </label>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Filter;