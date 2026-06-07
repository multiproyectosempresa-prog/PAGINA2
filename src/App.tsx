import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Security } from './components/Security';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Clients } from './components/Clients';
import { SocialResponsibility } from './components/SocialResponsibility';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { BackToTop } from './components/BackToTop';

function HomePage() {
  return (
    <>
      <Hero />
      <Testimonials />
      <Clients />
    </>
  );
}

function NosotrosPage() {
  return (
    <div className="pt-10 pb-20">
      <About />
      <Stats />
      <SocialResponsibility />
    </div>
  );
}

function ServiciosPage() {
  return (
    <div className="pt-10 pb-20">
      <Services />
      <Security />
    </div>
  );
}

function ProyectosPage() {
  return (
    <div className="pt-10 pb-20">
      <Portfolio />
    </div>
  );
}

function ContactoPage() {
  return (
    <div className="pt-10 pb-20">
      <ContactForm />
      <FAQ />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white font-sans antialiased text-gray-900 flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nosotros" element={<NosotrosPage />} />
            <Route path="/servicios" element={<ServiciosPage />} />
            <Route path="/proyectos" element={<ProyectosPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
            <Route path="/cotizar" element={<ContactoPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </div>
    </BrowserRouter>
  );
}
