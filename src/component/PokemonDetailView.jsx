import React, { useState } from 'react';
import Header from './normalDetails/Header';
import Tabs from './normalDetails/Tabs';
import PokemonStats from './normalDetails/Stats';
import PokemonInfo from './normalDetails/Info';
import MovesList from './Acordeon';
import MegaEvolutions from './MegaPokemon';
import TabsDetailsPokemon from './TabsDetailsPokemon';

const PokemonDetailView = ({
  pokemon,
  evolutions,
  description,
  moves,
  megaEvolutions,
  abilitiesDetails
}) => {
  const [activeTab, setActiveTab] = useState("info");
  const [tab, setTab] = useState('normal');

  return (
    <>
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
    </>
  );
};

export default PokemonDetailView;
