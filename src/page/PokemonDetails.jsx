import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useRegionId from '../hooks/useRegionId';
import MovesList from '../component/Acordeon';
import usePokemonAbilities from '../hooks/usePokemonAbilities';
import Header from '../component/normalDetails/Header';
import Tabs from '../component/normalDetails/Tabs';
import PokemonStats from '../component/normalDetails/Stats';
import PokemonInfo from '../component/normalDetails/Info';
import MegaEvolutions from '../component/MegaPokemon';
import TabsDetailsPokemon from '../component/TabsDetailsPokemon';
import usePokemonDetails from '../hooks/usePokemonDetail';

function PokemonDetails() {
  const { regionName } = useRegionId();
  const { name } = useParams();
  const { pokemon, evolutions, description, moves, types, megaEvolutions, loading, error } = usePokemonDetails(name);
  const { abilitiesDetails } = usePokemonAbilities(pokemon?.abilities);
  const [activeTab, setActiveTab] = useState("info");
  const [tab, setTab] = useState('normal');

  if (loading) return <div className="text-center">Cargando...</div>;
  if (error) {
    return (
      <div className="text-red-500 text-center">
        {error}
        <button onClick={() => window.location.reload()} className="mt-2 px-4 py-2 bg-red-600 text-white rounded-lg">
          Reintentar
        </button>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-8 flex items-center justify-center pt-[8rem]'>
      <div className='w-full bg-white/80 backdrop-blur border-2 border-green-200 rounded-xl shadow-lg overflow-hidden'>
        <div className="flex items-center justify-between p-3 md:p-6 border-b border-green-100">

          <div className='w-full max-w-2xl mx-auto'>
            <div className='absolute top-2 left-6'>
              <Link to={`/${regionName?.toLowerCase() || 'unknown'}/lista-pokemon`} className="text-green-500 hover:underline">
                ← Regresar
              </Link>
            </div>

            <TabsDetailsPokemon activeTab={tab} setActiveTab={setTab} />
            {tab === 'normal' ? (
              <>
                <Header pokemon={pokemon} />
                <div className='p-6 w-full'>
                  <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
                  {activeTab === 'info' && <PokemonInfo pokemon={pokemon} evolutions={evolutions} abilitiesDetails={abilitiesDetails} description={description} />}
                  {activeTab === 'stats' && <PokemonStats pokemon={pokemon} />}
                  {activeTab === 'moves' && <MovesList moves={moves} />}
                </div>
              </>
            ) : (
              <MegaEvolutions megaEvolutions={megaEvolutions} />
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;