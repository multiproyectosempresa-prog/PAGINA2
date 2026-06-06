import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactForm() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-accent tracking-widest uppercase mb-3 font-heading">Cotizaciones</h2>
          <h3 className="text-3xl md:text-5xl font-black text-brand-primary mb-6 font-heading">Hablemos de tu proyecto</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">Contáctanos hoy y recibe asesoría personalizada para llevar a cabo tu visión.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-brand-primary text-white p-8 rounded-xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 -mx-10 -my-10 w-40 h-40 bg-brand-accent/20 rounded-full blur-2xl"></div>
              
              <h4 className="text-2xl font-bold font-heading mb-8">Información de Contacto</h4>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium mb-1">WhatsApp / Teléfono</p>
                    <p className="font-semibold">+57 320 824 2001</p>
                    <p className="font-semibold">(2) 244 7522</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium mb-1">Correo Electrónico</p>
                    <a href="mailto:multiproyectosempresa@gmail.com" className="font-semibold hover:text-brand-accent transition-colors break-all">
                      multiproyectosempresa@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium mb-1">Ubicación</p>
                    <p className="font-semibold">Calle 2 # 5a-11</p>
                    <p className="font-semibold text-gray-300">La Bavaria</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-medium mb-1">Horario</p>
                    <p className="font-semibold">Lunes a Viernes</p>
                    <p className="font-semibold text-gray-300">8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 h-full">
              <h4 className="text-2xl font-bold font-heading text-brand-primary mb-8">Solicitar Cotización</h4>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Nombre completo *</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all bg-gray-50 focus:bg-white" placeholder="Ej: Juan Pérez" required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Empresa (Opcional)</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all bg-gray-50 focus:bg-white" placeholder="Nombre de su empresa" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Teléfono / WhatsApp *</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all bg-gray-50 focus:bg-white" placeholder="Ej: +57 300 000 0000" required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Correo electrónico *</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all bg-gray-50 focus:bg-white" placeholder="ejemplo@correo.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Ciudad *</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all bg-gray-50 focus:bg-white" placeholder="Ej: Bogotá" required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Servicio requerido *</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all bg-gray-50 focus:bg-white text-gray-700" required>
                      <option value="">Seleccione un servicio</option>
                      <option value="construccion">Construcción y Obras Civiles</option>
                      <option value="remodelacion">Remodelación</option>
                      <option value="ingenieria">Ingeniería y Diseño</option>
                      <option value="mantenimiento">Mantenimiento</option>
                      <option value="electricidad">Electricidad y Redes</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Mensaje / Detalles del proyecto *</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent transition-all bg-gray-50 focus:bg-white resize-none" placeholder="Cuéntenos más sobre su proyecto..." required></textarea>
                </div>
                <button type="submit" className="w-full py-4 px-6 bg-brand-accent text-white font-bold rounded-lg hover:bg-brand-accent-hover transition-colors text-lg uppercase tracking-wide">
                  Solicitar Cotización
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
