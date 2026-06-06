import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "¿Realizan cotizaciones?",
    answer: "Sí, realizamos cotizaciones personalizadas adaptadas a las necesidades específicas de cada proyecto."
  },
  {
    question: "¿Trabajan en toda Colombia?",
    answer: "Sí, contamos con cobertura nacional para desarrollar proyectos en cualquier parte del país."
  },
  {
    question: "¿Manejan proyectos empresariales?",
    answer: "Sí, trabajamos tanto con empresas e instituciones como con clientes particulares y residenciales."
  },
  {
    question: "¿Ofrecen garantía?",
    answer: "Sí, todos nuestros trabajos y servicios cuentan con garantía de calidad y cumplimiento."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-accent tracking-widest uppercase mb-3 font-heading">FAQ</h2>
          <h3 className="text-3xl md:text-4xl font-black text-brand-primary mb-6 font-heading">Preguntas Frecuentes</h3>
          <div className="w-16 h-1 bg-brand-accent mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-gray-200 rounded-lg bg-white overflow-hidden transition-all duration-200 ${
                openIndex === index ? 'shadow-md border-brand-accent/30' : 'hover:border-gray-300'
              }`}
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-brand-primary font-heading pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-brand-accent transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 font-medium">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
