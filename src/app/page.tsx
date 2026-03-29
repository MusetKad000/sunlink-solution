import ParticleField from "@/components/ParticleField";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import SolarFlowDiagram from "@/components/SolarFlowDiagram";
import WhySolar from "@/components/WhySolar";
import Solutions from "@/components/Solutions";
import HowItWorks from "@/components/HowItWorks";
import Calculator from "@/components/Calculator";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ParticleField />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Hero />
        <SolarFlowDiagram />
        <WhySolar />
        <Solutions />
        <HowItWorks />
        <Calculator />
        <Testimonials />
        <Partners />
        <FAQ />
        <ContactCTA />
        <Footer />
      </div>
    </>
  );
}
