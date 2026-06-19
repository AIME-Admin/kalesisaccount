import SEO from "./components/SEO";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import ProblemSection from "./components/ProblemSection";
import Services from "./components/Services";
import SmartIntake from "./components/SmartIntake";
import FAQAssistant from "./components/FAQAssistant";
import About from "./components/About";
import Process from "./components/Process";
import DigitalConvenience from "./components/DigitalConvenience";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <SEO />
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <ProblemSection />
        <Services />
        <SmartIntake />
        <FAQAssistant />
        <About />
        <Process />
        <DigitalConvenience />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
