import { Target, Flag, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  const values = [
    "Responsabilidad", "Calidad", "Transparencia", 
    "Innovación", "Cumplimiento", "Trabajo en equipo", "Compromiso social"
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-sm font-bold text-brand-accent tracking-widest uppercase mb-3 font-heading">Sobre Nosotros</h2>
          <h3 className="text-3xl md:text-5xl font-black text-brand-primary mb-6 font-heading leading-tight">Soluciones integrales de alta calidad</h3>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
            En MULTIPROYECTOS SAS desarrollamos soluciones integrales en construcción e ingeniería, ofreciendo servicios de alta calidad para empresas, instituciones y clientes particulares.
          </p>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mt-4 font-medium">
            Contamos con personal calificado, experiencia en múltiples sectores y un firme compromiso con el cumplimiento, la seguridad y la excelencia.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Misión y Visión */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-gray-50 p-8 md:p-10 rounded-xl border border-gray-100 shadow-sm relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-accent group-hover:w-2 transition-all duration-300"></div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-brand-accent/10 rounded-lg flex items-center justify-center">
                  <Target className="w-7 h-7 text-brand-accent" />
                </div>
                <h3 className="text-2xl font-bold text-brand-primary font-heading uppercase tracking-wide">Misión</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Brindar soluciones integrales en construcción, remodelación, ingeniería y servicios especializados, garantizando calidad, cumplimiento y satisfacción a nuestros clientes mediante procesos innovadores y personal altamente capacitado.
              </p>
            </div>

            <div className="bg-gray-50 p-8 md:p-10 rounded-xl border border-gray-100 shadow-sm relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-accent group-hover:w-2 transition-all duration-300"></div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-brand-accent/10 rounded-lg flex items-center justify-center">
                  <Flag className="w-7 h-7 text-brand-accent" />
                </div>
                <h3 className="text-2xl font-bold text-brand-primary font-heading uppercase tracking-wide">Visión</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Ser una empresa líder en el sector de la construcción y servicios integrales en Colombia, reconocida por su excelencia, compromiso y responsabilidad social.
              </p>
            </div>
          </motion.div>

          {/* Valores */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-brand-primary p-10 md:p-12 rounded-xl text-white shadow-xl h-full flex flex-col justify-center"
          >
            <h3 className="text-3xl font-black font-heading mb-8 uppercase tracking-wide">Nuestros Valores</h3>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-accent flex-shrink-0" />
                  <span className="font-semibold text-lg hover:text-brand-accent transition-colors">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
