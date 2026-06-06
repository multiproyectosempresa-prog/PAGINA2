import { Building2, Paintbrush, SearchCode, Settings, Zap, Wrench } from 'lucide-react';
import { motion } from 'motion/react';

const serviceCategories = [
  {
    title: "Construcción",
    icon: Building2,
    items: ["Obras civiles", "Vivienda", "Edificaciones", "Estructuras", "Urbanismo"]
  },
  {
    title: "Remodelaciones",
    icon: Paintbrush,
    items: ["Casas", "Oficinas", "Locales comerciales", "Acabados", "Drywall y pintura"]
  },
  {
    title: "Ingeniería",
    icon: SearchCode,
    items: ["Diseños estructurales", "Consultoría", "Supervisión técnica", "Planos", "Presupuestos"]
  },
  {
    title: "Mantenimiento",
    icon: Settings,
    items: ["Industrial", "Residencial", "Empresarial", "Correctivo y preventivo"]
  },
  {
    title: "Electricidad y Redes",
    icon: Zap,
    items: ["Instalaciones eléctricas", "Cableado estructurado", "Cámaras de seguridad", "Automatización"]
  },
  {
    title: "Complementarios",
    icon: Wrench,
    items: ["Soldadura", "Carpintería", "Plomería", "Impermeabilización", "Techos y cubiertas"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-bold text-brand-accent tracking-widest uppercase mb-3 font-heading">Nuestros Servicios</h2>
          <h3 className="text-3xl md:text-5xl font-black text-brand-primary mb-6 font-heading">¿Qué Hacemos?</h3>
          <div className="w-24 h-1.5 bg-brand-accent mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left"
        >
          {serviceCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-brand-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-brand-primary font-heading mb-6">{category.title}</h4>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
