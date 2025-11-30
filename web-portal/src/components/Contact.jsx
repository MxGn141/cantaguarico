import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, Radio } from 'lucide-react';

export default function Contact() {
    const contactInfo = [
        {
            icon: <Radio size={24} />,
            title: 'Frecuencia',
            value: 'Transmitiendo Online',
            link: '#hero'
        },
        {
            icon: <MapPin size={24} />,
            title: 'Ubicación',
            value: 'Guárico, Venezuela',
            link: '#'
        }
    ];

    const socialMedia = [
        { icon: <Facebook size={24} />, name: 'Facebook', link: '#', color: 'hover:text-blue-500' },
        { icon: <Instagram size={24} />, name: 'Instagram', link: '#', color: 'hover:text-pink-500' },
        { icon: <Twitter size={24} />, name: 'Twitter', link: '#', color: 'hover:text-sky-500' },
        { icon: <Youtube size={24} />, name: 'YouTube', link: '#', color: 'hover:text-red-500' }
    ];

    return (
        <section id="contact" className="section bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px]"></div>

            <div className="section-container relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-orange-500/30 text-orange-400 text-sm font-semibold mb-4">
                        <Mail size={16} />
                        Contacto
                    </div>
                    <h2 className="heading-display heading-lg mb-4">
                        Conéctate con <span className="text-gradient">Nosotros</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Estamos aquí para escucharte. Síguenos en nuestras redes sociales y mantente conectado con Radio Cantaguarico.
                    </p>
                </motion.div>

                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto">
                    {contactInfo.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.link}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="card flex items-center gap-4 hover-lift group"
                        >
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <div>
                                <div className="text-sm text-gray-400 mb-1">{item.title}</div>
                                <div className="font-semibold text-white group-hover:text-gradient transition-all">
                                    {item.value}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Social Media */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h3 className="text-2xl font-bold mb-8">Síguenos en Redes Sociales</h3>
                    <div className="flex justify-center gap-6 flex-wrap">
                        {socialMedia.map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.link}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.1, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                className={`w-16 h-16 rounded-full glass flex items-center justify-center text-white transition-all ${social.color}`}
                                title={social.name}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

