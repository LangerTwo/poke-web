import { useFilter } from "./useFilter";
import './App.css'

function App() {
    const {selectedCategory, setSelectedCategory, options, loading, error} = useFilter()
    
    return (
        <div>
        {/* Primer select estático */}
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">Seleccione una categoría</option>
            <option value="region">Región</option>
            <option value="type">Tipo</option>
            <option value="ability">Habilidad</option>
        </select>

        {/* Segundo select dinámico basado en la selección del primero */}
        {loading ? (
            <p>Cargando opciones...</p>
        ) : error ? (
            <p>{error}</p>
        ) : (
            <select>
            <option value="">Seleccione una opción</option>
            {options.map((option, index) => (
                <option key={index} value={option}>
                {option.charAt(0).toUpperCase() + option.slice(1)} {/* Capitalizar */}
                </option>
            ))}
            </select>
        )}
        </div>
    );
}

export default App;