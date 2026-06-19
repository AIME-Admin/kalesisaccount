import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function About() {
  return (
    <section className="section-padding bg-[#F8FAFC]">
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
            <p className="mt-3 text-lg text-[#64748B]">
              Λογιστική υποστήριξη με υπευθυνότητα, οργάνωση και καθαρή
              επικοινωνία.
            </p>
            <div className="mt-6 space-y-4 text-[#64748B] leading-relaxed">
              <p>
                Το Λογιστικό Γραφείο Φιλιππός Καλέσης υποστηρίζει ιδιώτες,
                ελεύθερους επαγγελματίες και επιχειρήσεις σε βασικές λογιστικές
                και φοροτεχνικές ανάγκες. Η προσέγγιση βασίζεται στην καθαρή
                επικοινωνία, την οργανωμένη συγκέντρωση στοιχείων και την
                προσεκτική παρακολούθηση των υποχρεώσεων κάθε πελάτη.
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
              {/* Logo circle */}
              <div className="w-20 h-20 rounded-full bg-[#FEF2F2] flex items-center justify-center">
                <img
                  src="/src/assets/logo.png"
                  alt="Λογότυπο Φιλίππου Καλέση"
                  className="w-[60px] h-[60px] rounded-full"
                  loading="lazy"
                />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-[#111827]">
                Φιλιππός Καλέσης
              </h3>
              <p className="text-sm text-[#64748B]">Λογιστής / Φοροτεχνικός</p>

              <div className="w-full h-px bg-[#E5E7EB] my-5" />

              <div className="flex flex-col gap-3 w-full text-left">
                <a
                  href="tel:+306980144612"
                  className="flex items-center gap-2.5 text-sm text-[#64748B] hover:text-[#B91C1C] transition-colors"
                >
                  <Phone size={16} />
                  <span>+30 698 014 4612</span>
                </a>
                <a
                  href="mailto:kalesisacc@gmail.com"
                  className="flex items-center gap-2.5 text-sm text-[#64748B] hover:text-[#B91C1C] transition-colors"
                >
                  <Mail size={16} />
                  <span>kalesisacc@gmail.com</span>
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
