import React from 'react';
import { Search  } from 'lucide-react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <>
        <div className="w-full fixed z-30 bg-gradient-to-b shadow-xl from-red-100 to-yellow-100">
            <header className="bg-gray-700 text-white">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center justify-between">
                            <Link to="/">
                                <h1 className="text-2xl md:text-3xl font-bold">Poké Web</h1>
                            </Link>
                        <div className="relative w-full max-w-sm ml-4">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                            <input
                                type="text"
                                placeholder="Buscar Pokémon..."
                                className="w-full pl-10 pr-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                            />
                        </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
      </>
    )
}

export default Navbar;