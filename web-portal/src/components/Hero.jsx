import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import MetadataDisplay from './MetadataDisplay';

export default function Hero() {
    const scrollToPlayer = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Animated Background - Optimized */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/15 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-600/15 rounded-full blur-[100px]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-20">
                <div className="flex flex-col items-center text-center space-y-8">
                    {/* Logo - Centered and Optimized */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex justify-center"
                    >
                        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-orange-500/50 shadow-2xl">
                            <img
                                src="/logocantaguarico.jpg"
                                alt="Radio Cantaguarico"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Live Badge */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-orange-500/30 text-orange-400 text-sm font-semibold">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                            En Vivo 24/7
                        </span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="space-y-4"
                    >
                        <h1 className="heading-display heading-xl text-shadow">
                            Radio <span className="text-gradient">Cantaguarico</span>
                        </h1>
                        <p className="text-2xl md:text-3xl font-semibold text-orange-400">
                            La Voz de Guárico
                        </p>
                    </motion.div>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed"
                    >
                        Transmitiendo lo mejor de nuestra cultura, noticias y entretenimiento.
                        <br />
                        <span className="text-orange-400 font-semibold">Conecta con tus raíces desde cualquier lugar del mundo.</span>
                    </motion.p>

                    {/* CTA Button */}
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={scrollToPlayer}
                        className="btn btn-primary text-lg px-8 py-4 gap-2"
                    >
                        <Play size={24} fill="white" />
                        Escuchar Ahora
                    </motion.button>

                    {/* Metadata Display */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="w-full flex justify-center"
                    >
                        <MetadataDisplay />
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1.5 h-1.5 bg-orange-500 rounded-full"
                    ></motion.div>
                </div>
            </motion.div>
        </section>
    );
}
