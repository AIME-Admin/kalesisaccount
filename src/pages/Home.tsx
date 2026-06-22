import SEO from "../components/SEO";
import Hero from "../components/Hero";
import SmartIntake from "../components/SmartIntake";
import Services from "../components/Services";
import FAQAssistant from "../components/FAQAssistant";
import Process from "../components/Process";
import WhyWorkWithUs from "../components/WhyWorkWithUs";
import About from "../components/About";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export default function Home() {
  useDocumentMeta({
    title:
      "Λογιστικό Γραφείο Φιλιππός Καλέσης | Λογιστής - Φοροτεχνικός Α’ Τάξης",
    description:
      "Λογιστικό γραφείο για επιχειρήσεις, ελεύθερους επαγγελματίες και ιδιώτες. Λογιστική υποστήριξη επιχειρήσεων, έναρξη δραστηριότητας, myDATA, μισθοδοσία και φορολογικές δηλώσεις.",
    path: "/",
  });

  return (
    <>
      <SEO />
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
    </>
  );
}
