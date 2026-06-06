import { Building2, Users, Calendar, Map, Award } from 'lucide-react';

const stats = [
  { value: '+100', label: 'Proyectos realizados', icon: Building2 },
  { value: '+50', label: 'Clientes satisfechos', icon: Users },
  { value: '+10', label: 'Años de experiencia', icon: Calendar },
  { value: 'Nacional', label: 'Cobertura', icon: Map },
  { value: '100%', label: 'Equipo certificado', icon: Award },
];

export function Stats() {
  return (
    <section className="bg-brand-primary py-16 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 text-center">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="flex flex-col items-center">
                <Icon className="w-8 h-8 text-brand-accent mb-4" strokeWidth={1.5} />
                <span className="text-3xl md:text-4xl font-black text-white font-heading mb-2 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-sm md:text-base text-gray-400 font-medium">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
