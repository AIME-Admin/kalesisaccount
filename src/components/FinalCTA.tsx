import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { BUSINESS } from "../config";

export default function FinalCTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-[#FEF2F2] via-white to-[#FBFAF8]">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="container-main"
      >
        <div className="relative max-w-3xl mx-auto text-center rounded-3xl bg-white border border-[#FECACA] shadow-[0_30px_60px_-30px_rgba(185,28,28,0.25)] px-6 py-12 md:px-12 md:py-16">
          <span className="badge-red">Ξεκινήστε σήμερα</span>
          <h2 className="text-[#111827] mt-5">
            Ξεκινήστε τη συνεργασία με οργανωμένο τρόπο
          </h2>
          <p className="mt-4 text-[#64748B] leading-relaxed max-w-xl mx-auto">
            Συμπληρώστε τη φόρμα ενδιαφέροντος ή επικοινωνήστε απευθείας με τον
            Φίλιππο για να συζητήσουμε την ανάγκη σας και τα επόμενα βήματα.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#intake" className="btn-primary">
              Συμπληρώστε φόρμα
              <ArrowRight size={18} />
            </a>
            <a href={BUSINESS.phoneHref} className="btn-secondary">
              <Phone size={16} />
              Καλέστε τώρα
            </a>
            <a href={BUSINESS.emailHref} className="btn-secondary">
              <Mail size={16} />
              Στείλτε email
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
