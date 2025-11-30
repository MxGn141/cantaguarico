import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, Mic } from 'lucide-react';

export default function Schedule() {
    const programs = [
        {
            day: 'Lunes a Viernes',
            shows: [
                { time: '6:00 AM - 9:00 AM', name: 'Buenos Días Guárico', host: 'María González', icon: '☀️' },
                { time: '9:00 AM - 12:00 PM', name: 'Música y Tradición', host: 'Carlos Pérez', icon: '🎵' },
                { time: '12:00 PM - 2:00 PM', name: 'Al Mediodía', host: 'Ana Rodríguez', icon: '🌞' },
                { time: '2:00 PM - 6:00 PM', name: 'Tarde Llanera', host: 'José Martínez', icon: '🎸' },
                { time: '6:00 PM - 9:00 PM', name: 'Noche de Estrellas', host: 'Laura Sánchez', icon: '⭐' },
                { time: '9:00 PM - 12:00 AM', name: 'Música Nocturna', host: 'DJ Automático', icon: '🌙' }
            ]
        },
        {
            day: 'Sábados',
            shows: [
                { time: '8:00 AM - 12:00 PM', name: 'Sábado Deportivo', host: 'Roberto Díaz', icon: '⚽' },
                { time: '12:00 PM - 6:00 PM', name: 'Fiesta Llanera', host: 'Varios', icon: '🎉' },
                { time: '6:00 PM - 12:00 AM', name: 'Noche de Gala', host: 'DJ Mix', icon: '🎧' }
            ]
        },
        {
            day: 'Domingos',
            shows: [
                { time: '7:00 AM - 10:00 AM', name: 'Domingo Familiar', host: 'Familia Radio', icon: '👨‍👩‍👧‍👦' },
                { time: '10:00 AM - 2:00 PM', name: 'Música Variada', host: 'Automático', icon: '🎼' },
                { time: '2:00 PM - 8:00 PM', name: 'Tarde Dominical', host: 'Pedro Ramírez', icon: '🌅' },
                { time: '8:00 PM - 12:00 AM', name: 'Cierre de Semana', host: 'Varios', icon: '🌃' }
            ]
        }
    ];

    return (
        <section id="schedule" className="section bg-gradient-to-b from-black via-gray-900 to-black">
            <div className="section-container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-orange-500/30 text-orange-400 text-sm font-semibold mb-4">
                        <Calendar size={16} />
                        Programación
                    </div>
                    <h2 className="heading-display heading-lg mb-4">
                        Nuestra <span className="text-gradient">Programación</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Descubre nuestros programas y horarios. Música, noticias y entretenimiento para toda la familia.
                    </p>
                </motion.div>

                {/* Schedule Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {programs.map((daySchedule, dayIndex) => (
                        <motion.div
                            key={daySchedule.day}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: dayIndex * 0.1 }}
                            className="card hover-lift"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-gradient flex items-center gap-2">
                                <Calendar size={24} />
                                {daySchedule.day}
                            </h3>
                            <div className="space-y-4">
                                {daySchedule.shows.map((show, showIndex) => (
                                    <div
                                        key={showIndex}
                                        className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-orange-500/50 transition-all"
                                    >
                                        <div className="flex items-start gap-3">
                                            <span className="text-2xl">{show.icon}</span>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 text-orange-400 text-sm mb-1">
                                                    <Clock size={14} />
                                                    <span className="font-semibold">{show.time}</span>
                                                </div>
                                                <h4 className="font-bold text-white mb-1">{show.name}</h4>
                                                <div className="flex items-center gap-1 text-gray-400 text-sm">
                                                    <Mic size={12} />
                                                    <span>{show.host}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
