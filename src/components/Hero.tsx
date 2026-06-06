import { HeroAnimation } from './HeroAnimation';

export function Hero() {
  return (
    <div id="home" className="relative bg-brand-primary pt-20 min-h-screen flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/1.png"
          alt="Modern Architecture"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-primary/95 to-brand-primary/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-24 lg:py-32 flex flex-col items-center">
        
        {/* Titles Section */}
        <div className="max-w-4xl text-center flex flex-col items-center mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-1 bg-brand-accent"></div>
            <span className="text-brand-accent font-bold tracking-widest uppercase text-sm md:text-base font-heading">DESIGN & BUILDING</span>
            <div className="w-12 h-1 bg-brand-accent hidden sm:block"></div>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6 font-heading">
            Construimos proyectos que <br className="hidden lg:block"/> <span className="text-brand-accent">transforman</span> el futuro
          </h1>
          <p className="text-lg md:text-xl text-gray-300/90 mb-8 max-w-2xl leading-relaxed font-medium">
            Soluciones integrales en construcción, remodelación, obras civiles, mantenimiento e ingeniería especializada.
          </p>
        </div>

        {/* Video / Animation Section */}
        <div className="w-full max-w-5xl mb-12">
          <HeroAnimation />
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row gap-5 mb-16">
          <a
            href="#contact"
            className="inline-flex justify-center items-center px-8 py-4 bg-brand-accent text-white font-bold rounded-sm hover:bg-brand-accent-hover transition-colors text-lg shadow-lg hover:-translate-y-0.5 duration-200"
          >
            Cotizar Ahora
          </a>
          <a
            href="#services"
            className="inline-flex justify-center items-center px-8 py-4 border-2 border-white/80 bg-white/5 text-white font-bold rounded-sm hover:bg-white hover:text-brand-primary transition-colors text-lg backdrop-blur-sm shadow-lg hover:-translate-y-0.5 duration-200"
          >
            Ver Servicios
          </a>
        </div>

        <div className="w-full max-w-4xl flex justify-center pb-8 mt-auto">
          <img src="/BANNER.png" alt="Multiproyectos Banner" className="w-full h-auto rounded-xl shadow-2xl relative z-20" />
        </div>
      </div>
    </div>
  );
}
