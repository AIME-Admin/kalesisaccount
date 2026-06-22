import SEO from "./components/SEO";
import Analytics from "./components/Analytics";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SmartIntake from "./components/SmartIntake";
import Services from "./components/Services";
import FAQAssistant from "./components/FAQAssistant";
import Process from "./components/Process";
import WhyWorkWithUs from "./components/WhyWorkWithUs";
import About from "./components/About";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <SEO />
      <Analytics />
      <Navbar />
      <main>
        <Hero />
        <SmartIntake />
        <Services />
        <FAQAssistant />
        <Process />
        <WhyWorkWithUs />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
