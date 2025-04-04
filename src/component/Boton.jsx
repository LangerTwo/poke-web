import { ArrowRight } from "lucide-react";

function Boton() {
    return (
        <div>
            <button className="w-full bg-white text-blue-900 font-medium py-2 px-4 rounded transition-colors duration-300 flex items-center justify-center hover:shadow-md cssbuttons-io-button relative text-xs md:text-sm lg:text-lg">
                Ver Más 
                <div className='icon'>
                    <ArrowRight className="w-6 h-6 arrow" />
                </div>
            </button>
        </div>
    );
}

export default Boton;