import { ChevronRight, Info } from 'lucide-react';

// Componente reutilizable para las Cards
const CardRegionDetail = ({ title, description, imgSrc, infoText, buttonText, onClick }) => (
    <div className="group overflow-hidden transition-all duration-300 hover:shadow-lg rounded-lg border bg-card text-card-foreground">
        <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        {imgSrc ? (
            <div className="relative overflow-hidden aspect-[4/3]">
                <img className="object-cover transition-transform duration-300 group-hover:scale-105" src={imgSrc} alt={title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
        ) : (
            <div className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-primary/10 to-primary/30 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-4 border-primary/20 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20" />
                </div>
            </div>
        )}
        <div className="flex justify-between items-center p-6 bg-card">
            <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs md:text-sm text-muted-foreground">{infoText}</span>
            </div>
            <button 
                onClick={onClick}
                className="bg-stone-200 inline-flex items-center justify-center rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2 group-hover:translate-x-1 transition-transform hover:shadow-lg hover:scale-105 hover:bg-secondary/90 hover:text-secondary-foreground hover:ring-2 hover:ring-secondary/80"
            >
                {buttonText}
                <ChevronRight className="w-4 h-4 ml-2" />
            </button>
        </div>
    </div>
);

export default CardRegionDetail;