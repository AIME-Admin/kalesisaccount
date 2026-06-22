import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { BUSINESS, LOGO_SRC, LOGO_ALT } from "../config";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white scroll-mt-20">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-[#111827]">Φιλιππός Καλέσης</h2>
            <p className="mt-3 text-lg text-[#B91C1C] font-medium">
              {BUSINESS.jobTitle}
            </p>
            <div className="mt-6 space-y-4 text-[#64748B] leading-relaxed">
              <p>
                Το Λογιστικό Γραφείο Φιλιππός Καλέσης υποστηρίζει επιχειρήσεις,
                ελεύθερους επαγγελματίες και ιδιώτες σε βασικές λογιστικές και
                φοροτεχνικές ανάγκες.
              </p>
              <p>
                Η προσέγγιση βασίζεται στην καθαρή επικοινωνία, την οργανωμένη
                συγκέντρωση στοιχείων και την προσεκτική παρακολούθηση των
                υποχρεώσεων κάθε πελάτη.
              </p>
              <p>
                Με τη φόρμα ενδιαφέροντος, η αρχική καταγραφή γίνεται πιο απλή
                και πιο δομημένη, ώστε το γραφείο να έχει καλύτερη εικόνα πριν
                την επικοινωνία.
              </p>
            </div>
          </motion.div>

          {/* Right: Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="card-standard w-full max-w-sm flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-[#FEF2F2] flex items-center justify-center">
                <img
                  src={LOGO_SRC}
                  alt={LOGO_ALT}
                  width={68}
                  height={68}
                  className="w-[68px] h-[68px]"
                  loading="lazy"
                />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-[#111827]">
                Φιλιππός Καλέσης
              </h3>
              <p className="text-sm text-[#64748B]">{BUSINESS.jobTitle}</p>

              <div className="w-full h-px bg-[#E5E7EB] my-5" />

              <div className="flex flex-col gap-3 w-full text-left">
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center gap-2.5 text-sm text-[#64748B] hover:text-[#B91C1C] transition-colors"
                >
                  <Phone size={16} className="text-[#B91C1C]" />
                  <span className="font-mono-tabular">
                    {BUSINESS.phoneDisplay}
                  </span>
                </a>
                <a
                  href={BUSINESS.emailHref}
                  className="flex items-center gap-2.5 text-sm text-[#64748B] hover:text-[#B91C1C] transition-colors"
                >
                  <Mail size={16} className="text-[#B91C1C]" />
                  <span>{BUSINESS.email}</span>
                </a>
                <div className="flex items-center gap-2.5 text-sm text-[#94A3B8]">
                  <MapPin size={16} />
                  <span>[ΠΕΡΙΟΧΗ / ΔΙΕΥΘΥΝΣΗ]</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
