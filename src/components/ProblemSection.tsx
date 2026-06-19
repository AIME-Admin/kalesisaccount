import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const checklistItems = [
  "Καταγραφή βασικών στοιχείων",
  "Επιλογή υπηρεσίας ενδιαφέροντος",
  "Περιγραφή αιτήματος",
  "Προθεσμία ή επείγουσα ανάγκη",
  "Επικοινωνία από το γραφείο",
];

export default function ProblemSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Left Column: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-[#111827]">
              Οι φορολογικές υποχρεώσεις δεν χρειάζεται να ξεκινούν με χαμένα
              email
            </h2>
            <p className="mt-5 text-[#64748B] leading-relaxed">
              Για έναν επαγγελματία ή μια επιχείρηση, οι λογιστικές και
              φορολογικές υποχρεώσεις μπορούν εύκολα να γίνουν πηγή άγχους:
              προθεσμίες, δηλώσεις, τιμολόγια, μισθοδοσία, myDATA και συνεχείς
              αλλαγές.
            </p>
            <p className="mt-4 text-[#64748B] leading-relaxed">
              Με τη δομημένη φόρμα ενδιαφέροντος, το γραφείο μπορεί να λάβει από
              την αρχή τα βασικά στοιχεία, να καταλάβει την ανάγκη και να
              επικοινωνήσει με πιο οργανωμένο τρόπο.
            </p>
          </motion.div>

          {/* Right Column: Checklist Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-2xl p-6 md:p-8">
              <h3 className="text-lg font-semibold text-[#111827] mb-5">
                Τι περιλαμβάνει η φόρμα:
              </h3>
              <div className="flex flex-col">
                {checklistItems.map((item, i) => (
                  <div
                    key={item}
                    className={`flex items-center gap-3 py-3 ${
                      i < checklistItems.length - 1
                        ? "border-b border-dashed border-[#FECACA]"
                        : ""
                    }`}
                  >
                    <CheckCircle
                      size={20}
                      className="text-[#16A34A] shrink-0"
                    />
                    <span className="text-[15px] text-[#374151]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
