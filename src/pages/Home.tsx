import SEO from "../components/SEO";
import Hero from "../components/Hero";
import SmartIntake from "../components/SmartIntake";
import AssistantSection from "../components/AssistantSection";
import Services from "../components/Services";
import Process from "../components/Process";
import WhyWorkWithUs from "../components/WhyWorkWithUs";
import About from "../components/About";
import FinalCTA from "../components/FinalCTA";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export default function Home() {
  useDocumentMeta({
    title:
      "Λογιστικό Γραφείο Φίλιππος Καλέσης | Λογιστής - Φοροτεχνικός Α’ Τάξης",
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
        <AssistantSection />
        <Services />
        <Process />
        <WhyWorkWithUs />
        <About />
        <FinalCTA />
      </main>
    </>
  );
}
