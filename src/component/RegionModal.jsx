import Boton from "../component/Boton";
import { X } from "lucide-react";

function RegionModal({ region, onClose, onNavigate }) {
    if (!region) return null;
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="relative w-full max-w-2xl bg-gray-800 rounded-lg shadow-xl my-8">
          <div className="p-6 max-h-[100vh] overflow-y-auto">
            <button onClick={onClose} className="absolute top-4 right-8 rounded-full p-1 bg-white text-gray-600 hover:text-black hover:bg-gray-200 transition-colors hover:scale-110 transform duration-300">
              <X className="w-6 h-6" />
            </button>
            
            <h2 className="text-gray-300 text-2xl font-bold mb-2">{region.name}</h2>
            <p className="text-gray-400 mb-4">{region.description}</p>
  
            <img src={region.image} alt={`Mapa de ${region.name}`} className="w-full rounded-lg mb-4" />
  
            <div className="space-y-4">
              <InfoBlock title="Profesor" content={region.professor} />
              <InfoBlock title="Pokémon Iniciales" content={region.starterPokemons.join(", ")} />
              <InfoBlock title="Villanos" content={region.villain} />
              <InfoBlock title="Pokémon Legendarios" content={region.legendaryPokemons.join(", ")} />
            </div>
  
            <div className="mt-4" onClick={() => onNavigate(region.name)}>
              <Boton />
            </div>
          </div>
        </div>
      </div>
    );
}
  
const InfoBlock = ({ title, content }) => (
    <div>
        <h3 className="text-gray-300 font-semibold mb-1">{title}:</h3>
        <p className="text-gray-400">{content}</p>
    </div>
);

export default RegionModal;