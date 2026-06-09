import { Facebook, Instagram, Linkedin, Youtube, MapPin, HardHat } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-brand-primary text-white border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white p-1 rounded">
                <img src="/LOGOM.png" alt="Multiproyectos Logo" className="h-10 w-auto object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-2xl tracking-tight leading-none text-white">MULTIPROYECTOS</span>
                <span className="text-xs text-gray-400 font-bold tracking-widest mt-1 uppercase">S.A.S.</span>
              </div>
            </div>
            <p className="text-gray-400 font-medium leading-relaxed max-w-sm mb-8">
              Desarrollamos soluciones integrales en construcción e ingeniería, ofreciendo servicios de alta calidad con experiencia, responsabilidad y compromiso.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/Multiproyectossas/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/multiproyectosempresa2026/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/multiproyectos-sas-b467a72b8/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@multiproyectossas9286" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-accent transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold font-heading mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-brand-accent font-medium transition-colors">Inicio</Link></li>
              <li><Link to="/nosotros" className="text-gray-400 hover:text-brand-accent font-medium transition-colors">Nosotros</Link></li>
              <li><Link to="/servicios" className="text-gray-400 hover:text-brand-accent font-medium transition-colors">Servicios</Link></li>
              <li><Link to="/proyectos" className="text-gray-400 hover:text-brand-accent font-medium transition-colors">Proyectos</Link></li>
              <li><Link to="/contacto" className="text-gray-400 hover:text-brand-accent font-medium transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold font-heading mb-6">Oficina Principal</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 font-medium">
                <MapPin className="w-5 h-5 text-brand-accent flex-shrink-0" />
                <span>Calle 2 # 5a-11<br/>La Bavaria, Colombia</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm font-medium">
            © {new Date().getFullYear()} Multiproyectos S.A.S. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm font-medium">Política de Privacidad</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm font-medium">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
