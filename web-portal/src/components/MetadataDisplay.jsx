import React, { useState, useEffect } from 'react';
import { Music } from 'lucide-react';
import { motion } from 'framer-motion';

const STATUS_URL = 'https://admin-cantaguarico.sibciguarico.online/status-json.xsl';

export default function MetadataDisplay() {
    const [metadata, setMetadata] = useState({ title: 'Radio Cantaguarico', artist: 'La voz de Guárico' });

    useEffect(() => {
        const fetchMetadata = async () => {
            try {
                const response = await fetch(STATUS_URL);
                const data = await response.json();
                const source = data.icestats.source;
                const mount = Array.isArray(source)
                    ? source.find(s => s.listenurl.includes('cantaguarico'))
                    : source;

                if (mount && mount.title) {
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
        const interval = setInterval(fetchMetadata, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            className="flex flex-col items-center justify-center text-center p-8 glass rounded-2xl border border-orange-500/30 max-w-md w-full shadow-xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
        >
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Music size={40} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">{metadata.title}</h2>
            <p className="text-orange-400 font-semibold text-lg">{metadata.artist}</p>
        </motion.div>
    );
}
