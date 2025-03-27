import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import MegaTabs from "./megaDetails/MegaTabs";
import MegaAbilities from "./megaDetails/MegaAbilities";
import MegaHeader from "./megaDetails/MegaHeader";

const MegaEvolutions = ({ megaEvolutions }) => {
    const [openIndex, setOpenIndex] = useState(null);
    const [tab, setTab] = useState('info');

    if (!megaEvolutions || megaEvolutions.length === 0) {
        return <p className="text-gray-500">No hay Mega Evoluciones disponibles.</p>;
    }

    const toggleAccordion = (key) => {
        setOpenIndex(openIndex === key ? null : key);
    }

    const getStatColor = (value) => {
        if (value >= 100) return "bg-green-500"
        if (value > 80) return "bg-yellow-500"
        if (value > 40) return "bg-orange-500"
        if (value > 20) return "bg-yellow-500"
        return "bg-red-500"
    }
      
    const statMapping = {
        'hp': 'HP',
        'attack': 'Atk',
        'defense': 'Def',
        'special-attack': 'SpAtk',
        'special-defense': 'SpDef',
        'speed': 'Spd',
    };

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
                                        <Swiper
                                            spaceBetween={10}
                                            slidesPerView={1}
                                            navigation={true} // Activa las flechas de navegación
                                            modules={[Navigation]} // Se debe importar el módulo de navegación
                                            className="relative w-full"
                                        >
                                            <SwiperSlide className="relative h-64 w-full pt-4">
                                                <img 
                                                    src={mega.sprite} 
                                                    alt={`${mega.name} normal`} 
                                                    className="rounded-lg w-full h-full object-contain"
                                                />
                                            </SwiperSlide>
                                            <SwiperSlide className="relative h-64 w-full pt-4">
                                                <img 
                                                    src={mega.shinySprite} 
                                                    alt={`${mega.name} shiny`} 
                                                    className="rounded-lg w-full h-full object-contain"
                                                />
                                            </SwiperSlide>
                                        </Swiper>

                                        {/* Habilidades con efectos */}
                                        <MegaAbilities abilities={mega.abilities} openIndex={openIndex} 
                                            toggleAccordion={toggleAccordion} 
                                        />
                                    </>
                                ) : (
                                    <>
                                        <div className="space-y-4 pt-4 w-full">
                                            <h2 className="text-xl font-semibold mb-2">Estadísticas</h2>
                                            {mega.stats?.map((stat) => (
                                                <div key={stat.name} className="space-y-1 w-full">
                                                    <div className="flex justify-between text-sm w-full">
                                                        <span className="text-sm font-medium">
                                                            {statMapping?.[stat.name] || stat.name}
                                                        </span>
                                                        <span className="text-sm font-medium">{stat.base}</span>
                                                    </div>
                                                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                                                        <div 
                                                        className={`h-2 transition-all duration-500 ${getStatColor(stat.base)}`} 
                                                        style={{ width: `${(stat.base / 150) * 100}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
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
