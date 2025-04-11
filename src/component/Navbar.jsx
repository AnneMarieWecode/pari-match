import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <header className="bg-blue-900 shadow-lg sticky top-0 z-50">
                <div className="container mx-auto flex justify-between items-center p-4">
                    <div className="flex items-center">
                        <div className="text-3xl font-bold text-white">
                            <Link to={'/'}><span className='text-red-500'>P</span>ARI <span className='text-red-500'>M</span>ATCH</Link>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        <Link to={'/login'}>
                            <button className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-blue-900 transition-colors duration-300">
                                Connexion
                            </button>
                        </Link>
                        <Link>
                            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-300">
                                S'INSCRIRE
                            </button>
                        </Link>
                    </div>

                    <button
                        className="md:hidden text-white"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {menuOpen && (
                <div className="md:hidden bg-blue-900 p-4 animate-fadeIn">
                    <div className="flex flex-col space-y-3">
                        <Link to={'/login'} className="bg-transparent border text-center border-white text-white px-4 py-2 rounded hover:bg-white hover:text-blue-900 transition-colors duration-300">
                            <button >
                                Connexion
                            </button>
                        </Link>
                        <Link className="bg-red-600 text-white px-4 py-2 text-center rounded hover:bg-red-700 transition-colors duration-300">
                            <button>
                                S'INSCRIRE
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}