import React from 'react';
import { useFilter } from '../hooks/useFilter';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import useRegionId from '../hooks/useRegionId';

function Filter({ onCategoryChange }) {
  const { types, loading, error } = useFilter();
  const { regionName } = useRegionId();

  const handleTypeChange = (e) => {
    const selectedType = e.target.value;
    onCategoryChange('type', selectedType);
  };

  return (
    <div className="md:mx-auto lg-mx-4 container flex justify-center sm:justify-between gap-3 lg:w-[95%]">
      <div className='top-2 left-6'>
        <Link to={`/${regionName?.toLowerCase() || 'unknown'}`} className="text-green-500 hover:underline">
          ← Regresar
        </Link>
      </div>
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

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Filter;
