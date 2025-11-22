import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

const STREAM_URL = 'https://radio-cantaguarico.sibciguarico.online/cantaguarico';

export default function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef(new Audio(STREAM_URL));

    useEffect(() => {
        const audio = audioRef.current;

        // Manejar errores o interrupciones del stream
        const handleError = (e) => {
            console.error("Error en el stream de audio:", e);
            setIsPlaying(false);
        };

        audio.addEventListener('error', handleError);

        return () => {
            audio.removeEventListener('error', handleError);
            audio.pause();
            audio.src = '';
        };
    }, []);

    useEffect(() => {
        audioRef.current.volume = isMuted ? 0 : volume;
    }, [volume, isMuted]);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            // Recargar src para asegurar que el stream en vivo esté sincronizado
            audioRef.current.src = STREAM_URL;
            audioRef.current.load();
            audioRef.current.play().catch(e => console.error("Fallo en la reproducción:", e));
        }
        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => setIsMuted(!isMuted);

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-white/10 p-4 text-white z-50">
            <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">

                {/* Botón de Reproducir/Pausar */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={togglePlay}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-600 shadow-lg hover:shadow-orange-500/50 transition-shadow"
                >
                    {isPlaying ? <Pause size={24} fill="white" /> : <Play size={24} fill="white" className="ml-1" />}
                </motion.button>

                {/* Información / Visualizador */}
                <div className="flex-1">
                    <h3 className="font-bold text-lg">Radio Cantaguarico</h3>
                    <p className="text-sm text-gray-400 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                        En Vivo
                    </p>
                </div>

                {/* Control de Volumen */}
                <div className="flex items-center gap-2">
                    <button onClick={toggleMute} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                        {isMuted || volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </button>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={isMuted ? 0 : volume}
                        onChange={(e) => setVolume(parseFloat(e.target.value))}
                        className="w-24 accent-orange-500 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
}
