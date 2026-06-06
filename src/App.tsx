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

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Stats />
        <Portfolio />
        <Testimonials />
        <Security />
        <SocialResponsibility />
        <Clients />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
