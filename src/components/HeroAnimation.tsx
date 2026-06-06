import { motion } from 'motion/react';

export function HeroAnimation() {
  return (
    <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] flex items-center justify-center p-2 sm:p-4 md:p-8" style={{ perspective: '1200px' }}>
      <motion.div
        className="relative w-full h-full rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden border border-white/10 bg-black flex items-center justify-center group"
        animate={{
          rotateY: [10, -5, 10],
          rotateX: [2, 5, 2],
          y: [-5, 5, -5],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <video 
          src="/videomiultiproyectos.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-contain z-10 relative"
          onError={(e) => {
            const target = e.target as HTMLVideoElement;
            target.style.display = 'none';
            if (target.nextElementSibling) {
              (target.nextElementSibling as HTMLElement).style.display = 'flex';
            }
          }}
        />
        
        {/* Fallback Display if video is missing */}
        <div className="absolute inset-0 z-0 flex flex-col items-center justify-center text-center p-6 bg-brand-primary/80 hidden">
          <p className="text-white font-bold mb-2">Video No Encontrado</p>
          <p className="text-sm text-gray-300 max-w-xs">
            Sube tu video a la carpeta public/ con el nombre <code className="bg-black/50 px-1 py-0.5 rounded text-brand-accent">videomiultiproyectos.mp4</code>
          </p>
        </div>

        {/* Persistent Grid Layout for Tech Touch */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none opacity-20 z-20"></div>
        
        {/* Border Glow */}
        <div className="absolute inset-0 border border-brand-accent/20 rounded-2xl pointer-events-none z-20"></div>
      </motion.div>
    </div>
  );
}
