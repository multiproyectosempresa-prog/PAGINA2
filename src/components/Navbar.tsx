import { Menu, X, HardHat } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Inicio', href: '#home' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: 'Proyectos', href: '#portfolio' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full bg-white z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="#home" className="flex items-center gap-3">
              <img src="/LOGOM.png" alt="Multiproyectos Logo" className="h-12 w-auto object-contain" />
              <div className="flex flex-col">
                <span className="font-heading font-black text-[13px] tracking-tight leading-none text-brand-primary">MULTIPROYECTOS</span>
                <span className="text-[11px] text-gray-500 font-bold tracking-widest mt-1 uppercase">S.A.S.</span>
              </div>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-brand-accent px-3 py-2 text-sm font-semibold transition-colors uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="ml-4 px-6 py-2.5 bg-brand-accent text-white font-bold text-sm tracking-wide uppercase rounded-sm hover:bg-brand-accent-hover transition-colors">
              Cotizar
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-4 space-y-1 shadow-lg">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 text-base font-semibold text-gray-700 hover:text-brand-accent hover:bg-gray-50 uppercase tracking-wide rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
             <a
                href="#contact"
                className="block w-full text-center mt-4 px-3 py-3 text-base font-bold text-white bg-brand-accent hover:bg-brand-accent-hover uppercase tracking-wide rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Cotizar Ahora
              </a>
          </div>
        </div>
      )}
    </nav>
  );
}
