import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const MegaSwiper = ({ normalSprite, shinySprite, name }) => {
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            navigation={true} // Activa las flechas de navegación
            modules={[Navigation]} // Importa el módulo de navegación
            className="relative w-full"
        >
            <SwiperSlide className="relative h-64 w-full pt-4">
                <img 
                    src={normalSprite} 
                    alt={`${name} normal`} 
                    className="rounded-lg w-full h-full object-contain"
                />
            </SwiperSlide>
            <SwiperSlide className="relative h-64 w-full pt-4">
                <img 
                    src={shinySprite} 
                    alt={`${name} shiny`} 
                    className="rounded-lg w-full h-full object-contain"
                />
            </SwiperSlide>
        </Swiper>
    );
};

export default MegaSwiper;