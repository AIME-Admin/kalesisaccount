import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ClipboardList,
  Send,
  Clock,
  CheckCircle,
  MessageCircle,
  ShieldAlert,
  ExternalLink,
  Phone,
  Mail,
} from "lucide-react";
import {
  GOOGLE_FORM_EMBED_URL,
  GOOGLE_FORM_PUBLIC_URL,
  HAS_FORM_EMBED,
  HAS_FORM_PUBLIC,
  BUSINESS,
} from "../config";

const benefits = [
  {
    icon: Send,
    title: "Λιγότερα μπρος-πίσω μηνύματα",
    desc: "Λαμβάνουμε από την αρχή τα βασικά στοιχεία της ανάγκης σας.",
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
    desc: "Επικοινωνούμε μαζί σας με πιο συγκεκριμένη εικόνα για τα επόμενα βήματα.",
  },
];

export default function SmartIntake() {
  // On mobile the embedded form is heavy, so we load it only on tap.
  const [isMobile, setIsMobile] = useState(false);
  const [showEmbed, setShowEmbed] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 640px)");
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  const embedVisible = HAS_FORM_EMBED && (!isMobile || showEmbed);

  return (
    <section id="intake" className="section-padding bg-white scroll-mt-20">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start max-w-5xl mx-auto">
          {/* Left Column: Explanation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#B91C1C]">
              Φόρμα Ενδιαφέροντος
            </span>
            <h2 className="text-[#111827] mt-3">
              Στείλτε το αίτημά σας οργανωμένα
            </h2>
            <p className="mt-4 text-[#64748B] leading-relaxed">
              Συμπληρώστε τα βασικά στοιχεία σας ώστε να καταλάβουμε γρήγορα τι
              χρειάζεστε και να επικοινωνήσουμε μαζί σας με πιο συγκεκριμένη
              εικόνα.
            </p>

            <div className="mt-8 flex flex-col gap-5">
              {benefits.map((b) => (
                <div key={b.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FEF2F2] flex items-center justify-center shrink-0 mt-0.5">
                    <b.icon size={20} className="text-[#B91C1C]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[15px] text-[#111827]">
                      {b.title}
                    </h3>
                    <p className="text-sm text-[#64748B] mt-0.5">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Prefer to talk first — direct contact */}
            <div className="mt-8 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] px-4 py-4">
              <p className="text-sm font-medium text-[#111827]">
                Προτιμάτε να μιλήσουμε πρώτα;
              </p>
              <div className="mt-3 flex flex-wrap gap-2.5">
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center gap-2 rounded-lg border border-[#E5E7EB] bg-white px-3.5 py-2 text-sm font-medium text-[#111827] hover:border-[#B91C1C] hover:text-[#B91C1C] transition-colors"
                >
                  <Phone size={15} className="text-[#B91C1C]" />
                  <span className="font-mono-tabular">
                    {BUSINESS.phoneDisplay}
                  </span>
                </a>
                <a
                  href={BUSINESS.emailHref}
                  className="inline-flex items-center gap-2 rounded-lg border border-[#E5E7EB] bg-white px-3.5 py-2 text-sm font-medium text-[#111827] hover:border-[#B91C1C] hover:text-[#B91C1C] transition-colors"
                >
                  <Mail size={15} className="text-[#B91C1C]" />
                  Στείλτε email
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            <div
              id="intake-form-card"
              className="bg-white border border-[#E5E7EB] rounded-2xl p-6 md:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.06)] scroll-mt-20"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="icon-circle-red !w-11 !h-11">
                  <ClipboardList size={22} className="text-[#B91C1C]" />
                </span>
                <h3 className="text-lg font-semibold text-[#111827]">
                  Φόρμα ενδιαφέροντος
                </h3>
              </div>
              <p className="text-sm text-[#64748B] mb-5">
                Συμπληρώστε τα στοιχεία σας και θα επικοινωνήσουμε μαζί σας.
              </p>

              {/* Primary direct button — always visible, above the embed */}
              {HAS_FORM_PUBLIC && (
                <a
                  href={GOOGLE_FORM_PUBLIC_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center text-sm"
                >
                  Άνοιγμα φόρμας σε νέο παράθυρο
                  <ExternalLink size={15} />
                </a>
              )}

              {/* Embedded form: direct on desktop/tablet, tap-to-load on mobile.
                  Height is responsive per breakpoint because a cross-origin
                  Google Form can't report its own height. */}
              {HAS_FORM_EMBED ? (
                embedVisible ? (
                  <div className="mt-5 rounded-xl overflow-hidden border border-[#E5E7EB]">
                    <iframe
                      src={GOOGLE_FORM_EMBED_URL}
                      width="100%"
                      height={2350}
                      frameBorder={0}
                      marginHeight={0}
                      marginWidth={0}
                      loading="lazy"
                      title="Φόρμα Ενδιαφέροντος"
                      className="block w-full h-[2700px] sm:h-[2050px] lg:h-[2350px]"
                    >
                      Φόρτωση…
                    </iframe>
                  </div>
                ) : (
                  <div className="mt-4 text-center">
                    <button
                      type="button"
                      onClick={() => setShowEmbed(true)}
                      className="btn-secondary w-full justify-center text-sm"
                    >
                      Εμφάνιση φόρμας στη σελίδα
                    </button>
                    <p className="mt-2 text-xs text-[#64748B]">
                      Στο κινητό η φόρμα ανοίγει με το πάτημα, για ταχύτερη
                      φόρτωση.
                    </p>
                  </div>
                )
              ) : (
                <div className="mt-5 bg-[#F8FAFC] border-2 border-dashed border-[#E5E7EB] rounded-xl min-h-[300px] flex flex-col items-center justify-center text-center px-6 py-10">
                  <ClipboardList size={44} className="text-[#CBD5E1] mb-4" />
                  <p className="text-[#64748B] text-sm max-w-[300px] leading-relaxed">
                    Το έντυπο ενδιαφέροντος θα συνδεθεί εδώ μόλις δημιουργηθεί το
                    Google Form.
                  </p>
                </div>
              )}

              {/* Helper / security note */}
              <div className="mt-5 flex items-start gap-2.5 rounded-xl bg-[#FEF2F2] border border-[#FECACA] px-4 py-3.5">
                <ShieldAlert
                  size={18}
                  className="text-[#B91C1C] shrink-0 mt-0.5"
                />
                <p className="text-xs text-[#7F1D1D] leading-relaxed">
                  Μετά την υποβολή, το γραφείο ελέγχει το αίτημά σας και
                  επικοινωνεί μαζί σας για τα επόμενα βήματα. Μη στέλνετε κωδικούς
                  Taxisnet, τραπεζικούς κωδικούς ή passwords μέσω φόρμας.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
