import React from 'react';
import { motion } from 'framer-motion';
import { Radio, Heart, Users } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="section bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-600/10 rounded-full blur-[120px]"></div>

            <div className="section-container relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-orange-500/30 text-orange-400 text-sm font-semibold mb-4">
                        <Radio size={16} />
                        Nosotros
                    </div>
                    <h2 className="heading-display heading-lg mb-4">
                        Sobre <span className="text-gradient">Radio Cantaguarico</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        Llevando la voz de Guárico a cada rincón de Venezuela y el mundo.
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Logo Display */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center"
                    >
                        <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-orange-500/30 shadow-2xl">
                            <img
                                src="/logocantaguarico.jpg"
                                alt="Radio Cantaguarico"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <h3 className="text-4xl font-bold">
                            La Voz del <span className="text-gradient">Llano</span>
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Radio Cantaguarico es la emisora que conecta a los guariquenses con su tierra,
                            su cultura y sus tradiciones. Transmitimos las 24 horas del día, llevando música,
                            noticias y entretenimiento a toda Venezuela y el mundo.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Nuestra misión es preservar y promover la rica cultura llanera, manteniendo vivas
                            las tradiciones de Guárico mientras conectamos a nuestra comunidad sin importar
                            dónde se encuentren.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 pt-6">
                            <div className="text-center p-4 glass rounded-xl">
                                <Radio className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-gradient">24/7</div>
                                <div className="text-sm text-gray-400">En Vivo</div>
                            </div>
                            <div className="text-center p-4 glass rounded-xl">
                                <Users className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-gradient">Miles</div>
                                <div className="text-sm text-gray-400">Oyentes</div>
                            </div>
                            <div className="text-center p-4 glass rounded-xl">
                                <Heart className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-gradient">100%</div>
                                <div className="text-sm text-gray-400">Pasión</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
