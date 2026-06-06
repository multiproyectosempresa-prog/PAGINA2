import { motion } from 'motion/react';

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center"
      >
        <h2 className="text-sm font-bold text-brand-accent tracking-widest uppercase mb-3 font-heading">Portafolio</h2>
        <h3 className="text-3xl md:text-5xl font-black text-brand-primary mb-6 font-heading">Proyectos Destacados</h3>
        <div className="w-24 h-1.5 bg-brand-accent mx-auto mt-4 rounded-full"></div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-100">
          <img src="/ALGUNOSTRABAJOS.png" alt="Algunos de nuestros trabajos" className="w-full h-auto object-cover" />
        </div>
      </motion.div>
    </section>
  );
}
