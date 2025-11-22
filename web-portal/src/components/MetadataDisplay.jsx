import React, { useState, useEffect } from 'react';
import { Music } from 'lucide-react';

const STATUS_URL = 'https://radio-cantaguarico.sibciguarico.online/status-json.xsl';

export default function MetadataDisplay() {
    const [metadata, setMetadata] = useState({ title: 'Radio Cantaguarico', artist: 'La voz de Guárico' });

    useEffect(() => {
        const fetchMetadata = async () => {
            try {
                const response = await fetch(STATUS_URL);
                const data = await response.json();
                const source = data.icestats.source;
                // Manejar si 'source' es un array (múltiples montajes) o un objeto único
                const mount = Array.isArray(source)
                    ? source.find(s => s.listenurl.includes('cantaguarico'))
                    : source;

                if (mount && mount.title) {
                    // A menudo el título viene como "Artista - Canción"
                    const parts = mount.title.split(' - ');
                    if (parts.length > 1) {
                        setMetadata({ artist: parts[0], title: parts.slice(1).join(' - ') });
                    } else {
                        setMetadata({ artist: 'En Vivo', title: mount.title });
                    }
                }
            } catch (e) {
                console.error("Error obteniendo metadatos:", e);
            }
        };

        fetchMetadata();
        const interval = setInterval(fetchMetadata, 10000); // Actualizar cada 10s
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center text-center p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 max-w-md w-full mx-auto mt-8">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-600 rounded-full flex items-center justify-center mb-4 shadow-lg animate-pulse-slow">
                <Music size={32} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-1">{metadata.title}</h2>
            <p className="text-orange-300 font-medium">{metadata.artist}</p>
        </div>
    );
}
