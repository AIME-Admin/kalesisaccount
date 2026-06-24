import { motion } from "framer-motion";
import { Check, Clock3 } from "lucide-react";

const audience = [
  "Επιχειρήσεις με τακτικές λογιστικές και φορολογικές υποχρεώσεις",
  "Ελεύθεροι επαγγελματίες με μπλοκάκι ή ατομική επιχείρηση",
  "Ιδιώτες για τις ετήσιες φορολογικές τους υποχρεώσεις",
  "Όσοι ετοιμάζονται να ξεκινήσουν νέα δραστηριότητα",
];

const whenToContact = [
  "Ξεκινάτε νέα δραστηριότητα και θέλετε σωστό στήσιμο",
  "Πλησιάζει προθεσμία για φορολογική δήλωση",
  "Θέλετε πιο τακτική παρακολούθηση των βιβλίων σας",
  "Μπερδεύεστε με myDATA, ΦΠΑ ή μισθοδοσία",
];

export default function AudienceSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center text-[#111827]"
        >
          Σε ποιους απευθυνόμαστε και πότε να επικοινωνήσετε
        </motion.h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {/* A — audience */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-6 md:p-7"
          >
            <h3 className="text-[17px] font-semibold text-[#111827]">
              Σε ποιους απευθυνόμαστε
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {audience.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#FEF2F2] flex items-center justify-center shrink-0">
                    <Check size={14} className="text-[#B91C1C]" />
                  </span>
                  <span className="text-sm text-[#334155]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* B — when to contact */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-6 md:p-7"
          >
            <h3 className="text-[17px] font-semibold text-[#111827]">
              Πότε να επικοινωνήσετε
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {whenToContact.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#FEF2F2] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock3 size={14} className="text-[#B91C1C]" />
                  </span>
                  <span className="text-sm text-[#334155]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
