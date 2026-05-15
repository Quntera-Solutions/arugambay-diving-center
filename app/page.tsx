import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import InclusivePhilosophy from '@/components/InclusivePhilosophy';
import WhyDiveWithUs from '@/components/WhyDiveWithUs';
import Services from '@/components/Services';
import PadiCallout from '@/components/PadiCallout';
import Gallery from '@/components/Gallery';
import BookingForm from '@/components/BookingForm';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WaveDivider from '@/components/WaveDivider';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <InclusivePhilosophy />
        {/* white -> ocean-50 transition */}
        <WaveDivider bgClass="bg-white" fill="#f0f9ff" />
        <Services />
        {/* ocean-50 -> white transition */}
        <WaveDivider bgClass="bg-ocean-50" fill="#ffffff" />
        <WhyDiveWithUs />
        <PadiCallout />
        <WaveDivider bgClass="bg-white" fill="#f0f9ff" />
        <Gallery />
        <WaveDivider bgClass="bg-ocean-50" fill="#ffffff" />
        <BookingForm />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
