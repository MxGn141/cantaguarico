import React from 'react';
import { motion } from 'framer-motion';
import { Radio } from 'lucide-react';
import AudioPlayer from './components/AudioPlayer';
import MetadataDisplay from './components/MetadataDisplay';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white selection:bg-orange-500 selection:text-white">

      {/* Encabezado (Header) */}
      <header className="p-6 flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-2 font-bold text-xl">
          <Radio className="text-orange-500" />
          <span>Radio <span className="text-orange-500">Cantaguarico</span></span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
          {/* Enlaces de navegación (simulados por ahora) */}
          <a href="#" className="hover:text-white transition-colors">Inicio</a>
          <a href="#" className="hover:text-white transition-colors">Programación</a>
          <a href="#" className="hover:text-white transition-colors">Nosotros</a>
          <a href="#" className="hover:text-white transition-colors">Contacto</a>
        </nav>
      </header>

      {/* Sección Principal (Hero) */}
      <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center relative overflow-hidden">

        {/* Elementos de Fondo (Efecto de luz) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[100px] -z-10"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium mb-6 border border-orange-500/20">
            La voz de Guárico
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Siente la <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Música</span>
            <br /> Vive la Tradición
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Transmitiendo lo mejor de nuestra cultura, noticias y entretenimiento las 24 horas del día.
            Conéctate con nosotros desde cualquier lugar del mundo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-full"
        >
          <MetadataDisplay />
        </motion.div>

      </main>

      {/* Pie de página (Footer) */}
      <footer className="pb-24 pt-10 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Radio Cantaguarico. Todos los derechos reservados.</p>
      </footer>

      <AudioPlayer />
    </div>
  );
}

export default App;
