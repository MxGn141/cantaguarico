import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

const STREAM_URL = 'https://admin-cantaguarico.sibciguarico.online/cantaguarico';

export default function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef(new Audio(STREAM_URL));

    useEffect(() => {
        const audio = audioRef.current;

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
            audioRef.current.src = STREAM_URL;
            audioRef.current.load();
            audioRef.current.play().catch(e => console.error("Fallo en la reproducción:", e));
        }
        setIsPlaying(!isPlaying);
    };

    const toggleMute = () => setIsMuted(!isMuted);

    return (
        <div className="fixed bottom-0 left-0 right-0 glass-dark border-t border-orange-500/30 p-4 text-white z-50 shadow-2xl">
            <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">

                {/* Play/Pause Button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={togglePlay}
                    className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 shadow-lg hover:shadow-glow-strong transition-all"
                >
                    {isPlaying ? <Pause size={28} fill="white" /> : <Play size={28} fill="white" className="ml-1" />}
                </motion.button>

                {/* Info Display */}
                <div className="flex-1 flex items-center gap-3">
                    <img
                        src="/logocantaguarico.jpg"
                        alt="Radio Cantaguarico"
                        className="h-12 w-12 rounded-lg object-cover ring-2 ring-orange-500/50 hidden sm:block"
                    />
                    <div>
                        <h3 className="font-bold text-lg">Radio Cantaguarico</h3>
                        <p className="text-sm text-gray-300 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                            Transmisión en Vivo
                        </p>
                    </div>
                </div>

                {/* Volume Control */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={toggleMute}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                        {isMuted || volume === 0 ? <VolumeX size={22} /> : <Volume2 size={22} />}
                    </button>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={isMuted ? 0 : volume}
                        onChange={(e) => setVolume(parseFloat(e.target.value))}
                        className="w-24 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer hidden sm:block"
                        style={{
                            background: `linear-gradient(to right, #FF8C00 0%, #FF8C00 ${(isMuted ? 0 : volume) * 100}%, #374151 ${(isMuted ? 0 : volume) * 100}%, #374151 100%)`
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

