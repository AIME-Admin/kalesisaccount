import { motion } from "framer-motion";
import {
  ClipboardList,
  Send,
  Clock,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

const benefits = [
  {
    icon: Send,
    title: "Λιγότερα μπρος-πίσω μηνύματα",
    desc: "Το γραφείο λαμβάνει από την αρχή τα βασικά στοιχεία.",
  },
  {
    icon: Clock,
    title: "Πιο γρήγορη αξιολόγηση",
    desc: "Η υπηρεσία και η ανάγκη σας καταγράφονται καθαρά.",
  },
  {
    icon: CheckCircle,
    title: "Καλύτερη προετοιμασία",
    desc: "Μπορεί να ζητηθούν τα σωστά δικαιολογητικά από την αρχή.",
  },
  {
    icon: MessageCircle,
    title: "Σαφές επόμενο βήμα",
    desc: "Ο Φιλιππός Καλέσης μπορεί να επικοινωνήσει μαζί σας με πιο συγκεκριμένη εικόνα.",
  },
];

const GOOGLE_FORM_EMBED_URL = "[GOOGLE_FORM_EMBED_URL]";
const GOOGLE_FORM_PUBLIC_URL = "[GOOGLE_FORM_PUBLIC_URL]";
const hasFormUrl = !GOOGLE_FORM_EMBED_URL.includes("[");

export default function SmartIntake() {
  return (
    <section id="intake" className="section-padding bg-white">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start max-w-5xl mx-auto">
          {/* Left Column: Explanation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="badge-red mb-5 inline-block">
              Φόρμα Ενδιαφέροντος
            </span>
            <h2 className="text-[#111827] mt-4">
              Στείλτε το αίτημά σας οργανωμένα
            </h2>
            <p className="mt-4 text-[#64748B] leading-relaxed">
              Συμπληρώστε τα βασικά στοιχεία σας ώστε το γραφείο να καταλάβει
              γρήγορα τι χρειάζεστε και να επικοινωνήσει μαζί σας με τα επόμενα
              βήματα.
            </p>

            {/* Benefits */}
            <div className="mt-8 flex flex-col gap-5">
              {benefits.map((b) => (
                <div key={b.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FEF2F2] flex items-center justify-center shrink-0 mt-0.5">
                    <b.icon size={20} className="text-[#B91C1C]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[15px] text-[#111827]">
                      {b.title}
                    </h4>
                    <p className="text-sm text-[#64748B] mt-0.5">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-2">
                <ClipboardList size={24} className="text-[#B91C1C]" />
                <h3 className="text-lg font-semibold text-[#111827]">
                  Φόρμα ενδιαφέροντος
                </h3>
              </div>
              <p className="text-sm text-[#64748B] mb-6">
                Συμπληρώστε τα στοιχεία σας και θα υπάρξει επικοινωνία από το
                γραφείο.
              </p>

              {/* Form Placeholder / Embed */}
              {hasFormUrl ? (
                <div className="rounded-xl overflow-hidden border border-[#E5E7EB]">
                  <iframe
                    src={GOOGLE_FORM_EMBED_URL}
                    width="100%"
                    height="800"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    title="Φόρμα Ενδιαφέροντος"
                    className="w-full"
                  >
                    Φόρτωση...
                  </iframe>
                </div>
              ) : (
                <div className="bg-[#F8FAFC] border-2 border-dashed border-[#E5E7EB] rounded-xl h-[500px] flex flex-col items-center justify-center text-center px-6">
                  <ClipboardList size={48} className="text-[#CBD5E1] mb-4" />
                  <p className="text-[#64748B] text-sm max-w-[280px]">
                    Το έντυπο ενδιαφέροντος θα συνδεθεί εδώ μόλις δημιουργηθεί
                    το Google Form.
                  </p>
                  <a
                    href={
                      GOOGLE_FORM_PUBLIC_URL.includes("[")
                        ? "#"
                        : GOOGLE_FORM_PUBLIC_URL
                    }
                    className={`btn-secondary mt-5 text-sm !px-5 !py-2.5 ${
                      GOOGLE_FORM_PUBLIC_URL.includes("[")
                        ? "opacity-50 pointer-events-none"
                        : ""
                    }`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Άνοιγμα φόρμας σε νέο παράθυρο
                  </a>
                </div>
              )}
            </div>

            {/* Note */}
            <p className="text-xs text-[#94A3B8] text-center mt-4">
              Τα αιτήματα καταγράφονται οργανωμένα ώστε να γίνεται πιο εύκολη
              η παρακολούθηση.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
