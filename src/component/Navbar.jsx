import React from 'react';
// import { PlayIcon as Pokeball } from 'lucide-react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <>
        <div className="w-full fixed z-10 bg-gradient-to-b from-red-100 to-yellow-100">
            <header className="bg-red-600 text-white p-4 shadow-md">
                <div className="container mx-auto flex items-center justify-between">
                    <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
                        {/* <Pokeball className="h-8 w-8" /> */}
                        <span>Poke Web</span>
                    </Link>
                </div>
            </header>
        </div>
      </>
    )
}

export default Navbar;