import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="section-padding bg-[#FEF2F2]">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="container-main text-center max-w-2xl mx-auto"
      >
        <h2 className="text-[#111827]">
          Θέλετε να στείλετε οργανωμένα το αίτημά σας;
        </h2>
        <p className="mt-4 text-[#64748B] leading-relaxed">
          Συμπληρώστε τη φόρμα ενδιαφέροντος ή επικοινωνήστε απευθείας με τον
          Φιλιππό Καλέση για να συζητήσετε την ανάγκη σας.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#intake" className="btn-primary">
            Συμπληρώστε φόρμα
            <ArrowRight size={18} />
          </a>
          <a href="tel:+306980144612" className="btn-secondary !bg-white">
            <Phone size={16} />
            Καλέστε τώρα
          </a>
          <a
            href="mailto:kalesisacc@gmail.com"
            className="btn-secondary !bg-white"
          >
            <Mail size={16} />
            Στείλτε email
          </a>
        </div>
      </motion.div>
    </section>
  );
}
