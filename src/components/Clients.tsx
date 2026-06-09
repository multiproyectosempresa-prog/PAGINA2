export function Clients() {
  const clients = [
    "Sociedad Portuaria Regional de Buenaventura S.A.",
    "Fundación Sociedad Portuaria",
    "TCBUEN Terminal de Contenedores de Buenaventura",
    "Transmilenio",
    "Colpatria",
    "Sociedad Puerto Industrial Aguadulce",
    "OPP Graneles S.A.",
    "Almaviva",
    "CVC",
    "Acuavalle",
    "Federación Nacional de Cafeteros de Colombia"
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-medium text-gray-900">Nuestros clientes</h2>
          <p className="text-xl text-gray-500 font-light mt-1">son nuestra mejor referencia</p>
          <div className="w-16 h-1 bg-[#D82728] mt-6"></div>
        </div>

        <div className="flex justify-center mt-12 bg-gray-50 rounded-xl p-8 border border-gray-100 shadow-sm overflow-hidden">
          <img 
            src="/logos-clientes.jpeg" 
            alt="Nuestros Clientes" 
            className="w-full max-w-5xl h-auto object-contain drop-shadow-sm"
            style={{ 
              imageRendering: 'high-quality',
              WebkitTransform: 'translateZ(0)',
            }} 
          />
        </div>
      </div>
    </section>
  );
}
