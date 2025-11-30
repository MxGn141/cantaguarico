import React from 'react';
import { Heart, Radio } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="relative bg-gradient-to-b from-gray-900 to-black border-t border-white/10 pt-16 pb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="text-center mb-12">
                    {/* Brand */}
                    <a href="#hero" onClick={scrollToTop} className="inline-flex items-center gap-3 mb-6 group">
                        <img
                            src="/logocantaguarico.jpg"
                            alt="Radio Cantaguarico"
                            className="h-16 w-16 rounded-full object-cover ring-2 ring-orange-500/50 group-hover:ring-orange-500 transition-all"
                        />
                        <div>
                            <span className="font-bold text-2xl text-white">Radio</span>
                            <span className="font-bold text-2xl ml-1 text-gradient">Cantaguarico</span>
                        </div>
                    </a>
                    <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                        La voz de Guárico. Transmitiendo lo mejor de nuestra cultura, noticias y
                        entretenimiento las 24 horas del día.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-orange-400">
                        <Radio size={20} />
                        <span className="font-semibold">Transmitiendo 24/7</span>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm text-center md:text-left">
                            © {currentYear} Radio Cantaguarico. Todos los derechos reservados.
                        </p>
                        <p className="text-gray-500 text-sm flex items-center gap-2">
                            Hecho con <Heart size={16} className="text-red-500 fill-red-500" /> en Guárico, Venezuela
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

