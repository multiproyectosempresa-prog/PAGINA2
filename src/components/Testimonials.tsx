import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Excelente servicio, cumplimiento y calidad en cada detalle.",
    author: "Cliente Empresarial",
    role: "Director de Proyectos"
  },
  {
    quote: "Muy recomendados para remodelaciones y obras civiles.",
    author: "Cliente Residencial",
    role: "Propietario"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-accent tracking-widest uppercase mb-3 font-heading">Testimonios</h2>
          <h3 className="text-3xl md:text-5xl font-black mb-6 font-heading">Lo que dicen nuestros clientes</h3>
          <div className="w-24 h-1.5 bg-brand-accent mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/5 p-8 md:p-10 rounded-xl border border-white/10 relative">
              <div className="flex gap-1 mb-6 text-brand-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-lg md:text-xl font-medium text-gray-200 mb-8 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-bold text-white text-lg font-heading">{testimonial.author}</p>
                <p className="text-brand-accent font-medium">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
