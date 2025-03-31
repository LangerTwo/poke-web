import React, { useState } from "react";
import MegaTabs from "./megaDetails/MegaTabs";
import MegaAbilities from "./megaDetails/MegaAbilities";
import MegaHeader from "./megaDetails/MegaHeader";
import MegaSwiper from "./megaDetails/MegaSwiper";
import MegaStats from "./megaDetails/MegaStats";

const MegaEvolutions = ({ megaEvolutions }) => {
    const [openIndex, setOpenIndex] = useState(null);
    const [tab, setTab] = useState('info');

    if (!megaEvolutions || megaEvolutions.length === 0) {
        return <p className="text-gray-500">No hay Mega Evoluciones disponibles.</p>;
    }

    const toggleAccordion = (key) => {
        setOpenIndex(openIndex === key ? null : key);
    }

    return (
            <div className="">
                {megaEvolutions.map((mega) => {
                    // console.log("Mega evolución:", mega); // Verifica la estructura de los datos
                    return (
                        <div key={mega.id} className='w-full'> 
                            {/* Tipos, nombre, Id */}
                            <MegaHeader name={mega.name} types={mega.types} id={mega.id} />

                            <div className="p-6 w-full">
                                <MegaTabs tab={tab} setTab={setTab}/>
                                {tab === 'info' ? (
                                    <>
                                        {/* Swiper para cambiar entre imagen normal y shiny */}
                                        <MegaSwiper normalSprite={mega.sprite} shinySprite={mega.shinySprite} 
                                            name={mega.name} 
                                        />

                                        {/* Habilidades con efectos */}
                                        <MegaAbilities abilities={mega.abilities} openIndex={openIndex} 
                                            toggleAccordion={toggleAccordion} 
                                        />
                                    </>
                                ) : (
                                    <>
                                        <MegaStats stats={mega.stats} />
                                    </>
                                )}
                            </div>
                            
                        </div>
                    );
                })}
            </div>
    );
};

export default MegaEvolutions;