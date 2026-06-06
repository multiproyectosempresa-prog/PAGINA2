import { Users, Leaf, ShieldCheck, Heart, Lightbulb } from 'lucide-react';
import { motion } from 'motion/react';

const principles = [
  {
    icon: Users,
    title: 'Desarrollo Comunitario',
    description: 'Apoyamos iniciativas que impulsan el progreso de las comunidades mediante empleo, capacitación y participación en proyectos que generan transformación social.'
  },
  {
    icon: Leaf,
    title: 'Compromiso Ambiental',
    description: 'Promovemos prácticas de construcción sostenible, optimización de recursos, manejo responsable de residuos y soluciones eficientes que reduzcan el impacto ambiental.'
  },
  {
    icon: ShieldCheck,
    title: 'Ética y Transparencia',
    description: 'Actuamos con integridad, responsabilidad y transparencia en todos nuestros procesos, fortaleciendo relaciones de confianza con clientes, aliados y colaboradores.'
  },
  {
    icon: Heart,
    title: 'Bienestar Laboral',
    description: 'Valoramos nuestro talento humano y fomentamos espacios seguros, inclusivos y orientados al crecimiento profesional y personal de cada integrante de nuestro equipo.'
  },
  {
    icon: Lightbulb,
    title: 'Innovación Sostenible',
    description: 'Integramos nuevas tecnologías y metodologías que permitan construir proyectos modernos, eficientes y sostenibles para las futuras generaciones.'
  }
];

export function SocialResponsibility() {
  return (
    <section id="social-responsibility" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-sm font-bold text-brand-accent tracking-widest uppercase mb-3 font-heading">RSE</h2>
          <h3 className="text-3xl md:text-5xl font-black text-brand-primary mb-6 font-heading leading-tight">Compromiso con la Responsabilidad Social Empresarial</h3>
          <div className="w-24 h-1.5 bg-brand-accent mx-auto mb-8 rounded-full"></div>
          
          <div className="space-y-4">
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              En MULTIPROYECTOS SAS creemos que construir va más allá de desarrollar obras e infraestructura; significa generar impacto positivo en las comunidades, promover el desarrollo sostenible y contribuir al bienestar social y ambiental.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              Nuestra empresa está comprometida con la Responsabilidad Social Empresarial (RSE), implementando prácticas éticas, sostenibles y responsables en cada uno de nuestros proyectos. Trabajamos para crear oportunidades, fortalecer el tejido social y promover un crecimiento equilibrado que beneficie tanto a nuestros clientes como a la sociedad.
            </p>
          </div>
        </motion.div>

        <div className="mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-brand-primary text-center mb-10 font-heading"
          >
            Nuestros Principios de Responsabilidad Social
          </motion.h4>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left justify-center"
          >
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-accent/20 transition-all duration-300 ${
                    index === principles.length - 1 && principles.length % 3 !== 0 
                      ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' 
                      : ''
                  }`}
                >
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                    <Icon className="w-6 h-6 text-brand-accent" />
                  </div>
                  <h5 className="text-xl font-bold text-brand-primary mb-3">{principle.title}</h5>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-brand-primary rounded-2xl p-10 md:p-12 text-center text-white shadow-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h4 className="text-2xl md:text-3xl font-bold mb-4 font-heading text-brand-accent">Construimos Futuro con Propósito</h4>
            <p className="text-lg text-gray-200">
              En MULTIPROYECTOS SAS entendemos que cada proyecto representa una oportunidad para transformar vidas, fortalecer comunidades y construir un mejor futuro para todos.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
