import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const phoneNumber = "573208242001";
  const defaultMessage = "Hola%20Multiproyectos%20SAS,%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${defaultMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all duration-300 flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 whitespace-nowrap group-hover:opacity-100 transition-opacity pointer-events-none">
        ¡Hablemos por WhatsApp!
      </span>
    </a>
  );
}
