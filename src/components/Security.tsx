import { ShieldCheck } from 'lucide-react';

export function Security() {
  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <svg fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" className="w-[200%] h-full absolute top-0 -left-[50%]">
          <polygon points="0,100 100,0 100,100" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="md:w-1/3 flex justify-center">
            <div className="w-32 h-32 bg-[#D82728] rounded-full flex items-center justify-center p-6 shadow-[0_0_40px_rgba(216,39,40,0.4)]">
              <ShieldCheck className="w-full h-full text-white" />
            </div>
          </div>

          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-8 text-[#D82728]">Seguridad</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4 text-xl">
                <span className="text-[#D82728] font-bold">*</span>
                <p className="font-light">Personal calificado y equipado de acuerdo a <span className="font-bold">COPASO</span>.</p>
              </div>
              <div className="flex items-start gap-4 text-xl">
                <span className="text-[#D82728] font-bold">*</span>
                <p className="font-light">El manejo de obra se hace bajo la norma internacional <span className="font-bold">HEALTH, SAFETY AND ENVIRONMENT</span>.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
