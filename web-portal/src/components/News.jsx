import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, Calendar, ArrowRight } from 'lucide-react';

export default function News() {
    const newsItems = [
        {
            title: 'Nuevo Programa Musical en Radio Cantaguarico',
            date: '15 de Noviembre, 2025',
            excerpt: 'Estrenamos "Tarde Llanera", un programa dedicado a la música tradicional venezolana con los mejores artistas de la región.',
            image: '🎸',
            category: 'Programación'
        },
        {
            title: 'Celebramos 15 Años al Aire',
            date: '1 de Noviembre, 2025',
            excerpt: 'Radio Cantaguarico cumple 15 años siendo la voz de Guárico. Gracias a todos nuestros oyentes por acompañarnos en este viaje.',
            image: '🎉',
            category: 'Aniversario'
        },
        {
            title: 'Cobertura Especial: Fiestas Patronales',
            date: '20 de Octubre, 2025',
            excerpt: 'Transmisión en vivo desde las fiestas patronales de San Juan de los Morros. No te pierdas la celebración más grande del año.',
            image: '🎊',
            category: 'Eventos'
        },
        {
            title: 'Nueva Aplicación Móvil Disponible',
            date: '10 de Octubre, 2025',
            excerpt: 'Descarga nuestra nueva app y escucha Radio Cantaguarico desde tu smartphone. Disponible para iOS y Android.',
            image: '📱',
            category: 'Tecnología'
        },
        {
            title: 'Entrevista Exclusiva con Artistas Locales',
            date: '5 de Octubre, 2025',
            excerpt: 'Esta semana conversamos con los mejores exponentes de la música llanera. Historias, anécdotas y música en vivo.',
            image: '🎤',
            category: 'Entrevistas'
        },
        {
            title: 'Concurso: Gana Entradas para el Festival',
            date: '1 de Octubre, 2025',
            excerpt: 'Participa en nuestro concurso y gana entradas VIP para el Festival de Música Llanera 2025. ¡No te lo pierdas!',
            image: '🎁',
            category: 'Concursos'
        }
    ];

    return (
        <section id="news" className="section bg-gradient-to-b from-black via-gray-900 to-black">
            <div className="section-container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-orange-500/30 text-orange-400 text-sm font-semibold mb-4">
                        <Newspaper size={16} />
                        Noticias
                    </div>
                    <h2 className="heading-display heading-lg mb-4">
                        Últimas <span className="text-gradient">Noticias</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Mantente informado sobre nuestros eventos, programas especiales y novedades de Radio Cantaguarico.
                    </p>
                </motion.div>

                {/* News Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.map((item, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="card hover-lift group cursor-pointer"
                        >
                            {/* Image/Icon */}
                            <div className="w-full aspect-video bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl mb-4 flex items-center justify-center text-6xl border border-orange-500/30">
                                {item.image}
                            </div>

                            {/* Category & Date */}
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-xs font-semibold text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/30">
                                    {item.category}
                                </span>
                                <div className="flex items-center gap-1 text-gray-500 text-xs">
                                    <Calendar size={12} />
                                    <span>{item.date}</span>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-all">
                                {item.title}
                            </h3>

                            {/* Excerpt */}
                            <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                {item.excerpt}
                            </p>

                            {/* Read More */}
                            <div className="flex items-center gap-2 text-orange-400 text-sm font-semibold group-hover:gap-3 transition-all">
                                <span>Leer más</span>
                                <ArrowRight size={16} />
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
