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
        <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-100 mb-16">
          <img src="/BANNER-DOS.png" alt="Algunos de nuestros trabajos" className="w-full h-auto object-cover" />
        </div>

        {/* Canva Embed Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="flex flex-col">
            <h4 className="text-lg md:text-xl font-bold text-center text-brand-primary mb-6 font-heading min-h-[80px] flex items-center justify-center">
              PROPUESTA DE DISEÑO EDIFICIO EL BOLIVAR BARRIO EL BOSQUE MUNICIPAL- B/TURA
            </h4>
            <div className="relative w-full rounded-xl overflow-hidden shadow-xl" style={{ paddingTop: '56.25%' }}>
              <iframe 
                loading="lazy" 
                className="absolute top-0 left-0 w-full h-full border-none" 
                src="https://www.canva.com/design/DAHI5yQoqck/UBTdLPHpAJ4tW9tc3pz0jg/view?embed" 
                allowFullScreen={true}
                title="PROPUESTA DE DISEÑO EDIFICIO EL BOLIVAR BARRIO EL BOSQUE MUNICIPAL- B/TURA"
              ></iframe>
            </div>
            <div className="mt-6 text-center mt-auto pt-6">
               <a href="https://www.canva.com/design/DAHI5yQoqck/UBTdLPHpAJ4tW9tc3pz0jg/view" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-brand-primary text-white font-semibold rounded-lg hover:bg-brand-primary/90 transition-colors w-full justify-center">
                 Abrir presentación completa
               </a>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg md:text-xl font-bold text-center text-brand-primary mb-6 font-heading min-h-[80px] flex items-center justify-center">
              MODELO DE CASA
            </h4>
            <div className="relative w-full rounded-xl overflow-hidden shadow-xl bg-gray-100" style={{ paddingTop: '75%' }}>
              <iframe 
                loading="lazy" 
                className="absolute top-0 left-0 w-full h-full border-none" 
                src="https://www.canva.com/design/DAHK4BNJs1A/xWmmx7aF6-wadbMm8es7wQ/watch?embed" 
                allowFullScreen={true}
                title="MODELO DE CASA"
              ></iframe>
            </div>
            <div className="mt-6 text-center mt-auto pt-6">
               <a href="https://www.canva.com/design/DAHK4BNJs1A/xWmmx7aF6-wadbMm8es7wQ/watch" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-brand-primary text-white font-semibold rounded-lg hover:bg-brand-primary/90 transition-colors w-full justify-center">
                 Abrir presentación completa
               </a>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg md:text-xl font-bold text-center text-brand-primary mb-6 font-heading min-h-[80px] flex items-center justify-center">
              PROPUESTA DE DISEÑO CONDOMINIO FORESTAL SUN
            </h4>
            <div className="relative w-full rounded-xl overflow-hidden shadow-xl" style={{ paddingTop: '56.25%' }}>
              <iframe 
                loading="lazy" 
                className="absolute top-0 left-0 w-full h-full border-none" 
                src="https://www.canva.com/design/DAHE5iXKGtI/b-_p4iLqbwI5qKGVn_WEAg/view?embed" 
                allowFullScreen={true}
                title="PROPUESTA DE DISEÑO CONDOMINIO FORESTAL SUN"
              ></iframe>
            </div>
            <div className="mt-6 text-center mt-auto pt-6">
               <a href="https://www.canva.com/design/DAHE5iXKGtI/b-_p4iLqbwI5qKGVn_WEAg/view" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-brand-primary text-white font-semibold rounded-lg hover:bg-brand-primary/90 transition-colors w-full justify-center">
                 Abrir presentación completa
               </a>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg md:text-xl font-bold text-center text-brand-primary mb-6 font-heading min-h-[80px] flex items-center justify-center">
              IGLESIA LUCIANA
            </h4>
            <div className="relative w-full rounded-xl overflow-hidden shadow-xl" style={{ paddingTop: '56.25%' }}>
              <iframe 
                loading="lazy" 
                className="absolute top-0 left-0 w-full h-full border-none" 
                src="https://www.canva.com/design/DAHIqg6ESgo/kSEGTFDzmnL7uHTV3bGaYQ/view?embed" 
                allowFullScreen={true}
                title="IGLESIA LUCIANA"
              ></iframe>
            </div>
            <div className="mt-6 text-center mt-auto pt-6">
               <a href="https://www.canva.com/design/DAHIqg6ESgo/kSEGTFDzmnL7uHTV3bGaYQ/view" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-brand-primary text-white font-semibold rounded-lg hover:bg-brand-primary/90 transition-colors w-full justify-center">
                 Abrir presentación completa
               </a>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg md:text-xl font-bold text-center text-brand-primary mb-6 font-heading min-h-[80px] flex items-center justify-center">
              PROPUESTA DE DISEÑO EDIFICIO EL BOLIVAR PROPUESTA PRIMER PISO
            </h4>
            <div className="relative w-full rounded-xl overflow-hidden shadow-xl" style={{ paddingTop: '56.25%' }}>
              <iframe 
                loading="lazy" 
                className="absolute top-0 left-0 w-full h-full border-none" 
                src="https://www.canva.com/design/DAHC0JOWkmI/Y4HtiHGa7Su4zy41mxOG4Q/view?embed" 
                allowFullScreen={true}
                title="PROPUESTA DE DISEÑO EDIFICIO EL BOLIVAR PROPUESTA PRIMER PISO"
              ></iframe>
            </div>
            <div className="mt-6 text-center mt-auto pt-6">
               <a href="https://www.canva.com/design/DAHC0JOWkmI/Y4HtiHGa7Su4zy41mxOG4Q/view" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-brand-primary text-white font-semibold rounded-lg hover:bg-brand-primary/90 transition-colors w-full justify-center">
                 Abrir presentación completa
               </a>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg md:text-xl font-bold text-center text-brand-primary mb-6 font-heading min-h-[80px] flex items-center justify-center">
              PROPUESTA DE DISEÑO VIVENDA MIXTA EL CERRITO VALLE CALLE 4a 6-32 BARRIO LA ESTRELLA
            </h4>
            <div className="relative w-full rounded-xl overflow-hidden shadow-xl" style={{ paddingTop: '56.25%' }}>
              <iframe 
                loading="lazy" 
                className="absolute top-0 left-0 w-full h-full border-none" 
                src="https://www.canva.com/design/DAGWSUtrWXg/KpfSQt2JESjOybi1jCua3w/view?embed" 
                allowFullScreen={true}
                title="DISEÑO CERRITO VALLE"
              ></iframe>
            </div>
            <div className="mt-6 text-center mt-auto pt-6">
               <a href="https://www.canva.com/design/DAGWSUtrWXg/KpfSQt2JESjOybi1jCua3w/view" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-brand-primary text-white font-semibold rounded-lg hover:bg-brand-primary/90 transition-colors w-full justify-center">
                 Abrir presentación completa
               </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
