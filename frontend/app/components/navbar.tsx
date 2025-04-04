import { Link } from "@remix-run/react";
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-primary shadow-md py-1 px-6 md:px-12 sticky top-0 z-50">
            <div className="mx-auto flex items-center justify-between">
                {/* Logo on the left */}
                <div className="flex-shrink-0">
                    <Link to="/home">
                        <img 
                            src="/img/logoSecretosNaranja.png" 
                            alt="Secretos Para Contar" 
                            className="h-20 m-1  w-auto"
                        />
                    </Link>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                    <button 
                        onClick={toggleMenu}
                        className="text-slate-800 dark:text-white hover:text-secondary focus:outline-none"
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor" 
                            className="h-6 w-6"
                        >
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Navigation links - center */}
                <div className="hidden md:flex md:items-center md:justify-center md:flex-1">
                    <div className="flex space-x-8">
                        <Link to="/home" className="nav-link text-slate-800 dark:text-white hover:text-secondary">
                            Inicio
                        </Link>
                        <Link to="/books" className="nav-link text-slate-800 dark:text-white hover:text-secondary">
                            Libros
                        </Link>
                        <Link to="/autors" className="nav-link text-slate-800 dark:text-white hover:text-secondary">
                            Autores
                        </Link>
                        <Link to="/audiobooks" className="nav-link text-slate-800 dark:text-white hover:text-secondary">
                            Audiolibros
                        </Link>
                        <Link to="/about" className="nav-link text-slate-800 dark:text-white hover:text-secondary">
                            Nosotros
                        </Link>
                    </div>
                </div>

                {/* Right side links */}
                <div className="hidden md:flex md:items-center space-x-4">
                    <Link to="/donations" className="nav-link text-slate-800 dark:text-white hover:text-secondary">
                        Donaciones
                    </Link>
                    <Link to="/login" className="px-4 py-2 rounded-md bg-secondary text-white font-medium hover:bg-opacity-90 transition-all">
                        Ingreso
                    </Link>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4`}>
                <div className="flex flex-col space-y-4 mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
                    <Link 
                        to="/home" 
                        className="block px-4 py-2 text-slate-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Inicio
                    </Link>
                    <Link 
                        to="/books" 
                        className="block px-4 py-2 text-slate-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Libros
                    </Link>
                    <Link 
                        to="/autors" 
                        className="block px-4 py-2 text-slate-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Autores
                    </Link>
                    <Link 
                        to="/audiobooks" 
                        className="block px-4 py-2 text-slate-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Audiolibros
                    </Link>
                    <Link 
                        to="/about" 
                        className="block px-4 py-2 text-slate-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Nosotros
                    </Link>
                    <Link 
                        to="/donations" 
                        className="block px-4 py-2 text-slate-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Donaciones
                    </Link>
                    <Link 
                        to="/login" 
                        className="block px-4 py-2 bg-secondary text-white rounded-md font-medium hover:bg-opacity-90"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Ingreso
                    </Link>
                </div>
            </div>
        </nav>
    );
}